import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ListCreate from './ListCreate';
import ListTable from './ListTable';
import ListEdit from './ListEdit';
import APIURL from '../helpers/environment';

const ListIndex = props => {
  const [lists, setLists] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [listToUpdate, setListUpdate] = useState({});
  const [modal, setModal] = useState(false);

  const fetchLists = () => {
    fetch(`${APIURL}/lists/getalltasks`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then(res => res.json())
      .then(logData => {
        setLists(logData);
        console.log(logData);
      });
  };
  useEffect(() => {
    fetchLists();
  }, []);

  const editUpdateList = list => {
    setListUpdate(list);
    console.log(list);
  };
  const updateOn = () => {
    setUpdateActive(true);
  };
  const updateOff = () => {
    setUpdateActive(false);
  };

  return (
    <Container>
      <Row>
        <Col md="3">
          <ListCreate fetchLists={fetchLists} modal={modal} setModal={setModal} token={props.token} />
        </Col>
        <Col sm="12">
          <ListTable
            modal={modal}
            setModal={setModal}
            lists={lists}
            editUpdateList={editUpdateList}
            updateOn={updateOn}
            fetchLists={fetchLists}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <ListEdit
            listToUpdate={listToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchLists={fetchLists}
          />
        ) : null}
      </Row>
    </Container>
    
  );
};
export default ListIndex;
