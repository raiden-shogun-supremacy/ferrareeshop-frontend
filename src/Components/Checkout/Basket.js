import { useState, useEffect } from 'react';
import ListCard from './ListCard';
import bufferSlot from './bufferSlot';

import './Checkout.css';
import '../Pages/PageStyle.css';

const Basket = ({ onBgClick }) => {

    let priceArray = [];
    const checkout_render = bufferSlot.map((data, index) => {
        priceArray.push(data.Unitprice);
        return <ListCard detail={data} onQtyClick={setNewTotalPrice} index={index}/>
    });

    const sumPrice = (accumulator, curr) => accumulator + curr;

    function setNewTotalPrice(key, price, payload) {
        priceArray[key] = price*payload;
        console.log('key:' + key + ' '+ price + ' ' + payload);
        console.log(priceArray)
    }
    

    return (
        <div className="checkout-post">
            <div className="checkout-bg" onClick={onBgClick}/>
            <div className="checkout-container">
                <div className="search-between">
                    <h1>Basket</h1>
                    <p className="p-to-close" onClick={onBgClick}>close[x]</p>
                </div>
                <div className="checkout-upper">
                    <div className="card-render">
                        {checkout_render}
                    </div>
                </div>
                <div className="checkout-lower">
                    <div className="coupon">
                        <p>Discount code :</p>
                        <input placeholder="discount coupon"/>
                        <p>Customer Name :</p>
                        <input placeholder="customer name"/>

                    </div>
                    <div className="coupon">
                        <h3>Total ${priceArray.reduce(sumPrice)}</h3>
                        <button className="btn-primary">Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
            
    );
}

export default Basket;