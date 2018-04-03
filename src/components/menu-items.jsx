import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

  class Menu extends Component {

    render() {
        return (
            <div id="menu-items">
                <Row>
                <h1>Mac's Place</h1>
                <Button>Continue</Button>
                </Row>
            </div>
        )
    }
}

export default Menu