import { useState } from 'react';
import LoginBox from './Logged/LoginBox';
import MenuBtn from './Menu/MenuBtn';
import './SideBar.css';
import MenuElem from './Menu/MenuElem.json';

const SideBar = ({ passingIndex }) => {

    const [switchIndex, setSwitchIndex] = useState('')

    const getPassedIndex = (x) => {
        setSwitchIndex(x)
    }

    const render_menu_button = MenuElem.map((data, key) => {
        return <MenuBtn detail={data} index={key} onBtnClick={getPassedIndex} />
    });

    switch(switchIndex) {
        case 'Products' : 
            console.log('Products');
            passingIndex(switchIndex);
            break;
        case 'Order Status' :
            console.log('Order Status');
            passingIndex(switchIndex);
            break;
        case 'Discount Coupon' :
            console.log('Discount Coupon');
            passingIndex(switchIndex)
            break;
        case 'ERM System' :
            console.log('ERM');
            passingIndex(switchIndex);
            break;
        default :
            console.log('Products');
            passingIndex(switchIndex);
            break;
    }

    return (
        <div className="sidebar">
            <img src="/logo/ferraree_logo.png" />
            <div className="menu-list">
                {render_menu_button}
            </div>
            <LoginBox />
        </div>
    );
}

export default SideBar;