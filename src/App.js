import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainCards from './Components/MainCards';

function App() {
  return (
    <div className="App">
      <Header />
      <MainCards />
      <div id="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" className="email-form"/>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" className="email-form"/>
          <label htmlFor="message">Message:</label>
          <textarea id="message" className="email-form"/>
          <input type="submit" value="-submit-" />
        </form>
      </div>
    </div>
  );
}

export default App;
