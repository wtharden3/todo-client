import React, {useState, useEffect} from 'react';
import Sitebar from './Components/home/Navbar';
import Auth from './Components/Auth/Auth';
import ListIndex from './lists/ListIndex';


const App = () => {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <ListIndex token ={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }
  return(
    <div>
      <Sitebar clearToken={clearToken}/>
      {protectedViews()}

    </div>
  );
}

export default App;