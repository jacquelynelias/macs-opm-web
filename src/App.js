import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import Menu from './components/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
      <Switch>
         <Route exact path='/' component={Main}/>
        <Route path='/menu' component={Menu}/>
      </Switch>
        
        </div>
      </Router>
      </div>
    );
  }
}


export default App;
