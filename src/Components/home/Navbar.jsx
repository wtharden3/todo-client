import{Nav, NavItem, Button} from 'reactstrap';

const Navbar = () => {
  //const [token, setToken] = useState()
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
        <Button>Log Out</Button>
      </Nav>
    </div>
  )
}

export default Navbar;