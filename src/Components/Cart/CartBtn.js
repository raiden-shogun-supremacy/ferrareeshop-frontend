import { useState } from 'react';
import './CartBtn.css';



const CartBtn = ({ onCartClick }) => {
    return (
        <div className="cart-btn" onClick={() => onCartClick()}>
            <img src="/icon/cart.png" />
        </div>
    );
}

export default CartBtn;