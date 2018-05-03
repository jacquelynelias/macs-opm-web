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
import Nav from './navbar.jsx';

console.log(JSON.parse(sessionStorage.getItem('cart')))
  class Cart extends Component {
    state = {
        cartItems: []
    }  
     getTotalCost() {
        var total = 0.0;
        this.state.cartItems.map(function (item){
            total = total+item.price
        });
        return total
    }  

    componentDidMount() {
        var cart = JSON.parse(sessionStorage.getItem('cart'))
        if (cart) {
            this.setState({cartItems: cart})
        }
    }

    menu = () => {
        return (
            <div className="row">
                <div className="header">
                    <div className="header-text">
                        <h1>CART</h1>
                    <h3>It's almost yours!</h3>
                 </div>
                </div>
            </div>            
        )
    }   

    getCart = () => {
        if (this.state.cartItems.length > 0) {
            console.log(this.state.cartItems)
        return(this.state.cartItems.map(function (item) {
            console.log(item)
            return (
                <tr className="row" key={item.id}>

                    <td width="col-5">
                        <img src={item.img} />
                    </td>
                    <td className="desc col-3">
                        <h3>
                            {item.name}
                        </h3>
                        <dl className="small m-b-none">
                            <dt>Ingredients</dt>
                            <dd>
                            {
                                item.ingredients.map(function (m) {
                                    var last = item.ingredients.length;
                                    if(item.ingredients[last-1] == m)  {
                                        return (m)
                                    } else {
                                        return(m + ", ")
                                    }
                                })
                            }
                            </dd>
                            <dt>Quantity: {item.quantity}</dt>
                        </dl>
                    </td>
                    <td className="col-4 ml-2">
                        <h1 className="text-center alert" > ${item.price}</h1>
                    </td>
                </tr>
            )
        }))
        } else {
            return (
                <div>
                <p>Add items to your cart</p>
                <Link to="menu"><button type="button" className="btn btn-outline-danger button-back">&lt; BACK </button></Link>
                </div>
                )
        }

    }
   
    render() {
        return (
            <div className="fluid-container order">
                <Nav />
                {this.menu()}
                <div className="row  ml-4 mt-4 mr-4 cart">
                    <div className="col-md-8">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="row">
                                        <th className="col-8" >Item</th>
                                        <th className="col-4" >Price</th>
                                    </tr></thead>
                                <tbody >
                                    {this.getCart()}
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
                                    <button className="button btn-danger align-center text-white btn-block">Checkout</button>
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