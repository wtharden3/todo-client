import React, { useState } from 'react';
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
} from 'reactstrap';

const Auth = props => {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSigninLogin = () => {
    return showSignIn ? (
      <div className="col-sm-12">
        <div className="card-group ">
          <Card>
            <CardBody className="bg-info d-flex align-items-bottom">
              <Button
                className="align-self-end"
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
        <div className="card-group">
          <Card>
            <CardBody>
              <Login updateToken={props.updateToken} />
            </CardBody>
          </Card>
          <Card className="bg-info text-center">
            <CardBody>
              <p className="text-white">Do you need to sign up?</p>
              <Button
                className="rounded-pill text-center px-5"
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
    <div className="container">
      <div className="row no-gutters py-5">
        {/**toggle login */}
        {/**
        <div className="col-sm-12">
          <div className="card-group">
            <Card>
              <CardBody>
                <Login updateToken={props.updateToken} />
              </CardBody>
            </Card>
            <Card className="bg-info text-center">
              <CardBody>
                <p className="text-white">Do you need to sign up?</p> 
                <Button className="rounded-pill text-center px-5" color="secondary">Signup</Button>
              </CardBody>
            </Card>
          </div>
        </div>

        //toggle signup

        <div className="col-sm-12">
          <div className="card-group">
            <Card>
              <CardBody className="bg-info d-flex align-items-bottom">Login (Purple)
                <Button className="align-self-end" color="secondary">Login</Button>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Signup />
              </CardBody>
            </Card>
          </div>
        </div>

      
      
      
    
       */}
        {toggleSigninLogin()}
        {/**toggle signup */}
        <div className="col-sm-6"></div>
      </div>
    </div>
  );
};

export default Auth;
