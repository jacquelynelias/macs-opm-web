import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './menu.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { Button, Row, Col, MenuItem, NavDropdown } from 'react-bootstrap';
import Footer from './footer.jsx'
import MenuItems from './menu-items.jsx'
import Nav from './navbar.jsx'; 
import Cart from './cart'

var categories = [
    {
        id: 0,
        name: "Specials",
        img: require("../assets/specials.jpeg"),
        items: [
            {
                id:0,
                name:"Buffalo pizza",
                ingredients: ["Bread", "Chicken", "Cheese", "Buffalo sauce", "Marinara sauce"],
                price: 3.99,
                img: require("../assets/pizza_buffalo.jpg")
            },
            {
                id:1,
                name:"Chicken and waffles",
                ingredients: ["Waffles", "Breaded chicken tenders"],
                price: 3.99,
                img: require("../assets/chicken_waffles.jpg")
            },
            {
                id:2,
                name:"PB&J sandwich",
                ingredients: ["Peanut Butter", "Jelly", "Bread"],
                price: 3.99,
                img: require("../assets/pbj.jpg")
            },
            
        ]

    },
    {
        id: 1,
        name: "Burger",
        img: require("../assets/burger_allamerican.jpg"),
        items: [
            {
                id:0,
                name:"All American burger",
                ingredients: ["Bun", "Beef patty", "Onion", "Tomato"],
                price: 4.99,
                img: require("../assets/burger_allamerican.jpg")
            },
            {
                id:1,
                name:"Breakfast burger",
                ingredients: ["Bread", "Beef patty", "Egg", "Onion"],
                price: 4.99,
                img: require("../assets/burger_breakfast.jpg")
            },
            {
                id:2,
                name:"Veggie burger",
                ingredients: ["Bread", "Veggie Pattie", "Lettuce", "Tomato"],
                price: 4.99,
                img: require("../assets/burger_veggie.jpg")
            },
            {
                id:3,
                name:"Chicken burger",
                ingredients: ["Bread", "Chicken", "Swiss cheese", "Lettuce"],
                price: 4.99,
                img: require("../assets/burger_chicken.jpg")
            }
        ]

    },
    {
        id: 2,
        name: "Pizza",
        img: require("../assets/pizza_cheese.jpg"),
        items: [
            {
                id:0,
                name:"Cheese pizza",
                ingredients: ["Bread", "Marinara sauce", "Cheese"],
                price: 3.99,
                img: require("../assets/pizza_cheese.jpg")
            },
            {
                id:1,
                name:"Vegetarian pizza",
                ingredients: ["Bread", "Spinach", "Mushrooms", "Cheese", "Marinara sauce"],
                price: 3.99,
                img: require("../assets/pizza_veggie.jpeg")
            },
            {
                id:2,
                name:"Pepperoni pizza",
                ingredients: ["Bread", "Marinara sauce", "Cheese", "Pepperoni"],
                price: 3.99,
                img: require("../assets/pizza_pepperoni.jpg")
            },
            {
                id:3,
                name:"Mediterranean pizza",
                ingredients: ["Bread","Marinara sauce", "Olives", "Onion", "Cheese"],
                price: 3.99,
                img: require("../assets/pizza_meditteranean.jpeg")
            },
            {
                id:4,
                name:"Meat Lover's pizza",
                ingredients: ["Bread", "Marinara sauce", "Sausage", "Cheese", "Pepperoni", "Ham"],
                price: 3.99,
                img: require("../assets/pizza_meat.jpg")
            }
        ]
    },
    {
        id: 3,
        name: "Salad",
        img: require("../assets/salad_caesar.jpg"),
        items: [
            {
                id:0,
                name:"Caesar salad",
                ingredients: ["Romaine lettuce", "Cheese", "Croutons"],
                price: 5.99,
                img: require("../assets/salad_caesar.jpg")
            },
            {
                id:1,
                name:"Mediterranean salad",
                ingredients: ["Romaine lettuce", "Cucumbers", "Feta cheese", "Tomatoes"],
                price: 5.99,
                img: require("../assets/salad_meditea.jpeg")
            },
            {
                id:2,
                name:"Southwest salad",
                ingredients: ["Romaine lettuce", "Corn", "Black bean", "Tomatoes"],
                price: 5.99,
                img: require("../assets/salad_southwest.jpg")
            },
            {
                id:3,
                name:"Fruit salad",
                ingredients: ["Spinach", "Strawberries", "Onions", "Blueberries"],
                price: 5.99,
                img: require("../assets/salad_berry.jpg")
            },
            {
                id:4,
                name:"Cobb salad",
                ingredients: ["Egg", "Romaine lettuce", "Tomatoes", "Bacon"],
                price: 5.99,
                img: require("../assets/salad_cobb.jpg")
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
                price: 1.99,
                img: require("../assets/side.jpg")
            },
            {
                id:1,
                name:"Side Salad",
                ingredients: ["Lettuce", "Cheese", "Tomato"],
                price: 1.99,
                img: require("../assets/side_salad.jpg")
            },
            {
                id:2,
                name:"Fruit cup",
                ingredients: ["Pineapple", "Honeydew", "Grapes"],
                price: 1.99,
                img: require("../assets/side_fruit.jpg")
            },
            {
                id:3,
                name:"Chips",
                ingredients: ["Varies"],
                price: 1.99,
                img: require("../assets/side_chips.jpg")
            },
            {
                id:3,
                name:"Celery",
                ingredients: ["Celery", "Peanut butter"],
                price: 1.99,
                img: require("../assets/side_celery.JPG")
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
                ingredients: ["Varies"],
                price: 1.25,
                img: require("../assets/drink_hot.jpg")
            },
            {
                id:1,
                name:"Fountain drink",
                ingredients: ["Varies"],
                price: 1.25,
                img: require("../assets/drink.jpg")
            },
            {
                id:2,
                name:"2% Milk",
                ingredients: ["2% milk"],
                price: 1.25,
                img: require("../assets/drink_milk.jpg")
            },
            {
                id:3,
                name:"Chocolate Milk",
                ingredients: ["Chocolate milk"],
                price: 1.25,
                img: require("../assets/drink_chocomilk.jpg")
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
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            id: ''
        }
    }

    
    handleClick(num) {
        this.setState({ id: num});
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
                <div className="screen menu">
                    <div className="container-fluid">
                        <Nav />
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
<<<<<<< HEAD
                                                        <Link to={'../choose/item/'+ category.id}><button type="button" className="btn btn-outline-danger">ORDER ></button></Link>
=======
                                                    <a href={"/menu/"+ category.id}>
                                                        <button type="button" className="btn btn-outline-danger" onClick={() => () => () => this.x}>ORDER 
                        
                                                        </button>
                                                        </a>
>>>>>>> 67f926ad2d5bf557686efb7d82a70ba07791b4e7
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