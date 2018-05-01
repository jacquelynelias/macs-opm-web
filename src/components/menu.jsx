import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './menu.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { Button, Row, Col, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

var categories = [
    {
        id: 0,
        name: "Burger",
        img: require("../assets/burger.jpg")

    },
    {
        id: 1,
        name: "Pizza",
        img: require("../assets/pizza.jpg")
    },
    {
        id: 2,
        name: "Salad",
        img: require("../assets/salad.jpg")
    },
    {
        id: 3,
        name: "Side",
        img: require("../assets/side.jpg")
    }

];

var burgers = {

}

var pizza = {}


class Menu extends Component {
    constructor(props) {
        super(props)
        this.navbar = this.navbar.bind(this)
    }
    /* Displays navigation bar */
    navbar = () => {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={require('../assets/logo.png')} height="30" alt=""/>
                </a>
                 <a href="#">
                    <i class="material-icons">shopping_cart</i>
                </a>
            </nav>
        )
    }


    render() {
            return (
                <div class="screen">
                    <div className="container-fluid">
                        {this.navbar}
                        <div className="row">
                            <img src={require('../assets/smu.jpg')} width="100%" alt=""/>
                            <h1>Menu</h1>
                            <Button>Continue</Button>
                        </div>
                        <div className="row options">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                {categories.map(function (category) {
                                    return (
                                        <div className="card bg-dark text-white">
                                            <div class="menu-item">
                                                <div className="card-img-overlay">
                                                    <div className="row">
                                                        <h3>{category.name}</h3>
                                                    </div>
                                                    <div className="row">
                                                        <button type="button" class="btn btn-outline-danger" onclick={console.log("hi")}>Order ></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <img className="card-img-bottom" src={category.img} />
                                        </div>

                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}


export default Menu