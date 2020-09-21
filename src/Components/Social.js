import React from "react";

function Social() {
  return (
    <div id="social">
      <div className="icon-container">
        <img src={require('../Github Icon.png')} alt="Github" />
      </div>
      <div className="icon-container">
        <img src={require('../LinkedIn Icon.png')} alt="LinkedIn" />
      </div>
      <div className="icon-container">
        <img src={require('../Twitter Icon.png')} alt="Twitter" />
      </div>
    </div>
  )
}

export default Social;