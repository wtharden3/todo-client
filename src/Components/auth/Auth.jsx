import Login from './Login';
import Signup from './Signup';

const Auth = (props) => {
  return(
    <div className="container">
      <div className="row">
        <Login token={props.token} setToken={props.setToken}/>
        <Signup />
      </div>
    </div>
  )
}

export default Auth;