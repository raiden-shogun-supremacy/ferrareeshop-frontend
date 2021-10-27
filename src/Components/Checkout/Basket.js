import ListCard from './ListCard';
import bufferSlot from './bufferSlot';

import './Checkout.css';
import '../Pages/PageStyle.css';

const Basket = ({ onBgClick }) => {

    let base_price = 0;

    const checkout_render = bufferSlot.map((data) => {
        base_price += data.Unitprice;
        return <ListCard detail={data} />
    });

    

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
                    </div>
                    <div className="coupon">
                        <h3>Total ${base_price}</h3>
                        <button className="btn-primary">Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
            
    );
}

export default Basket;