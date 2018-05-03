
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
                <a className="navbar-brand" href="/menu">
                    <img src={require('../assets/logo.png')} height="40" alt=""/>
                </a>
                 <a href="cart">
                    <i class="material-icons" style={styles}>shopping_cart</i>
                </a>
            </nav>
        )
    }
}

export default Nav;
