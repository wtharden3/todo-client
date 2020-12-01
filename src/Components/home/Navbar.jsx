import { Button } from 'reactstrap';

const Navbar = props => {
  const logOut = () => {
    props.setToken(undefined);
  };

  return (
    <nav className="navbar navbar-dark bg-dark w-100">
      <Button>Create a New Task</Button>
      <Button onClick={logOut}>Log Out</Button>
    </nav>
  );
};

export default Navbar;
