import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import MainCards from './Components/MainCards';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
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
      <Contact />
    </div>
  );
}

export default App;
