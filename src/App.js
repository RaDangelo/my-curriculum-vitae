import React, { Component } from 'react';
import reactLogo from './logos/react-logo.svg';
import angularLogo from './logos/angular-logo.svg';
import nodeLogo from './logos/node-logo.svg';
import jsLogo from './logos/js-logo.svg';
import javaLogo from './logos/java-logo.svg';
import htmlLogo from './logos/html-logo.svg';
import cssLogo from './logos/css-logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logosContainer">
            <span className="arrowChange">{"<"}</span>
            <img src={jsLogo} className="App-logo Lateral-logo large" alt="js-logo" title="JavaScript" />
            <img src={angularLogo} className="App-logo Lateral-logo small" alt="angular-logo" title="Angular" />
            <img src={reactLogo} className="App-logo Vertical-logo large" alt="react-logo" title="React" />
            <img src={nodeLogo} className="App-logo Lateral-logo large" alt="node-logo" title="Node.js" />
            <img src={htmlLogo} className="App-logo Lateral-logo small" alt="html-logo" title="HTML5" />
            <img src={cssLogo} className="App-logo Lateral-logo small" alt="css-logo" title="CSS3" />
            <img src={javaLogo} className="App-logo Lateral-logo small" alt="java-logo" title="Java" />
            {/* <img src={javaLogo} className="App-logo Lateral-logo small" alt="spring-logo" title="Spring" /> */}
            {/* <img src={javaLogo} className="App-logo Lateral-logo small" alt="iib-logo" title="Integration Bus" /> */}
            <span className="arrowChange">{">"}</span>
          </div>
          <h2><code className="name">{"<curriculum>"} Rafael D'Angelo Bergamini {"</curriculum>"}</code></h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
