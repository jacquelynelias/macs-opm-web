
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
var styles = {
    color: "#000000"
};

class Nav extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/menu">
                    <img src={require('../assets/logo.png')} height="40" alt=""/>
                </Link>
                 <Link to="/cart">
                    <i class="material-icons" style={styles}>shopping_cart</i>
                </Link>
            </nav>
        )
    }
}

export default Nav;
