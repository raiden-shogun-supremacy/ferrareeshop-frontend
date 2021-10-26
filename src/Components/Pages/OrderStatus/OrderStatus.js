import order_status from '../../../Data/order_status.json';
import '../PageStyle.css';
import './StatusTable.css';

const OrderStatus = () => {

    let stat_color = '';

    const order_fetch = order_status.map((data, key) => {
        switch(data.Status){
            case "In progress" :
                stat_color = "in-progress";
                break;
            case "Disputed" :
                stat_color = "disputed";
                break;
            case "On hold" :
                stat_color = "on-hold";
                break;
            case "Canceled" :
                stat_color = "canceled";
                break;
            case "Shipped" :
                stat_color = "shipped";
                break;
            case "Resolved" :
                stat_color = "resolved";
                break;
        }
        return (
            <tr>
                <td> # {data.ReceiptID}</td>
                <td className={stat_color}>{data.Status}</td>
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
                <div className="table-align">
                    <table cellPadding="0" cellPadding="0" border="0">
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