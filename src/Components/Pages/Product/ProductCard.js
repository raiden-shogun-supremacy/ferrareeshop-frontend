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
            <p># {detail.ProdID}</p>
            <span className={cssVar}>
                {detail.Tag}
            </span>
            <span>{detail.Unitprice}</span>
            <span>{detail.VendorName}, {detail.Height}</span>
        </div>
    );
}

export default ProductCard;