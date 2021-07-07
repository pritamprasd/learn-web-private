import './App.scss';
import LoginScreen from './components/Login/LoginScreen';
import HomeScreen from './components/Home/HomeScreen';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';


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
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/g" component={Gallery} />
      </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
