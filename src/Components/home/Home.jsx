import Navbar from './Navbar';

const Home = (props) => {
  return(
    <div className="row">
          <Navbar token={props.token} setToken={props.setToken}/>
          <h1 className="col-9">
            This is where the Home Page will go and it needs to contain a Logout
            button
          </h1>
        </div>
  )
}

export default Home;