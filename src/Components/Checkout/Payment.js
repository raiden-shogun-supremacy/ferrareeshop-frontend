import './Checkout.css'
import '../Pages/PageStyle.css';
import bufferSlot from './bufferSlot';
import Bill from './Bill';
import Dashboard from '../Dashboard';
import {Link} from "react-router-dom";

const Payment = () =>{

    const bufferSlot_fetch = bufferSlot.map((data, key) => {
        return (
        <Bill detail={data} />
        )
    })
    return (
        <div className="checkout-bg">
            <div>
                <div className="checkout-container">
                    <div className="search-between">
                        <h1>Payment</h1>
                    </div>
                    <div className="checkout-bill">
                        <img className="logo" src="/logo/ferraree_logo.png" />
                        <div>
                            {bufferSlot_fetch}
                        </div>
                    <div>   
                            <h3>Total: {}</h3>
                    </div>
                    </div>

                    <Link to ="/Dashboard"><button type="submit" className="btn-primary">Finished!</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Payment;