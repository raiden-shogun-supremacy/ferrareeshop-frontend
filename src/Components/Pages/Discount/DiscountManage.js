import '../PageStyle.css';

const DiscountManage = () => {
    return (
        <div className="container">
            <h1>Discount Coupon 🎟️</h1>
            <h4>Get more customer with a discount coupon!</h4>
            <div className="content">
                <div className="discount-box-input">
                    {/* <div>
                        <p>Discount ID</p>
                        <input type="text"/>
                    </div> */}
                    <div>
                        <p>Discount Code</p>
                        <input type="text"placeholder="(uppercase only)"/>
                    </div>
                </div>
                <div className="discount-box-input">
                    <div>
                        <p>Code Amount</p>
                        <input type="number" placeholder="(number only)"/>
                    </div>
                    <div>
                        <p>Valid Until</p>
                        <input type="date"/>
                    </div>
                </div>
                <button className="btn-primary">Create Code</button>
            </div>
        </div>
    );
}

export default DiscountManage;