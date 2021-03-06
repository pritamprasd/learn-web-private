import './App.css';
import LoginScreen from './components/Login/LoginScreen';
import HomeScreen from './components/Home/HomeScreen';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import YoutubeGallery from './components/youtube_gallery/YoutubeGallery';
import AppContainer from './components/Apps/AppContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="Routes">
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/" component={AppContainer}>
            {/* <Redirect to="/gallery" /> */}
          </Route>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/yt" component={YoutubeGallery} />
          <Route exact path="/apps" component={AppContainer} />
      </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
