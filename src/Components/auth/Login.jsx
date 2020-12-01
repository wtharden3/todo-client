import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [token, setToken] = useState(undefined);

  useEffect(() => {
    localStorage.setItem('token', props.token);
  }, [props.token]);
  
  const handleSubmit = e => {
    e.preventDefault();

    const url = `${APIURL}/user/login`;

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
        //props.setToken(data.token);
        props.updateToken(data.token);
      })
      .catch(err => console.log(err));

    return props.token;
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
            id="emailLI"
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
            id="passwordLI"
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
