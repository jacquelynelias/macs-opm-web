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
import Footer from './footer.jsx'

var categories = [
    {
        id: 0,
        name: "Specials",
        img: require("../assets/specials.jpg"),
        items: [
            {
                id:0,
                name:"Buffalo Pizza",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:1,
                name:"Chicken and Waffles",
                ingredients: ["Bread", "Chicken"],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:2,
                name:"PB&J",
                ingredients: ["Peanut Butter", "Jelly", "Bread"],
                img: require("../assets/buffalo.jpg")
            },
            
        ]

    },
    {
        id: 1,
        name: "Burger",
        img: require("../assets/burger.jpg"),
        items: [
            {
                id:0,
                name:"All American",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:1,
                name:"Breakfast",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:2,
                name:"Veggie",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            }
        ]

    },
    {
        id: 2,
        name: "Pizza",
        img: require("../assets/pizza.jpg"),
        items: [
            {
                id:0,
                name:"Cheese",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:1,
                name:"Vegetarian",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:2,
                name:"Pepperoni",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:3,
                name:"Mediterranean",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            }
        ]
    },
    {
        id: 3,
        name: "Salad",
        img: require("../assets/salad.jpg"),
        items: [
            {
                id:0,
                name:"Caesar",
                ingredients: ["Lettuce", "Cheese"],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:1,
                name:"Vegetarian",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:2,
                name:"Pepperoni",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:3,
                name:"Mediterranean",
                ingredients: ["Bread", ""],
                img: require("../assets/buffalo.jpg")
            }
        ]
    },
    {
        id: 4,
        name: "Side",
        img: require("../assets/side.jpg"),
        items: [
            {
                id:0,
                name:"Fries",
                ingredients: ["Potato", "Vegetable oil"],
                img: require("../assets/side.jpg")
            },
            {
                id:1,
                name:"Side Salad",
                ingredients: [{"Lettuce":true}, "Cheese", "Tomato"],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:2,
                name:"Fruit cup",
                ingredients: ["Pineapple", "Honeydew", "Grapes"],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:3,
                name:"Chips",
                ingredients: [""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:3,
                name:"Celery",
                ingredients: ["Celery", "Peanut Butter"],
                img: require("../assets/buffalo.jpg")
            }
        ]
    },
    {
        id: 5,
        name: "Drinks",
        img: require("../assets/side.jpg"),
        items: [
            {
                id:0,
                name:"Hot drink",
                ingredients: [""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:1,
                name:"Fountain drink",
                ingredients: [""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:2,
                name:"2% Milk",
                ingredients: [""],
                img: require("../assets/buffalo.jpg")
            },
            {
                id:3,
                name:"Chocolate Milk",
                ingredients: [""],
                img: require("../assets/buffalo.jpg")
            }
        ]
    }

];


var specials = [

]

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
                        {console.log("in log")}
                <a className="navbar-brand" href="#">
                    <img src={require('../assets/logo.png')} height="40" alt=""/>
                </a>
                 <a href="/cart">
                    <i class="material-icons" >shopping_cart</i>
                </a>
            </nav>
        )
    }

    carousel = () => {
        var i = 0;
        return(
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    {specials.map(function(specials) {
                        console.log(specials)
                        if (i === 0) {
                            console.log("i = 0")
                            i = i+1; 
                            return(
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={specials.img} alt={specials.name}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Special of the Month</h5>
                                        <p>{specials.desc}</p>
                                    </div>
                                </div>
                                )
                            
                        } else {
                            i = i+1; 
                            return(
                            <div className="carousel-item">
                                <img className="d-block w-100" src={specials.img} alt={specials.name}/>
                                <div className="carousel-caption d-none d-md-block">
                                        <h5>Special of the Month</h5>
                                        <p>{specials.desc}</p>
                                    </div>
                            </div>
                            )
                        }
                    }) }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }


    render() {
            return (
                <div className="screen">
                    <div className="container-fluid">
                        {this.navbar()}
                        <div className="row">
                            <div className="header">
                                <div className="header-text">
                                    <h1>MENU</h1>
                                    <h3>Use your time for your studies. Order online.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row options">
                                {categories.map(function (category) {
                                    return (
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="menu-item">
                                            <div className="card bg-dark text-white">
                                                <div className="card-img-overlay">
                                                    <div className="row">
                                                        <h3 className="category-text">{category.name}</h3>
                                                    </div>
                                                    <div className="row">
                                                        <button type="button" className="btn btn-outline-danger" onClick={console.log("on button")}>ORDER ></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <img className="card-img-bottom" src={category.img} />
                                        </div>
                                        </div>

                                    )
                                })}

                            
                        </div>
                        <Footer/>
                    </div>
                </div>
            )
        }
}

export default Menu;