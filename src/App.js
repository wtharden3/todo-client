import React, { useState } from 'react';
import Home from './Components/home/Home';
import Auth from './Components/auth/Auth';

const App = () => {
  const [token, setToken] = useState(undefined);

  return (
    <div>
      {token ? (
        // <div className="row">
        //   <Navbar />
        //   <h1 className="col-9">
        //     This is where the Home Page will go and it needs to contain a Logout
        //     button
        //   </h1>
        // </div>
        <Home token={token} setToken={setToken}/>
      ) : (
        <Auth token={token} setToken={setToken} />
      )}
      {/**
      we need to toggle between Auth and Front Page of app; 
      if token is not undefined, show Auth which give the option 
      to log in or sign up */}
    </div>
  );
};

export default App;
