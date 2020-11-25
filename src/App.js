import React, { useState } from 'react';
import Auth from './Components/auth/Auth';

const App = () => {
  const [token, setToken] = useState(undefined);

  return (
    <div>
      Hello
      {token ? (
        <h1>
          This is where the Home Page will go and it needs to contain a Logout
          button
        </h1>
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
