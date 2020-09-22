import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MainCards extends Component {
  openBlog = () => {
    return window.open("https://medium.com/@nathansaint810", "_blank")
  }

  loadComponent = event => {
    const keyword = event.target.id.split('-')[0];
    this.props.history.push(`/${keyword}`);
  }

  openEmail = () => {
    return window.location.href = "mailto:nathan@nathan-stamand.com"
  }

  render() {
    return (
      <div id="main-cards-container">
        <div id="main-card-container-a">
          <div id="about-card" className="main card" onClick={this.loadComponent}>
            <section id="about-section" className="card-text" >ABOUT</section>
          </div>
          <div id="projects-card" className="main card" onClick={this.loadComponent}>
            <section id="projects-section" className="card-text" >PROJECTS</section>
          </div>
        </div>
        <div id="main-card-container-b">
          <div id="blog-card" className="main card"onClick={this.openBlog}>
            <section className="card-text">BLOG</section>
          </div>
        <div id="contact-card" className="main card" onClick={this.openEmail}>
          <section className="card-text">CONTACT</section>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(MainCards);