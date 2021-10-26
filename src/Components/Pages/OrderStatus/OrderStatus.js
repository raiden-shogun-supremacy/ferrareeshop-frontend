import '../PageStyle.css';
import order_status from '../../../Data/order_status.json';
import './StatusTable.css';

const OrderStatus = () => {
    const order_fetch = order_status.map((data, key) => {
        return (
            <tr>
                <td>{data.ReceiptID}</td>
                <td>{data.Status}</td>
            </tr>
        );
    });

    return (
        <div className="container">
            <div className="header">
                <h1>Order Status ✅</h1>
                <h4>Tracking the orders which be made.</h4>
            </div>
            <div className="content">
                <div>
                    <table>
                        <tr>
                            <th>Receipt ID</th>
                            <th>Status</th>
                        </tr>
                        {order_fetch}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderStatus;