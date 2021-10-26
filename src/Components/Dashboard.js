import { useState } from 'react';
import '../App.css';
import Discount404 from './Pages/Error/Discount404';
import ProductCatalog from './Pages/Product/ProductCatalog';
import OrderStatus from './Pages/OrderStatus/OrderStatus';
import DiscountManage from './Pages/Discount/DiscountManage';
import ERM from './Pages/ERM/ERM';
import SideBar from './SideBar/SideBar';

function Dashboard() {

    const [pageIndex, setPageIndex] = useState('');

    function onMenuTabClicked(x) {
        setPageIndex(x)
    }

    let render_side_view = <ProductCatalog />

    switch(pageIndex) {
        case 'Products' : 
            render_side_view = <ProductCatalog />
            break;
        case 'Order Status' :
            render_side_view = <OrderStatus />
            break;
        case 'Discount Coupon' :
            render_side_view = <DiscountManage />
            break;
        case 'ERM System' :
            render_side_view = <ERM />
            break;
        default :
            render_side_view = <ProductCatalog />
    }

    return (
        <div className="App">
            <SideBar passingIndex={onMenuTabClicked}/>
            {render_side_view}
        </div>
    );
}

export default Dashboard;
