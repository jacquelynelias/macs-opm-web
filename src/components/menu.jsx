import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './menu.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap';

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

    render() {
            return (
                <div className="container">
                    <div className="row">
                        <h1>Menu</h1>
                        <Button>Continue</Button>
                    </div>
                    <div className="row">
                        <div className=".col-12 col-md-4">
                            {categories.map(function (category) {
                                return (
                                    <div className="card bg-dark text-white">
                                        <div className="card-img-overlay">
                                            {category.name}
                                        </div>
                                        <img className="card-img-bottom" src={category.img} />
                                    </div>

                                )
                            })}

                        </div>
                    </div>
                </div>
            )
        }
}


export default Menu