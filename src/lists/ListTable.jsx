import React from "react";
import { Table, Button } from "reactstrap";

const ListTable = (props) => {
  const deleteList = (list) => {
    fetch(`http://localhost:4000/list/${list.listName}`, {
      method: "DELETE",
      headers: new headers({
        "Content-type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchLists());
  };

  const listMapper = () => {
    return props.lists.map((list, index) => {
      return (
        <tr key={index}>
              <th scope="row">{list.id}</th>
              <td>{list.result}</td>
          <td>{list.listname}</td> 
          <td>{list.duration}</td>
          <td>{list.timedue}</td>
          <td>{list.descrition}</td>
          <td>{list.ischecked}</td>
              <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateList(list);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteList(list);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h3>list History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>listName</th>
            <th>Duration</th>
                      <th>timeDue</th>
                      <th>Description</th> 
                      <th>isChecked</th>      
          </tr>
        </thead>
        <tbody>{listMapper()}</tbody>
      </Table>
    </>
  );
};
export default ListTable;