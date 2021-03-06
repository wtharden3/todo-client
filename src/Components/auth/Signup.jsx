import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';
const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const [signUpFormInvalid, setSignupFormInvalid] = useState(false);
  
  const toggleSignUpAndThankYou = () => {
    return isSignUpSuccessful ? (
      <div>
        <h1 className="text-center">Thank you!</h1>
        <p>You have been registered. Please go to the Login Page to log in.</p>
      </div>
    ) : (
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
            required
          />
          {/*!firstname ? (
            <span className="text-danger">Please enter your first name</span>
          ) : null*/}
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
            required
          />
          {/*!lastname ? (
            <span className="text-danger">Please enter your last name</span>
          ) : null*/}
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
            required
          />
          {/*!email ? (
            <span className="text-danger">Please enter your first name</span>
          ) : null*/}
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
            required
          />
          {/*!password ? (
            <span className="text-danger">Please enter your first name</span>
          ) : null*/}
        </FormGroup>
        <Button className="py-2 w-100 rounded-pill my-3" type="submit">
          Submit
        </Button>
      { signUpFormInvalid ? (<p className="text-center text-danger">Please complete the signup form</p> ): null}
      </Form>
    );
  };
  //const [signup, setSignup] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const url = `${APIURL}/user/signup`;
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
      .then(data => {
        console.log('submit data', data);
        if (data.user) {
          setIsSignUpSuccessful(true);
          setSignupFormInvalid(false);
        } else {
          setSignupFormInvalid(true);
        }
      })
      .catch(err => console.log(err));
  };
  return <div>{toggleSignUpAndThankYou()}</div>;
};
export default Signup;