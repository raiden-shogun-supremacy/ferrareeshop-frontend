import LoginBox from './Logged/LoginBox';
import MenuBtn from './Menu/MenuBtn';
import './SideBar.css';
import MenuElem from './Menu/MenuElem.json';

const SideBar = () => {

    const render_menu_button = MenuElem.map((data, key) => {
        return <MenuBtn detail={data} index={key} />
    });

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