import React from 'react';

function About() {
  return (
    <div id="about-page">
      <h1 className="header" className="about">nathan st.amand</h1>
      <section id="intro" className="about">
        <h3>A Little About Me</h3>
        <p>
          I was an accountant, but now I'm entering my new career in web development.
          I recently graduated from the Software Engineering bootcamp at Flatiron School.
        </p>
      </section>
      <section id="skills" className="about">
        <h3>What I Know Now</h3>
        <p>
          Javascript (ES6)
          || HTML5
          || CSS3
          || SQL
          || Ruby on Rails
          || React
          || Redux
          || jQuery
          || Bootstrap
          || OAuth
          || Test-Driven Development
          || Object-Oriented Programming
          || MVC (Model-View-Controller) Design Pattern
          || RESTful API
          || Responsive Design
        </p>
      </section>
      <section id="more-about-me" className="about">
        <h3>Why Would You Hire a Guy Like Me?</h3>
        <p>
          Fair enough question! From what I've heard, I'm a "nice enough" guy people 
          "don't hate" working with, for one. Also, I'm typically pretty quiet, but 
          if someone initiates conversation with me I find myself pretty
          <span className="bold"> dang</span> social. Not in a weird, intense way -- in a really
          cool, natural way. In fact, it's weird that I'm talking about it, because it's really
          seamless. You probably never would have thought about it if I didn't let you know. 
        </p>
        <p>
          On a more serious note, I'm not only a fast learner but someone who prides himself on 
          learning <span className="italics">well</span>. I enjoy learning new things, I take pride in
          my work, and I like having systems for myself. I spent over five years being "just an accountant" -- 
          I stopped my hobbies, I didn't feel creative, and I spent my weekends dreading my jobs. Now, I've 
          found something that makes me feel accomplished at the end of the day. That's why I'd make a good 
          employee. I worked hard when I didn't enjoy my job, now I'm ready to see what I can do when I'm excited
          to work.
        </p>
      </section>
    </div>
  )
}

export default About;