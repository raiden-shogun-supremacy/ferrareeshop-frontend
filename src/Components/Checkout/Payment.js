import { Link } from "react-router-dom";
import bufferSlot from './bufferSlot';
import Bill from './Bill';
import priceBuffer from "./priceBuffer";
import './Checkout.css'
import '../Pages/PageStyle.css';

const Payment = () =>{

    const bufferSlot_fetch = bufferSlot.map((data, key) => {
        return <Bill detail={data} />
    });

    return (
        <div className="checkout-post">
            <div className="checkout-bill">
                <img className="logo" src="/logo/ferraree_logo.png" />
                <div>
                    {bufferSlot_fetch}
                </div>
                <div>   
                    <h3>Total: ${priceBuffer.price}</h3>
                </div>
                <Link to ="/dashboard">
                    <button type="submit" className="btn-primary">Order Completed!</button>
                </Link>
            </div>
        </div>
    )
}

export default Payment;