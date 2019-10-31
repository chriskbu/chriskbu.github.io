import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import particlesOptions from './particleOptions.js';

// React-router import
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const reactRoute = (paths)=>(
  <Router>
    <Switch>
      {paths()}
    </Switch>
  </Router>
);

const route = ()=>(
  <>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/projects">
    <Projects />
  </Route>
  </>
);

class App extends Component {

  constructor(props){
    super();
  }

  render() {
    return (
      <>
      <Particles className="particles" params={particlesOptions}/>
      {reactRoute(route)}
      </>
    )}
}

export default App;