import Auth from './Components/auth/Auth';

const App = () => {
  return (
    <div>
      Hello
      <Auth />
      {/**we need to toggle between Auth and Front Page of app; if token is not undefined, show Home */}
    </div>
  );
};

export default App;
