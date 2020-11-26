import Navbar from './Navbar';
import ListIndex from "../../lists/ListIndex";

const Home = (props) => {
  return(
    <div className="row">
          <Navbar token={props.token} setToken={props.setToken}/>
          <div className="col-9">
            Insert List components here
            <ListIndex token={props.token}/>
          </div>

        </div>
  )
}

export default Home;