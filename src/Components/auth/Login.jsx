import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);
  
  const handleSubmit = e => {
    e.preventDefault();

    const url = 'http://localhost:4000/user/login';

    const bodyObj = {
      email,
      password,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data.token=====> ', data.token);
        setToken(data.token);
      })
      .catch(err => console.log(err));

    return token;
  };

  return (
    <div className="col-md-6">
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
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
            id="password"
            placeholder="Please Enter Your Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          {!password ? <span>Please enter your first name</span> : null}
        </FormGroup>
        <br />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
