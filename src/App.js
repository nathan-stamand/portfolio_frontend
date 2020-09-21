import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import MainCards from './Components/MainCards';
import Social from './Components/Social';
import About from './Components/About';
import Projects from './Components/Projects';
import MenuButton from "./Components/MenuButton";

function App() {
  return (
    <div className="App">
      <MenuButton />
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
