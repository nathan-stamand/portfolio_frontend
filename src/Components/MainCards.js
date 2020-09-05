import React from "react";

function MainCards() {
  return (
    <div id="main-cards-container">
      <div id="main-card-container-a">
        <div id="about-card" className="main card">
          <section className="card-text">ABOUT</section>
        </div>
        <div id="projects-card" className="main card">
          <section className="card-text">PROJECTS</section>
        </div>
      </div>
      <div id="main-card-container-b">
        <div id="blog-card" className="main card">
          <section className="card-text">BLOG</section>
        </div>
      <div id="social-card" className="main card">
        <section className="card-text">SOCIAL</section>
      </div>
    </div>
  </div>
  )
}

export default MainCards;