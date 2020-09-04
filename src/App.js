import React from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-btn-container-a">
        <div id="about-btn" className="main btn">
          <section className="btn-text">ABOUT</section>
        </div>
        <div id="projects-btn" className="main btn">
          <section className="btn-text">PROJECTS</section>
        </div>
      </div>
      <div id="main-btn-container-b">
        <div id="blog-btn" className="main btn">
          <section className="btn-text">BLOG</section>
        </div>
        <div id="social-btn" className="main btn">
          <section className="btn-text">SOCIAL</section>
        </div>
      </div>
    </div>
  );
}

export default App;
