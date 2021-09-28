import LoginBox from './Logged/LoginBox';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar">
            <img src="/logo/ferraree_logo.png" />
            <div className="menu-list">
                <button>Product</button>
                <button>Order Status</button>
                <button>Discount Coupon</button>
                <button>ERM System</button>
            </div>
            <LoginBox />
        </div>
    );
}

export default SideBar;