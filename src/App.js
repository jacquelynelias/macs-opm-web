import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.jsx';
import Menu from './components/menu.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main}/>
            <Route path="/menu" component={Menu}/>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
