import Login from './Login';
import Signup from './Signup';

const Auth = (props) => {
  return(
    <div className="container">
      <div className="row">
        <Login updateToken={props.updateToken}/>
        <Signup />
      </div>
    </div>
  )
}

export default Auth;