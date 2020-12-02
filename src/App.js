import React, { useState } from "react";
import "./fontawesome";
import Home from "./Components/home/Home";
import Auth from "./Components/auth/Auth";
import "./App.css";
import "./index.css";
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
      {/**
      we need to toggle between Auth and Front Page of app; 
      if token is not undefined, show Auth which give the option 
      to log in or sign up */}
      {/* render(
      <App />, document.getElementById("root")); */}
    </div>
  );
};
export default App;
