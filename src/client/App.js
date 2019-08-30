import React, { Component } from 'react';
import logo_react from './assets/imgs/react.png';
import logo_express from './assets/imgs/express.png';
import logo_webpack from './assets/imgs/webpack.png';
import logo_osb from './assets/imgs/outstandingboy.png'
import logo_rext from './assets/imgs/rext.png'
import './assets/css/app.css';

class App extends Component {
  state = {
      hi: "Hello"
  }

  render() {
    return (
      <div className="container">
        <div className="outstandingboy">
          <img src={logo_osb} className="logo_osb"/>
        </div>
        <div className="body">
          <img src={logo_rext} className="logo_rext"/>
          <h1>{this.state.hi} RExT!</h1>
          <p>React+Express template by outstandingboy</p>
          <p>Github : <a href="https://github.com/outstanding1301/rext/">https://github.com/outstanding1301/rext/</a></p>
        </div>
        <div class="logo_container">
          <img src={logo_react} className="logo_react" alt="react logo"/>
          <img src={logo_express} className="logo_express" alt="express logo"/>
          <img src={logo_webpack} className="logo_webpack" alt="webpack logo"/>
        </div>
      </div>
    );
  }
}

export default App;
