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
  }

  submitHandler = event => {
    event.preventDefault()
    // Email.send({
    //   SecureToken: "56b6daf1-5cad-402f-bac6-30c90250c1c5",
    //   To: 'nathan@nathan-stamand.com',
    //   From: this.state.email,
    //   Subject: this.state.name + ' reaching out from my site',
    //   Body: this.state.body
    // })
    // .then(
    //   message => alert(message)
    // )
  }

  render() {
    return (
      <div id="contact-form">
          <form onSubmit={this.submitHandler}>
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