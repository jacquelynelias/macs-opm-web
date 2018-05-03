import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Row} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './menu-items.css';
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
                img: require("../assets/chicken.jpg")
            },
            {
                id:2,
                name:"PB&J",
                ingredients: ["Peanut Butter", "Jelly", "Bread"],
                img: require("../assets/pbj.jpg")
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
        img: require("../assets/drink.jpg"),
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

class MenuItems extends Component {
    constructor(props) {
        super(props)
        this.navbar = this.navbar.bind(this)
    }
    /* Displays navigation bar */
    navbar = () => {
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

    menu = () => {
        return (
            <div className="row">
                <div className="header">
                    <div className="header-text">
                        <h1>MENU</h1>
                    <h3>Hungry? Find your favorite</h3>
                 </div>
                </div>
            </div>            
        )
    }

    render() {
        return (
            <div className="container-fluid">
                {this.navbar()}
                {this.menu()}
                <div className="row options">
                    <div className="row">                 
                    {categories[0].item.map(function (thing) {
                        return (
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="menu-item">
                                        <div className="card bg-dark text-white">
                                            <div className="card-img-overlay">
                                                <div className="row">
                                                    <h3 className="category-text">{thing.name}</h3>
                                                </div>
                                                <div className="row">
                                                    <button type="button" className="btn btn-outline-danger" onClick={console.log("on button")}>ADD ></button>
                                                </div>
                                            </div>
                                        </div>
                                    <img className="card-img-bottom" src={thing.img} />
                                </div>
                            </div>

                        );
                    })}
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-danger button-back" onClick={console.log("on button")}>&lt; BACK </button>
                    </div>   
                    <div className="row">
                        <button type="button" className="btn btn-outline-danger button-checkout" onClick={console.log("on button")}>CHECKOUT &gt;</button>
                    </div>   
                </div>
             <Footer/>                
            </div>

        )
    }
}

export default MenuItems