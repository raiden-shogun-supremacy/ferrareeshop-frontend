import './ProductCard.css'

const ProductCard = ({ detail }) => {

    let cssVar = '';
    let tag = '';

    switch(detail.InStockAmt){
        case '0':
            cssVar = 'tag-preorder';
            tag = 'Pre-order';
            break;
        default :
            cssVar = 'tag-instock';
            tag = 'In-stock'
        break;
    }
    return (
        <div className="card">
            <img src={detail.img} />
            <p>{detail.ProductName}</p>
            <span># {detail.ProdID}</span>
            <span className={cssVar}>
                {tag}
            </span>
            <p className="price-num">{detail.Unitprice}</p>
            <span>{detail.VendorName}, {detail.Height}</span>
        </div>
    );
}

export default ProductCard;