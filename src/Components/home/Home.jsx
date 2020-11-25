import Navbar from './Navbar';
import ListIndex from "../../lists/ListIndex";

const Home = (props) => {
  return(
    <div className="row">
          <Navbar token={props.token} setToken={props.setToken}/>
          <div className="col-9">
            This is where the Home Page will go and it needs to contain a Logout
            button
            <ListIndex token={props.token}/>
          </div>

        </div>
  )
}

export default Home;