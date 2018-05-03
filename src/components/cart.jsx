import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer'
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
     getTotalCost() {
        var total = 0.0;
        this.state.cartItems.map(function (item){
            total = total+item.cost
        });
        return total
    }  
   
    navbar = () => {
        return (
            <nav className="navbar navbar-light bg-light">
                        {console.log("in log")}
                <a className="navbar-brand" href="#">
                    <img src={require('../assets/logo.png')} height="40" alt=""/>
                </a>
                 <a href="/cart">
                    <i className="material-icons" >shopping_cart</i>
                </a>
            </nav>
        )
    }
    render() {
        return (
            <div className="fluid-container">
                {this.navbar()}
                <div className="row  ml-4 mt-4 mr-4">
                    <div className="col-md-8">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="row">
                                        <th className="col-8" >Item</th>
                                        <th className="col-4" >Price</th>
                                    </tr></thead>
                                <tbody >
                                    {this.state.cartItems.map(function (item) {
                                        return (
                                            <tr className="row" key={item.id}>

                                                <td width="col-5">
                                                    <img src={item.img} />
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
                                                <td className="col-4 ml-2">
                                                    <h1 className="text-center alert" > ${item.cost}</h1>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card checkout">
                            <div className="card-body " >
                                <h3 className="card-title">Summary</h3>
                                <div className="card-subtitle mb-2 text-muted">
                                    <h5>Subtotal: ${this.getTotalCost()}</h5>
                                    <h6>Tax: ${(this.getTotalCost() * .0875).toFixed(2)}</h6>
                                    <hr />
                                    <h4>Total: ${(this.getTotalCost()*1.0875).toFixed(2) }</h4>
                                    <button className="button btn-primary align-center text-white btn-block">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>

        )
    }
}

export default Cart