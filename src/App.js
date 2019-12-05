import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ThreeApp from './Components/ThreeApp/ThreeApp'
import Projects from './Components/Projects/Projects'
import particlesOptions from './particleOptions.js';
import WebFont from 'webfontloader'; 

// React-router import
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

class App extends Component {

  constructor(props){
    super();
  }

  render() {
    return (
      <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <div id="meDiv">
              <h1>Christoffer Buen</h1>
              <p>🎂26    👨‍Male    🇳🇴Norway</p>
              <p>Informatics📚    Tech🖥    Space🛰</p>
              <p id="meNote">Currently looking for work</p>
              <p id="emailInfo">christoffer.buen[at]gmail.com</p>
            </div>
          </Route>
        </Switch>
      </Router>
      <Particles className="particles" params={particlesOptions}></Particles>
      </div>
    )}
}

export default App;