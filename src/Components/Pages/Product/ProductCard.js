import './ProductCard.css'

const ProductCard = ({ detail }) => {

    let cssVar = '';

    switch(detail.Tag){
        case 'In-stock':
            cssVar = 'tag-instock';
            break;
        case 'Pre-order':
            cssVar = 'tag-preorder';
            break;
    }
    return (
        <div className="card">
            <img src={detail.img} />
            <p>{detail.ProductName}</p>
            <span># {detail.ProdID}</span>
            <span className={cssVar}>
                {detail.Tag}
            </span>
            <p className="price-num">{detail.Unitprice}</p>
            <span>{detail.VendorName}, {detail.Height}</span>
        </div>
    );
}

export default ProductCard;