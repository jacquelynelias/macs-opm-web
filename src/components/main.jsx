import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
import { Button } from 'react-bootstrap';

class Main extends Component {

    render() {
        return (
            <div id="Landing">
                <h1>Mac's Place</h1>
                <Button>Continue</Button>
            </div>
        )
    }

}

export default Main