import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ListCreate from "./WorkoutCreate";
import ListTable from "./WorkoutTable";
import ListEdit from "./WorkoutEdit";

const ListIndex = (props) => {
  const [lists, setlists] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [listToUpdate, setListUpdate] = useState({});

  const fetchLists = () => {
    fetch("http://localhost:3000/list", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setLists(logData);
      });
  };
  useEffect(() => {
    fetchLists();
  }, []);

  const editUpdateList = (list) => {
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
          <WorkoutTable
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
          <></>
        )}
      </Row>
    </Container>
  );
};
export default ListIndex;
