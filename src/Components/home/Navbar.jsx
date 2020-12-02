import { Button } from 'reactstrap';

const Navbar = props => {
  const logOut = () => {
    props.setToken(undefined);
  };

  return (
    <nav className="navbar navbar-dark bg-dark w-100 mb-5">
      <Button className="btn-info">Create a New Task</Button>
      <Button className="px-5 text-white btn-outline-info" onClick={logOut}>Log Out</Button>
    </nav>
  );
};

export default Navbar;
