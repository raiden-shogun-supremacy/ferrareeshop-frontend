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
            <img src={detail.ProductIMG} />
            <p>{detail.ProductName}</p>
            <span>ProdID : {detail.ProductID}</span>
            <span className={cssVar}>
                {tag}
            </span>
            <p className="price-num">${detail.UnitPrice}</p>
            <span>{detail.Category}</span>
        </div>
    );
}

export default ProductCard;