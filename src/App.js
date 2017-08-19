import React, { Component } from 'react';
import reactLogo from './logos/react-logo.svg';
import angularLogo from './logos/angular-logo.svg';
import nodeLogo from './logos/node-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={angularLogo} className="App-logo Lateral-logo" alt="angular-logo" />                 
          <img src={reactLogo} className="App-logo Vertical-logo" alt="react-logo" />
          <img src={nodeLogo} className="App-logo Lateral-logo" alt="node-logo" />                       
          <h2><code className="name">{"<curriculum>"} Rafael D'Angelo Bergamini {"</curriculum>"}</code></h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
