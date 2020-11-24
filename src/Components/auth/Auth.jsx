import Login from './Login';
import Signup from './Signup';

const Auth = () => {
  return(
    <div className="container">
      <div className="row">
        <Login />
        <Signup />
      </div>
    </div>
  )
}

export default Auth;