import React, { useState } from 'react';
import './fontawesome';
import Home from './Components/home/Home';
import Auth from './Components/auth/Auth';
import './App.css'

//import ListIndex from './lists/ListIndex';

const App = () => {
  const [token, setToken] = useState(undefined);

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  const viewConductor = () => {
    return token ? (
      <Home token={token} setToken={setToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
    // <div>{/* <FontAwesomeIcon icon={faEdit} /> */}</div>;
  };

  return (
    <div>
      {viewConductor()}
    </div>
  );
};
export default App;
