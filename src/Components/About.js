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
          Fair enough question! I know how to learn new things,
          and I take pride in my work. I've got a border collie, chihuahua mix, and 
          rabbit to support with my wife. So I'm a family guy and a team player, in 
          that sense. I have a wide array of interests, so I like talking to people
          about their hobbies or side hustles. I dunno -- I think I'm fun.
        </p>
      </section>
    </div>
  )
}

export default About;