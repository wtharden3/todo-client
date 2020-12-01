import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Modal, ModalBody, Input, ModalHeader } from 'reactstrap';

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
        setIsChecked('');
        props.fetchLists();
      })
      .then(console.log('This should be completed.'));
  };

  return (
    <div>
      <Modal isOpen={props.modal} toggle={toggle}>
      <ModalHeader>Log a List, Here!!</ModalHeader>
      <ModalBody>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date" />
          <Input
            type="date"
            name="date"
            placeholder="Enter today's date: "
            value={date}
            onChange={e => setDate(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="listName" />
          <Input
            name="listName"
            placeholder="Name of task: "
            value={listName}
            onChange={e => setListname(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description" />
          <Input
            name="description"
            placeholder="Enter a brief description of the task: "
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="duration" />
          <Input
            name="duration"
            placeholder="Estimated time to completion: "
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="timeDue" />
          <Input
          type="date"
            name="timeDue"
            placeholder="Needs completed by: "
            value={timeDue}
            onChange={e => setTimedue(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="isChecked" />
          <Input
            name="isChecked"
            value={isChecked}
            onChange={e => setIsChecked(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Click me to submit your task!</Button>
        <hr></hr>
        <Button outline color="secondary" onClick={() => props.setModal(false)}>Nevermind!</Button>
      </Form>
      </ModalBody>
      </Modal>
    </div>
  );
};

export default ListCreate;
