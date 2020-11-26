import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ListCreate = props => {
  const [date, setDate] = useState('');
  const [listName, setListname] = useState('');
  const [duration, setDuration] = useState('');
  const [timeDue, setTimedue] = useState('');
  const [description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    localStorage.setItem('token', props.token);
  }, [props.token]);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:4000/lists/createlist', {
      method: 'POST',
      body: JSON.stringify({
        list: {
          date: date,
          listName: listName,
          description: description,
          duration: duration,
          timeDue: timeDue,
          isChecked: isChecked,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then(res => res.json())
      .then(listData => {
        console.log(listData);
        setDate('');
        setListname('');
        setDuration('');
        setTimedue('');
        setDescription('');
        setIsChecked('');
        props.fetchLists();
      });
  };

  return (
    <div>
      <h3>Log a List, Here!!</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date" />
          <Input
            name="date"
            placeholder="Enter today's date: "
            value={date}
            onChange={e => setDate(e.target.value)}
          />
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
        <Button type="submit">Click here to submit your task!</Button>
      </Form>
    </div>
  );
};

export default ListCreate;
