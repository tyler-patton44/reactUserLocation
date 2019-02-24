import React, { Component } from 'react';
import './App.css';
import Maps from './Maps/Maps';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
              <ul className = 'navi'>
                  <li><Link to="/">Map</Link></li>
              </ul>
              <Route exact path="/" component={Maps} />
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
