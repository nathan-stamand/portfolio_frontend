import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="background-pic">
        <div id="summary-container">
          <p>Nathan St.Amand</p>
          <p>Full-Stack Web Developer</p>
        </div>
        <div id="picture-of-nathan">
          <img id="nathan-looking-great" alt="Me, looking great no doubt." src={require("./nathan_smiling.jpg")} />
        </div>
      </div>
    </div>
  );
}

export default App;
