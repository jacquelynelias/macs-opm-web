import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Main extends Component {
      render() {
        return (
            <div id="Landing">
                <img src={require('../assets/logo.png')} align="center" />
                <div>
                    <Button  bsSize="large"> <Link to='/menu' >Order Food </Link></Button>
                </div>

            </div>
        )
    }

}

export default Main