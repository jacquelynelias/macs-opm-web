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
    render() {
        return (
            <div className="table-responsive">
                <table className="table shoping-cart-table">
                    <tbody >
                    {this.state.cartItems.map(function (item) {
                    return(
                    <tr className="row">
                   
                        <td width="col-3">
                        <img src={item.img}/>
                        </td>
                        <td className="desc col-6">
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

                        <td className="col-1">
                            ${item.cost}
                        </td>
                        <td width className=" col-1">
                            <input type="text" className="form-control" value={item.quantity}/>
                        </td>
                        <td>
                            <h4>
                                {item.quantity * item.cost}
                            </h4>
                        </td>
                    </tr>
                   
                
                    )})}
                    </tbody>
                </table>
            </div>


        )
    }
}

export default Cart