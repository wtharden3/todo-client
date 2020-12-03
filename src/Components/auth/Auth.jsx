import React, { useState } from 'react';
import slogan from '../../assets/slogan.png';
import logo from '../../assets/taskmasterlogo.png';
import Login from './Login';
import Signup from './Signup';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Jumbotron,
} from 'reactstrap';

const Auth = props => {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSigninLogin = () => {
    return showSignIn ? (
      <div className="col-sm-12">
        <div className="card-group ">
          <Card className="bg-info text-center pt-5">
            <CardBody className="bg-info">
              <h2 className="text-white">Already have an account?</h2>
              <p className="text-white text-left text-md-center py-3">
                Click the button below if you have an account and need to log
                in.
              </p>
              <Button
                className="rounded-pill text-center px-5 my-4 py-2 align-self-end"
                color="secondary"
                onClick={() => setShowSignIn(false)}
              >
                Login
              </Button>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Signup />
            </CardBody>
          </Card>
        </div>
      </div>
    ) : (
      <div className="col-sm-12">
        <div className="card-group py-5">
          <Card className="py-5">
            <CardBody>
              <Login updateToken={props.updateToken} />
            </CardBody>
          </Card>
          <Card className="bg-info text-center py-5">
            <CardBody>
              <h2 className="text-white">Don't Have an Account?</h2>
              <p className="text-white text-left text-md-center py-3">
                Click the button below to sign up and create an account.
              </p>
              <Button
                className="rounded-pill text-center px-5 my-4 py-2 align-self-end"
                color="secondary"
                onClick={() => setShowSignIn(true)}
              >
                Signup
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-5">
      <Jumbotron className="jumbo-container">
        <div className="jumbo-overlay">
          <p className="lead">
            <img
              className="w-100"
              src={logo}
              alt="helping you keep your life in check"
            />
            <div className="slogan-container">
              <img
                className="w-100"
                src={slogan}
                alt="helping you keep your life in check"
              />
            </div>
          </p>
        </div>
      </Jumbotron>
      <div className="row no-gutters">
        {toggleSigninLogin()}
        <div className="col-sm-6"></div>
      </div>
    </div>
  );
};

export default Auth;
