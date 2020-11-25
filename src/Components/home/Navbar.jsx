import{Nav, NavItem, Button} from 'reactstrap';

const Navbar = (props) => {
  //const [token, setToken] = useState()
  const logOut = () => {
    props.setToken(undefined);
  }

  return(
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