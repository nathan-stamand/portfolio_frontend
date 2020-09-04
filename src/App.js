import React from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="about-btn">ABOUT</div>
      <div id="projects-btn">PROJECTS</div>
      <div id="blog-btn">BLOG</div>
    </div>
  );
}

export default App;
