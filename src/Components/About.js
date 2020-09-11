import React from 'react';

function About() {
  return (
    <div id="about-page">
      <h1 className="header">nathan st.amand</h1>
      <section id="intro">I make things, and want to continue making things.
      That's nearly all that there is to me. I like making websites, web applications,
      songs, blog posts -- whatever.</section>
      <section className="work">In 2017, I graduated college in Accounting. I had all the 
      credits, courses, and work experience I needed to take the CPA exam. So I bought
      the study guides (enormous textbooks) and, after work or on weekends, I'd try to
      learn more.</section>
      <section className="work">The problem was, as you may have guessed, I did not enjoy
      anything about accounting. So, after a few more years of trying to find the accounting
      job that would change my mind, I decided to start entertaining a new idea -- maybe I'm
      just not an accountant?</section>
      <section className="work">Eventually, the idea was so entertained that I left my job to
      pursue something I <em>am</em> interested in, which brings me to now. Now, I'm fresh out 
      of Flatiron's Software Engineering course and found that it was a lot easier than studying
      GAAP (Generally Accepted Accounting Principles, if you're interested) or International Accounting
      Standards.
      </section>
      
      <section>
        <h2 id="skills">skills</h2>
        <div id="skill-lists">
          <h3>Languages and Software</h3>
          <ul id="languages-software-list">
            <li>Javascript (ES6)</li>
            <li>HTML / CSS</li>
            <li>SQL</li>
            <li>Ruby on Rails</li>
            <li>React / Redux</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>OAuth</li>
          </ul>
          <h3>Methodologies</h3>
          <ul id="methodologies-list">
            <li>Test-Driven Development</li>
            <li>Object-Oriented Programming</li>
            <li>MVC (Model-View-Controller) Design Pattern</li>
            <li>RESTful API</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About;