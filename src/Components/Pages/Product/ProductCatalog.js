import { useState } from 'react';
import dummy from '../../../Data/dummy.json';
import ProductCard from './ProductCard';
import '../PageStyle.css';


const ProductCatalog = () => {

    const [searchText, setSearchText] = useState('')

    const render_product_showcase = dummy.filter((data) => {
        return data.ProductName.toUpperCase().toLowerCase().includes(searchText);
    }).map((data, key) => {
        return <ProductCard detail={data} index={key}/>
    });
    return (
        <div className="container">
            <div className="space-between">
                <div className="header">
                    <h1>Products 📦 </h1>
                    <h4>Let's make some order!</h4>
                </div>
                <input className="input" placeholder="type to filter" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>
            <div className="content">
                <div className="wrapper">
                    {render_product_showcase}
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;