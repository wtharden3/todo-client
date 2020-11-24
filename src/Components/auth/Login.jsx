import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <div className="col-md-6">
      <Form>
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Login;