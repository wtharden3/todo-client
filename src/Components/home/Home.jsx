import Navbar from './Navbar';
import ListIndex from '../../lists/ListIndex';

const Home = props => {
  return (
    <div className="row">
      <Navbar className="mb-5" token={props.token} setToken={props.setToken} />
      <div className="col-12">
        <ListIndex token={props.token} />
      </div>
    </div>
  );
};

export default Home;
