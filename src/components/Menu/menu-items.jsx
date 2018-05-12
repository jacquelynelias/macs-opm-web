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
import Nav from './navbar.jsx'

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

var cart = [];

class MenuItems extends Component {
    constructor(props) {
        super(props)
        this.state={
            id: this.props.match.params.id,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(thing, e) {

        console.log(thing)
        if (cart.length > 0) {
            var notInserted = true
            for (var m = 0; m < cart.length; m++) {
                if (cart[m].name === thing.name) {
                    cart[m].quantity+=1;
                    notInserted = false
                } 
            
            }
            if (notInserted){
                thing.quantity = 1;
                    
                cart.push(thing)
            }
        } else {
            thing.quantity = 1;
            cart.push(thing)
        }     
    }
    componentWillUnmount(){
       (e) => this.handleChange(e)
    }
    handleChange(e) {
        sessionStorage.setItem('cart', JSON.stringify(cart));
        console.log("session" + JSON.parse(sessionStorage.getItem('cart')))
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

    getCards = () => {
        var i;
        for(i = 0; i < categories.length; i++) {
            if (categories[i].id == this.state.id) {
                return (categories[i].items.map((thing)=> {
                    return (
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="menu-item">
                                    <div className="card bg-dark text-white">
                                        <div className="card-img-overlay">
                                            <div className="row">
                                                <h3 className="category-text">{thing.name}</h3>
                                            </div>
                                            <div className="row">
                                                <button type="button" className="btn btn-outline-danger" onClick={(e)=>this.handleClick(thing, e)}>ADD ></button>
                                            </div>
                                        </div>
                                    </div>
                                <img className="card-img-bottom" src={thing.img} />
                            </div>
                        </div>

                    );
                }))
            }
        }
    }


    render() {
        return (
            <div className="container-fluid item">
                <Nav />
                {this.menu()}
                <div className="row options">
                    <div className="row">               
                    {this.getCards()}
                    </div>
                    <div className="row">
                        <Link to="../../menu"><button type="button" className="btn btn-outline-danger button-back" onClick={(e)=>this.handleChange(e)}>&lt; BACK </button></Link>
                    </div>   
                    <div className="row">
                        <Link to="../../cart"><button type="button" className="btn btn-outline-danger button-checkout" onClick={(e)=>this.handleChange(e)}>CHECKOUT &gt;</button></Link>
                    </div>   
                </div>
             <Footer/>                
            </div>

        )
    }
}

export default MenuItems
