import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import MainCards from './Components/MainCards';
import Social from './Components/Social';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <div id="menu-btn">
        <div id="l1" className="line"></div>
        <div id="l2" className="line"></div>
        <div id="l3" className="line"></div>
      </div>
      <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <MainCards />
          </Route>
        </Switch>
      <Social />
    </div>
  );
}

export default App;
