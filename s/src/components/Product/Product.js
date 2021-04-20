import React, { Component } from 'react';
import './Product.css';

export default class Product extends Component {
 
state = {
    cart: [],
    total: 0
  }

 render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: {this.state.cart.length}  total items.
        </div>
        <div>Total: {this.state.total}</div>

        <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
        <button>Add</button> <button>Remove</button>
      </div>
    )
  }
}
