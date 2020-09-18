import React from "react";

function Projects() {
  return(
    <div id="projects-page">
      <h1 className="projects">Here are some of my projects!</h1>
      <div id="ripchorder" className="projects">
        <h4 className="project-title">RipChorder</h4>
        <div className="project-img">
          <img alt="ripchorder logo" src={require('../RipChorder.png')} />
        </div>
        <section className="project-links">
          <a alt="ripchorder-repo" href="https://github.com/nathan-stamand/RipChorder" target="_blank">Github</a>
          <a alt="ripchorder-demo" href="https://www.youtube.com/watch?v=WVxdl4L7cnA&t" target="_blank">Demo</a>
        </section>
        <section className="blurb">
          A web app for quickly stringing together chord progressions, useable by beginners or experts. 
          Made with Javascript, HTML / CSS, Ruby on Rails API, and SQLite database. 
          Features asynchronous fetch requests, RESTful routing in API, and Tone.js / 
          Scribbletune libraries working together to produce sound and chord information.
        </section>
      </div>
      <div id="diywm" className="projects">
      <h4 className="project-title">DIY With Me!</h4>
        <div className="project-img">
          <img alt="diy with me! logo" src={require('../DIYWM.jpg')} />
        </div>
        <section className="project-links">
          <a alt="diywm-repo" href="https://github.com/nathan-stamand/diywm" target="_blank">Github</a>
          <a alt="diywm-demo" href="https://www.youtube.com/watch?v=OfhohPEU1MQ&t" target="_blank">Demo</a>
        </section>
        <section className="blurb">
        An easy-to-use single-page blogging app for your DIY projects. 
        Made with React, Redux, HTML, and CSS. 
        Features RESTful Routing, Rails API backed by SQLite database, state management,
        and asynchronous database requests with Redux-Thunk library.
        </section>
      </div>
      <div id="dungeons-n-data" className="projects">
        <h4 className="project-title">Dungeons 'N' Data</h4>
        <div className="project-img">
          <img alt="dungeons n data logo" src={require('../DND.jpg')} />
        </div>
        <section className="project-links">
          <a alt="diywm-repo" href="https://github.com/nathan-stamand/dungeons_n_data" target="_blank">Github</a>
          <a alt="diywm-demo" href="https://www.youtube.com/watch?v=vXvUUOsRr-E&t" target="_blank">Demo</a>
        </section>
        <section className="blurb">
        An app for tracking your Dungeons and Dragons campaigns, characters, and sessions easily. 
        Built with Ruby on Rails and SQLite. 
        Features use of OAuth for Google sign in, bcrypt gem for encrypted authentication, 
        and Bootstrap for easy mobile-friendly formatting.
        </section>
      </div>
    </div>
  )
}

export default Projects;