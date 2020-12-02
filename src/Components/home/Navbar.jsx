import { Button } from 'reactstrap';
import Logo from '../../assets/taskmasterlogo.png';

const Navbar = props => {
  const logOut = () => {
    props.setToken(undefined);
  };

  return (
    <nav className="navbar navbar-dark bg-dark w-100 mb-5">
      <div className="img-container">
        <img className="w-100" src={Logo} alt="task master logo" />
      </div>

      <Button className="px-5 text-white btn-outline-info" onClick={logOut}>
        Log Out
      </Button>
    </nav>
  );
};

export default Navbar;
