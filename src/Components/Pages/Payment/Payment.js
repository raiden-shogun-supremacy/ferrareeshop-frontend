import './Payment.css'
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div className="payment-bg">
            <div className="payment-pop">
            <Link to ="../Dashboard"><img src="/icon/close.png" className="quit" /></Link>
                <div className="payment-little-header">
                        <p>customer</p>
                </div>
                <div className="payment-content">
                    <h1>PAYMENT</h1>
                </div>
                <div className="reciept">
                    
                </div>
            </div>
        </div>
    );
}

export default Payment