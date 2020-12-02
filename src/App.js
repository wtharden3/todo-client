import React, { useState } from 'react';
import './fontawesome';
import Home from './Components/home/Home';
import Auth from './Components/auth/Auth';

//import ListIndex from './lists/ListIndex';

const App = () => {
  const [token, setToken] = useState(undefined);

  const updateToken = newToken => {
    setToken(newToken);
  }

  const viewConductor = () => {
    return token ? <Home token={token} setToken={setToken}/> : <Auth updateToken={updateToken} />
  }

  return (
    <div>
      {viewConductor()}
      {/**
      we need to toggle between Auth and Front Page of app; 
      if token is not undefined, show Auth which give the option 
      to log in or sign up */}
    </div>
  );
};

// import React, {useState, useEffect} from 'react';
// import Sitebar from './home/Navbar';
// import Auth from './auth/Auth';
// import ListIndex from './lists/ListIndex';


// const App = () => {
//   const [sessionToken, setSessionToken] = useState('');

//   useEffect(() => {
//     if (localStorage.getItem('token')){
//       setSessionToken(localStorage.getItem('token'));
//     }
//   }, [])

//   const updateToken = (newToken) => {
//     localStorage.setItem('token', newToken);
//     setSessionToken(newToken);
//     console.log(sessionToken);
//   }

//   const clearToken = () => {
//     localStorage.clear();
//     setSessionToken('');
//   }

//   const protectedViews = () => {
//     return (sessionToken === localStorage.getItem('token') ? <ListIndex token ={sessionToken}/>
//     : <Auth updateToken={updateToken}/>)
//   }
//   return(
//     <div>
//       <Sitebar clearToken={clearToken}/>
//       {protectedViews()}

//     </div>
//   );
// }

export default App;
