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
      lastname,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center">Signup</h1>
        <FormGroup>
          <Input
            className="rounded-pill form-control-lg"
            type="text"
            name="firstname"
            id="firstnameSU"
            placeholder="First Name"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
          {!firstname ? (
            <span className="text-danger">Please enter your first name</span>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Input
            className="rounded-pill form-control-lg"
            type="text"
            name="lastname"
            id="lastnameSU"
            placeholder="Last Name"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
          {!lastname ? (
            <span className="text-danger">Please enter your last name</span>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Input
            className="rounded-pill form-control-lg"
            type="email"
            name="email"
            id="emailSU"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {!email ? (
            <span className="text-danger">Please enter your first name</span>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Input
            className="rounded-pill form-control-lg"
            type="password"
            name="password"
            id="passwordSU"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {!password ? (
            <span className="text-danger">Please enter your first name</span>
          ) : null}
        </FormGroup>
        <Button className="py-2 w-100 rounded-pill my-3" type="submit">Submit</Button>
      </Form>
    </div>
  );
};
export default Signup;
