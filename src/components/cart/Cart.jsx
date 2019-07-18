import React, { Component } from 'react';

import Choose from '../choose/choose'

import '../../base.styl'
import './Cart.styl'

class Cart extends Component {
    state = {}
    render() {
        return (
            <div className="Cart">
                <div className="head">
                    购物车
                </div>
                <Choose />
            </div>
        )
    }
}

export default Cart