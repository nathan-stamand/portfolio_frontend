import React from "react";

function Social() {
  return (
    <div id="social">
      <section id="social-blurb">
        <p>Feel free to reach out on my Github, social media, or email!</p>
        <p>Thanks for checking out my portfolio!</p>
      </section>
      <div id="github-icon" className="icon-container">
        <img src={require('../Github Icon.png')} alt="Github" />
      </div>
      <div id="linkedin-icon" className="icon-container">
        <img src={require('../LinkedIn Icon.png')} alt="LinkedIn" />
      </div>
      <div id="twitter-icon" className="icon-container">
        <img src={require('../Twitter Icon.png')} alt="Twitter" />
      </div>
      <section id="resume-plug" className="about">
      <a 
          href="https://docs.google.com/document/d/1BnBiljY6PmR-yCRqOMMwJt3On0SFGW7SaP4PRWtqKfc/edit?usp=sharing" 
          alt="nathan-stamand-resume" 
          target="_blank"
          id="resume-button">
          Resumé
        </a>
      </section>
    </div>
  )
}

export default Social;