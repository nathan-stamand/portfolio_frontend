import React from "react";

function Social() {
  return (
    <div id="social">
      <section id="social-blurb">
        <p>Feel free to reach out on my Github, social media, or email!</p>
        <p>nathan@nathan-stamand.com</p>
      </section>
      <div id="github-icon" className="icon-container">
        <a alt="github link" href="https://github.com/nathan-stamand" target="_blank" rel="noopener noreferrer">
          <img src={require('../Github Icon.png')} alt="Github" />
        </a>
      </div>
      <div id="linkedin-icon" className="icon-container">
        <a alt="linkedin link" href="https://www.linkedin.com/in/nathan-st-amand/" target="_blank" rel="noopener noreferrer">
          <img src={require('../LinkedIn Icon.png')} alt="LinkedIn" />
        </a>
      </div>
      <div id="twitter-icon" className="icon-container">
        <a alt="twitter link" href="https://twitter.com/NathanStAmand" target="_blank" rel="noopener noreferrer">
          <img src={require('../Twitter Icon.png')} alt="Twitter" />
        </a>
      </div>
      <section id="resume-plug" className="about">
      <a 
          href="https://docs.google.com/document/d/1BnBiljY6PmR-yCRqOMMwJt3On0SFGW7SaP4PRWtqKfc/edit?usp=sharing" 
          alt="nathan-stamand-resume" 
          target="_blank"
          rel="noopener noreferrer"
          id="resume-button">
          Resumé
        </a>
      </section>
    </div>
  )
}

export default Social;