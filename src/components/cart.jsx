import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './cart.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  class Cart extends Component {
    state = {
        cartItems: [
            {
                id: 0,
                name: "Burger",
                desc: "delicious burger with chicken",
                toppings: ["sssvvssv", "fewqggww", "fgrfegw"],
                cost: 3.99,
                img: require("../assets/burger.jpg"),
                quantity: 4
        
            },
            {
                id: 1,
                name: "Pizza",
                desc: "delicious burger with chicken",
                toppings: ["sssvvssv", "fewqggww", "fgrfegw"],
                cost: 3.99,
                img: require("../assets/pizza.jpg"),
                quantity: 6
            },
            {
                id: 2,
                name: "Salad",
                desc: "delicious burger with chicken",
                toppings: ["sssvvssv", "fewqggww", "fgrfegw"],
                cost: 2.99,
                img: require("../assets/salad.jpg"),
                quantity: 4
            },
            {
                id: 3,
                name: "Side",
                desc: "delicious burger with chicken",
                toppings: ["sssvvssv", "fewqggww", "fgrfegw"],
                cost: 4.99,
                img: require("../assets/side.jpg"),
                quantity: 8
            }
        ]
    }

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
    render() {
        return (
            <div className="fluid-container">
                {this.navbar()}
            <div className="row">
            <div className="col-md-12">
            <div className="table-responsive">
                <table className="table table-striped ml-4">
                <thead>
    <tr className ="row">
      <th className="col-8" >Item</th>
      <th className="col-4" >Price</th>
    </tr></thead>
                    <tbody >
                    {this.state.cartItems.map(function (item) {
                    return(
                    <tr className="row">
                   
                        <td width="col-5">
                        <img src={item.img}/>
                        </td>
                        <td className="desc col-3">
                            <h3>
                            {item.name}
                            </h3>
                            <p className="small">
                             {item.desc}
                            </p>
                            <dl className="small m-b-none">
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                            </dl>
                        </td>
                        <td className="col-4">
                           <h1 className="text-center" > ${item.cost}</h1>
                        </td>
                    </tr>
                   
                
                    )})}
                    </tbody>
                </table>
            </div>
            </div>
            <div className="col-md-4">
            </div>
            </div>
                </div>

        )
    }
}

export default Cart