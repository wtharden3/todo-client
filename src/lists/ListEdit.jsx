import React, { useState } from 'react';
import {
  Badge,
  Button,
  ButtonToggle,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Toast,
  ToastBody,
  ToastHeader 
} from 'reactstrap';

const ListEdit = props => {
  const [listId, setListId] = useState(props.listToUpdate.id);
  const [editlistName, setEditlistName] = useState(props.listToUpdate.listName);
  const [editDur, setEditDur] = useState(props.listToUpdate.duration);
  const [edittimeDue, setEdittimeDue] = useState(props.listToUpdate.timeDue);
  const [editDesc, setEditDesc] = useState(props.listToUpdate.description);
  const [editisChec, setEditisChec] = useState(props.listToUpdate.isChecked);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const listUpdate = (event, list) => {
    event.preventDefault();
    console.log('listid', listId);
    console.log('listToUpdate', props.listToUpdate);
    fetch(`http://localhost:4000/lists/update/${listId}`, {
      method: 'PUT',
      body: JSON.stringify({
        listName: editlistName,
        duration: editDur,
        timeDue: edittimeDue,
        description: editDesc,
        isChecked: editisChec,
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
    <Modal  isOpen={true} toggle={toggle}>
<Badge  color="dark"><h1 className="text-center">Edit Task:</h1></Badge>
      <ModalBody className="bg-dark">
        <Form onSubmit={listUpdate}>
          <FormGroup>
          <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
           TaskName
          </ToastHeader>
          <ToastBody>
          <Input
              type="text"
              name="taskname"
              value={editlistName}
              onChange={e => setEditlistName(e.target.value)}
            ></Input>
          </ToastBody>
        </Toast>
      </div>        
          </FormGroup>
          <FormGroup>
            <div className="p-3 bg-success my-2 rounded">
        <Toast>
          <ToastHeader>
            Description
          </ToastHeader>
          <ToastBody>
          <Input
              name="description"
              value={editDesc}
              onChange={e => setEditDesc(e.target.value)}
            />
          </ToastBody>
              </Toast>
              </div>
          </FormGroup>
          <FormGroup>
          <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Duration
          </ToastHeader>
                <ToastBody>
                <Input
              type="text"
              name="duration"
              value={editDur}
              onChange={e => setEditDur(e.target.value)}
            ></Input>  
          </ToastBody>
        </Toast>
      </div>
          </FormGroup>
          <FormGroup>
            <div className="p-3 bg-warning my-2 rounded">
        <Toast>
          <ToastHeader>
            TimeDue
          </ToastHeader>
          <ToastBody>
          <Input
              type="text"
              name="timedue"
              value={edittimeDue}
              onChange={e => setEdittimeDue(e.target.value)}
            />
          </ToastBody>
        </Toast>
      </div> 
          </FormGroup>
          <Button type="submit" color="info">Edit your Task!</Button>{' '}
          <Button type="submit" outline color="info" >Cancel</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ListEdit;
