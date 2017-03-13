import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    return (
      <div>
        {this.state.names.map((name, index) =>
          <Welcome name={name} key={index}/>
        )}
      </div>
    );
  }
}

export default App;
