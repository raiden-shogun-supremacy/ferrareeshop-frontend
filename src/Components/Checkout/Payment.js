import './Checkout.css'
import '../Pages/PageStyle.css';
import bufferSlot from './bufferSlot';
import Bill from './Bill';
import { useState } from 'react';
import Dashboard from '../Dashboard';

const Payment = () =>{

    const[finished, setFinished] = useState('');

    const getPassedFinished = (x) => {
        setFinished(x)
    }

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

                    <button type="submit" className="btn-primary" onClick={getPassedFinished}>Finished!</button>
                </div>
            </div>
        </div>
    )
}

export default Payment;