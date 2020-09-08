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
          <section id="personal-info">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" className="email-form"/>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="text" className="email-form"/>
          </section>
          <section id="message-text-submit">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="email-form"/>
            <input type="submit" value="-submit-" />
          </section>
        </form>
      </div>
    </div>
  );
}

export default App;
