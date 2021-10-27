import { useState } from 'react';
import './Checkout.css';

const ListCard = ({ detail }) => {

    const [qty, setQty] = useState(1);

    function validateMinus() {
        if(qty <= 0){
            setQty(0);
        } else {
            setQty(prev => prev - 1);
        }
    }
 
    return (
        <div className="card-h search-between">
            <div className="info">
                <div className="img-width">
                    <img src={detail.img} />
                </div>
                <div className="card-detail">
                    <h3>{detail.ProductName}</h3>
                    <h4>${detail.Unitprice}</h4>
                    <p>ProductID : {detail.ProdID}</p>
                    <p>In-stock Amount : {detail.InStockAmt}</p>
                </div>
            </div>
            <div className="info">
                <button className="btn-primary" onClick={() => validateMinus()}>-</button>
                <div className="qty-width">
                    <h4>{qty}</h4>
                </div>
                <button className="btn-primary" onClick={() => setQty(prev => prev + 1)}>+</button>
            </div>
        </div>
    );
}

export default ListCard;