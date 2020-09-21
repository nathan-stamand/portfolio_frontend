import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MenuButton extends Component {
  goHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div id="menu-btn" onClick={this.goHome}>
        <div id="l1" className="line"></div>
        <div id="l2" className="line"></div>
        <div id="l3" className="line"></div>
      </div>
    )
  }
}

export default withRouter(MenuButton);