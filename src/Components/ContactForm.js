import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div id="contact-form">
          <form>
            <section id="personal-info">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" className="email-form" value={this.state.name} onChange={this.handleChange}/>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="text" className="email-form" value={this.state.email} onChange={this.handleChange}/>
            </section>
            <section id="message-text-submit">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="email-form" value={this.state.message} onChange={this.handleChange}/>
              <input type="submit" value="-submit-" />
            </section>
        </form>
      </div>
    )
  }
}

export default ContactForm;