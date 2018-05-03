
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={require('../assets/logo.png')} height="40" alt=""/>
                </a>
                 <a href="#">
                    <i class="material-icons">shopping_cart</i>
                </a>
            </nav>
        )
    }
}

export default Nav;
