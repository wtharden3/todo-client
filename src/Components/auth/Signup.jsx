import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        user: {  firstname: firstname, lastname: lastname, email: email, password: password,},
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };
  return (
    <div>
      <h1>Sign Up</h1>
          <Form onSubmit={handleSubmit}>
          <FormGroup>
          <Label htmlFor="firstname">Firstname</Label>
          <Input
            onChange={(e) => setFirstname(e.target.value)}
            name="firstname"
            value={firstname}
          />
              </FormGroup>
              <FormGroup>
          <Label htmlFor="lastname">Lastname</Label>
          <Input
            onChange={(e) => setLastname(e.target.value)}
            name="lastname"
            value={lastname}
          />
        </FormGroup>     
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};
export default Signup;
