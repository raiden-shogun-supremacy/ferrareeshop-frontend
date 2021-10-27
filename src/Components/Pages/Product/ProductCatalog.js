import { useState } from 'react';
import dummy from '../../../Data/dummy.json';
import ProductCard from './ProductCard';
import CartBtn from '../../Cart/CartBtn';
import '../PageStyle.css';
import Basket from '../../Checkout/Basket';


const ProductCatalog = () => {

    const [searchText, setSearchText] = useState('')
    const [openCartState, setOpenCartState] = useState(null);

    function onOpenState() {
        setOpenCartState(true);
    }

    function onCloseState() {
        setOpenCartState(null);
    }

    let openCart = null;

    if(!!openCartState){
        openCart = <Basket onBgClick={onCloseState}/>
    }

    const render_product_showcase = dummy.filter((text) => {
        return text.ProductName.toUpperCase().toLowerCase().includes(searchText);
    }).map((data, key) => {
        return <ProductCard detail={data} index={key} />
    });
    return (
        <div className="container">
            <div className="search-between">
                <div className="header">
                    <h1>Products 📦 </h1>
                    <h4>Let's make some order!</h4>
                </div>
                <input className="input" placeholder="search name" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>
            <div className="catalog">
                <div className="wrapper">
                    {render_product_showcase}
                </div>
            </div>
            <CartBtn onCartClick={onOpenState}/>
            {openCart}
        </div>
    );
}

export default ProductCatalog;