import './ProductCard.css'

const ProductCard = ({ detail }) => {
    return (
        <div className="card">
            <img src={detail.img} />
            <span>{detail.ProductName}</span>
        </div>
    );
}

export default ProductCard;