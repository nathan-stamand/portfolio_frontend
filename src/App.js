import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import MainCards from './Components/MainCards';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/about">
            <p>ABOUT</p>
          </Route>
          <Route path="/projects">
            <p>PROJECTS</p>
          </Route>
          <Route path="/blog">
            <p>BLOG</p>
          </Route>
          <Route path="/social">
            <p>SOCIAL</p>
          </Route>
          <Route path="/">
            <MainCards />
          </Route>
        </Switch>
      <ContactForm />
    </div>
  );
}

export default App;
