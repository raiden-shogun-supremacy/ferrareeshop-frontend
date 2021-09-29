import dummy from '../../../Data/dummy.json';
import ProductCard from './ProductCard';
import '../PageStyle.css';


const ProductCatalog = () => {

    const render_product_showcase = dummy.map((data, key) => {
        return <ProductCard detail={data} index={key}/>
    });
    return (
        <div className="container">
            <h1>Products 📦 </h1>
            <h4>Let's make some order!</h4>
            <div className="content">
                <div className="wrapper">
                    {render_product_showcase}
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;