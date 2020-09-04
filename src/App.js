import React from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-btn-container-a">
        <div id="about-btn" class="main btn">ABOUT</div>
        <div id="projects-btn" class="main btn">PROJECTS</div>
      </div>
      <div id="main-btn-container-b">
        <div id="blog-btn" class="main btn">BLOG</div>
        <div id="social-btn" class="main btn">SOCIAL</div>
      </div>
    </div>
  );
}

export default App;
