import React from "react";

function Header() {
  return (
    <div id="background-pic">
      <div id="summary-container">
        <p>Nathan St.Amand</p>
        <p>Full-Stack Web Developer</p>
      </div>
      <div id="picture-of-nathan">
        <img id="nathan-looking-great" alt="Me, looking great no doubt." src={require("../nathan_smiling.png")} />
      </div>
    </div>
  )
}

export default Header;