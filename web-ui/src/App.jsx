import './App.scss';
import LoginScreen from './components/Login/LoginScreen';
import HomeScreen from './components/Home/HomeScreen';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="Routes">
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/login" component={LoginScreen} />
      </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
