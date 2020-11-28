import React from 'react';
import { Table, Button } from 'reactstrap';

const ListTable = props => {
  const deleteList = list => {
    fetch(`http://localhost:4000/lists/delete/${list.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-type': 'application/json',
        Authorization: props.token,
      }),
    }).then(() => props.fetchLists());
  };

  const listMapper = () => {
    return props.lists.map((list, index) => {
      return (
        <tr key={index}>
          <th scope="row">{list.owner_id}</th>
          <td>{list.date}</td>
          <td>{list.listName}</td>
          <td>{list.duration}</td>
          <td>{list.timeDue}</td>
          <td>{list.description}</td>
          <td>{`${list.isChecked}`}</td>
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
    <div>
      <h3>list History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>date</th>
            <th>listName</th>
            <th>Duration</th>
            <th>timeDue</th>
            <th>Description</th>
            <th>isChecked</th>
          </tr>
        </thead>
        <tbody>{listMapper()}</tbody>
      </Table>
    </div>
  );
};
export default ListTable;
