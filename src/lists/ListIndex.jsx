import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ListCreate from './ListCreate';
import ListTable from './ListTable';
import ListEdit from './ListEdit';

const ListIndex = props => {
   const [lists, setLists] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [listToUpdate, setListUpdate] = useState({});

  const fetchLists = () => {
    fetch('http://localhost:4000/lists/getalltasks', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token,
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
          <ListCreate fetchLists={fetchLists} token={props.token} />
        </Col>
        <Col md="9">
          <ListTable
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
        ) : (
          null
        )}
      </Row>
    </Container>
  )
}
export default ListIndex;
