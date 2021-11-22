import { useEffect, useState } from 'react';
import axios from 'axios';
import dummy from '../../../Data/dummy.json';
import ProductCard from './ProductCard';
import CartBtn from '../../Cart/CartBtn';
import '../PageStyle.css';
import Basket from '../../Checkout/Basket';


const ProductCatalog = () => {

    const [searchText, setSearchText] = useState('')
    const [openCartState, setOpenCartState] = useState(null);
    const [productList, setProductList] = useState([]);
    // let productList = [];

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/product')
            .then(resJson => {
                setProductList(resJson.data);
            })
            .catch(err => console.log(err.message));
    },[]);

    
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

    const render_product_showcase = productList.filter((text) => {
        return text.ProductName.toUpperCase().toLowerCase().includes(searchText) || text.Category.toUpperCase().toLowerCase().includes(searchText);
    }).map((data, key) => {
        return <ProductCard detail={data} index={key} />
    });

    console.log(productList[0]);

    return (
        <div className="container">
            <div className="search-between">
                <div className="header">
                    <h1>Products 📦 </h1>
                    <h4>Let's make some order!</h4>
                </div>
                <input className="input" placeholder="search name or size" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
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