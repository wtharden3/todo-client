import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';

const ListEdit = props => {
  const [listId, setListId] = useState(props.listToUpdate.id);
  const [editlistName, setEditlistName] = useState(props.listToUpdate.listName);
  const [editDur, setEditDur] = useState(props.listToUpdate.duration);
  const [edittimeDue, setEdittimeDue] = useState(props.listToUpdate.timeDue);
  const [editDesc, setEditDesc] = useState(props.listToUpdate.description);
  const [editisChec, setEditisChec] = useState(props.listToUpdate.isChecked);
  //whitney
  const [modal, setModal] = useState(false);

  //whitney
  const toggle = () => setModal(!modal);

  const listUpdate = (event, list) => {
    event.preventDefault();
    //whitney change 1
    console.log('listid', listId);
    console.log('listToUpdate', props.listToUpdate);
    fetch(`http://localhost:4000/lists/update/${listId}`, {
      method: 'PUT',
      body: JSON.stringify({
        listname: editlistName,
        duration: editDur,
        timedue: edittimeDue,
        description: editDesc,
        ischecked: editisChec,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    }).then(res => {
      props.fetchLists();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader>Enter a List</ModalHeader>
      <ModalBody>
        <Form onSubmit={listUpdate}>
          <FormGroup>
            <Label htmlFor="isChecked">Edit isChecked:</Label>
            <Input
              name="isChecked"
              value={editisChec}
              onChange={e => setEditisChec(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Edit Descrition:</Label>
            <Input
              name="description"
              value={editDesc}
              onChange={e => setEditDesc(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="timedue">Edit timeDue:</Label>
            <Input
              type="text"
              name="timedue"
              value={edittimeDue}
              onChange={e => setEdittimeDue(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="duration">Edit Duration:</Label>
            <Input
              type="text"
              name="duration"
              value={editDur}
              onChange={e => setEditDur(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="listname">Edit listName:</Label>
            <Input
              type="text"
              name="listname"
              value={editlistName}
              onChange={e => setEditlistName(e.target.value)}
            ></Input>
          </FormGroup>
          <Button type="submit">Update the list!</Button>
          {/**whitney */}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ListEdit;
