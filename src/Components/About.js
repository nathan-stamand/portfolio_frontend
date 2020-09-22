import React from 'react';

function About() {
  return (
    <div id="about-page">
      <h1 className="about">nathan st.amand</h1>
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
          Fair enough question! I know how to learn new things, and I take pride in my work. 
          I started this career after already having one as an accountant. It was my choice to 
          start over in this field, and I stand by it. This is what I want to do. 
          I'm proud of what progress I've made already, and confident that I can learn anything I 
          set my mind to. So here are the <em>real </em> reasons you should hire me...
        </p>
        <p>
          I'm personable, and not afraid to talk to people (though I'm naturally pretty introverted). 
          It'd be a little over-the-top to say that I'm a joy to work with, but just between us gals, 
          it's true. And finally, I've got two beautiful dogs and one absolutely evil 
          (and slightly overweight) rabbit that I can show off, if nothing else appeals to you. I've 
          got no shame exploiting them to get work! They live here rent free!
        </p>
        <h3>Closing Words</h3>
        <p>
          Now that I've had my fun, I want to thank you for checking my portfolio out.
          It means a lot -- I worked hard on it, and will try to keep it as up-to-date as possible.
          Have a good one!
        </p>
      </section>
    </div>
  )
}

export default About;