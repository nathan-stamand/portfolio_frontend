import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MainCards extends Component {
  openBlog = () => {
    return window.open("https://medium.com/@nathansaint810", "_blank")
  }

  loadComponent = event => {
    const keyword = event.target.id.replace('-card', '');
    this.props.history.push(`/${keyword}`);
  }

  render() {
    return (
      <div id="main-cards-container">
        <div id="main-card-container-a">
          <div id="about-card" className="main card" onClick={this.loadComponent}>
            <section className="card-text" >ABOUT</section>
          </div>
          <div id="projects-card" className="main card" onClick={this.loadComponent}>
            <section className="card-text" >PROJECTS</section>
          </div>
        </div>
        <div id="main-card-container-b">
          <div id="blog-card" className="main card"onClick={this.openBlog}>
            <section className="card-text">BLOG</section>
          </div>
        <div id="social-card" className="main card" onClick={this.loadComponent}>
          <section className="card-text">SOCIAL</section>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(MainCards);