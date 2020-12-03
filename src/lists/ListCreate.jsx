import React, { useState, useEffect } from 'react';
import { Badge, Button, Form, FormGroup, Label, Modal, ModalBody, Input, ModalHeader, Toast, ToastHeader,ToastBody } from 'reactstrap';

const ListCreate = props => {
  const [date, setDate] = useState('');
  const [listName, setListname] = useState('');
  const [duration, setDuration] = useState(0);
  const [timeDue, setTimedue] = useState('');
  const [description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // const [modal, setModal] = useState(false);
  const toggle = () => props.setModal(true);

  useEffect(() => {
    localStorage.setItem('token', props.token);
  }, [props.token]);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:4000/lists/createlist', {
      method: 'POST',
      body: JSON.stringify({
        date: date,
        listName: listName,
        description: description,
        duration: duration,
        timeDue: timeDue,
        isChecked: isChecked,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then(console.log('Step one is happening.'))
      .then(res => res.json())
      .then(console.log('Step two is happening.'))
      .then(listData => {
        console.log(listData);
        props.setModal(false);
        setDate('');
        setListname('');
        setDuration('');
        setTimedue('');
        setDescription('');
        setIsChecked(false);
        props.fetchLists();
      })
      .then(console.log('This should be completed.'));
  };

  return (
    <div>
      <Modal className="bg-dark" isOpen={props.modal} toggle={toggle}>
      {/* <ModalHeader>Log a List, Here!!</ModalHeader> */}
      <Badge color="dark"><h2 className="text-center">Make your new task here, dude!!</h2></Badge>
      <ModalBody className="bg-dark">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
        <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader> 
          <Label htmlFor="date">Today's date:</Label>
          </ToastHeader>
          <ToastBody>
            {/* This is a toast on a primary background — check it out! */}
          <Input
            type="date"
            name="date"
            placeholder="Enter today's date: "
            value={date}
            onChange={e => setDate(e.target.value)}
          ></Input>
          </ToastBody>
        </Toast>
      </div>
        </FormGroup>
        <FormGroup>
        <div className="p-3 bg-warning my-2 rounded">
        <Toast>
          <ToastHeader>
          <Label htmlFor="listName">Name of task:</Label>
          </ToastHeader>
          <ToastBody> 
          <Input
            name="listName"
            placeholder="Make a name for your task here: "
            value={listName}
            onChange={e => setListname(e.target.value)}
          />
          </ToastBody>
        </Toast>
      </div>
        </FormGroup>
        <FormGroup>
        <div className="p-3 bg-success my-2 rounded">
        <Toast>
          <ToastHeader>
          <Label htmlFor="description">Task Description</Label>
          </ToastHeader>
          <ToastBody>
          <Input
            name="description"
            placeholder="Enter a brief description of the task: "
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          </ToastBody>
        </Toast>
      </div>
        </FormGroup>
        <FormGroup>
        <div className="p-3 bg-warning my-2 rounded">
        <Toast>
          <ToastHeader>
          <Label htmlFor="duration">Task duration</Label>
          </ToastHeader>
          <ToastBody>
          <Input
            name="duration"
            placeholder="Estimated time to completion: "
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />
          </ToastBody>
        </Toast>
      </div>
        </FormGroup>
        <FormGroup>
        <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>
          <Label htmlFor="timeDue">Date task is due</Label>
          </ToastHeader>
          <ToastBody>
          <Input
          type="date"
            name="timeDue"
            placeholder="Enter when your task needs to be completed by: "
            value={timeDue}
            onChange={e => setTimedue(e.target.value)}
          />
          </ToastBody>
        </Toast>
      </div>
        </FormGroup>
        {/* <FormGroup>
          <Label htmlFor="isChecked" />
          <Input
            name="isChecked"
            value={isChecked}
            onChange={e => setIsChecked(e.target.value)}
          />
        </FormGroup> */}
        <Button className="w-100 py-3 text-center" type="submit">Click me to submit your task!</Button>
        <hr></hr>
        <Button outline color="secondary" onClick={() => props.setModal(false)}>Oh nevermind bub, I'm good! </Button>
      </Form>
      </ModalBody>
      </Modal>
    </div>
  );
};

export default ListCreate;
