import '../PageStyle.css';
import order_status from '../../../Data/order_status.json';
import StatusTable from './StatusTable';

const OrderStatus = () => {
    const order_fetch = order_status.map((data, key) => {
        return <StatusTable detail={ data } index={ key } />
    })
    return (
        <div className="container">
            <div className="header">
            <h1>Order Status ✅</h1>
            <h4>Tracking the orders which be made.</h4>
            </div>
                <div className="table-header">
                    <div>Receipt ID</div>
                    <div>Status</div>
                </div>
                { order_fetch }
                {/* <img src="/images/error404.png" />
                <p className="caution">NAH, ONLY THE MARKETING MANAGER CAN ACCESS THIS SECTION!</p> */}
        </div>
    );
}

export default OrderStatus;