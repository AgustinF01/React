import React from 'react';
import 'CartWidget.css';

const CartWidget = () => {
    return (
        <div class="cart">
            <span>🛒</span>
            <span class="cartCount">8</span>
        </div>
    );
};

export default CartWidget;