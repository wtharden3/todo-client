import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [token, setToken] = useState(undefined);

  useEffect(() => {
    localStorage.setItem('token', props.token);
  }, [props.token]);

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
        //props.setToken(data.token);
        props.updateToken(data.token);
      })
      .catch(err => console.log(err));

    return props.token;
  };

  return (
    <div className="py-3">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center pb-3">Login</h1>
        <FormGroup>
          <Input
            className="rounded-pill form-control-lg"
            type="email"
            name="email"
            id="emailLI"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            className="rounded-pill form-control-lg"
            type="password"
            name="password"
            id="passwordLI"
            placeholder="*******"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button className="rounded-pill w-100 my-3 py-2" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
