import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [signup, setSignup] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const url = 'http://localhost:4000/user/signup';

    const bodyObj = {
      email,
      password,
      firstname,
      lastname
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    })
    .then(res => res.json())
    .then(data =>console.log(data) )
    .catch(err => console.log(err));
  }

  return (
    <div className="col-md-6">
      <Form onSubmit={handleSubmit}>
      <h1>Signup</h1>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
            type="text"
            name="firstname"
            id="firstnameSU"
            placeholder="Please Enter Your First Name"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
          <br />
          {!firstname ? <span>Please enter your first name</span> : null}
        </FormGroup>

        <br />
        <br />

        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input
            type="text"
            name="lastname"
            id="lastnameSU"
            placeholder="Please Enter Your First Name"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
          <br />
          {!lastname ? <span>Please enter your last name</span> : null}
        </FormGroup>

        <br />
        <br />

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="emailSU"
            placeholder="Please Enter Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          {!email ? <span>Please enter your first name</span> : null}
        </FormGroup>

        <br />

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="passwordSU"
            placeholder="Please Enter A Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          {!password ? <span>Please enter your first name</span> : null}
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Signup;
