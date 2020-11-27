import React, {useState, useEffect} from 'react';
import{Nav, NavItem, Button} from 'reactstrap';

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [token, setToken] = useState()
  //logout not working. Need to fix
  const logOut = () => {
    props.setToken(undefined);
    //will display a popup or modal alerting they are going to log out

  }

  return(
    // <div className="col-3">
    //   <p>Vertical Nav</p>
    //   <Nav vertical>
    //     <NavItem>
    //       NavItem 1
    //     </NavItem>
    //     <NavItem>
    //       NavItem 1
    //     </NavItem>
    //     <NavItem>
    //       NavItem 1
    //     </NavItem>
    //     <NavItem>
    //       NavItem 1
    //     </NavItem>
    //     <NavItem>
    //       <Button onClick={signUpToggle}>{onLoginPage  ? 'Switch to Signup ' : 'Switch to Login'}</Button>
    //     </NavItem>
    //   </Nav>
    // </div>
    //two different navs 1 with login signup toggle that will
    <div className="col-3">
      <p>Vertical Nav</p>
      <Nav vertical>
        <NavItem>
          NavItem 1
        </NavItem>
        <NavItem>
          NavItem 1
        </NavItem>
        <NavItem>
          NavItem 1
        </NavItem>
        <NavItem>
          NavItem 1
        </NavItem>
        <NavItem>
          <Button onClick={logOut}>Log Out</Button>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Navbar;
