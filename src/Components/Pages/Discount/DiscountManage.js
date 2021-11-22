import { useEffect, useState } from 'react';
import axios from 'axios';
import '../PageStyle.css';

const DiscountManage = () => {

    const [discountCode, setDiscountCode] = useState('');
    const [codeAmount, setCodeAmount] = useState();
    const [validDate, setValidDate] = useState('');

    function createCoupon() {
        axios
            .post('http://127.0.0.1:8000/api/newcoupon', {
                DiscountCode : discountCode,
                CodeAmount : codeAmount,
                ValidUntil : validDate
            })
            .catch(err => console.log(err.message));

        alert('Creating Coupon Successful!');
    }

    

    return (
        <div className="container">
            <h1>Discount Coupon 🎟️</h1>
            <h4>Get more customer with a discount coupon!</h4>
            <div className="content">
                <div className="discount-box-input">
                    <div>
                        <p>Discount Code</p>
                        <input type="text"placeholder="(uppercase only)" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)}/>
                    </div>
                </div>
                <div className="discount-box-input">
                    <div>
                        <p>Discount Amount</p>
                        <input type="number" placeholder="(number only : THB)" value={codeAmount} onChange={e => setCodeAmount(e.target.value)}/>
                    </div>
                    <div>
                        <p>Valid Until</p>
                        <input type="date" value={validDate} onChange={e => setValidDate(e.target.value)}/>
                    </div>
                </div>
                <button className="btn-primary" onClick={createCoupon}>Create Code</button>
            </div>
        </div>
    );
}

export default DiscountManage;