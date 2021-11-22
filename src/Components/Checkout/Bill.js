const Bill = ({detail}) =>{
    return(
        <div>
            <div>
                <div className="info">
                    <div className="bill">
                        {/* <img src={detail.img} /> */}
                        <h3>{detail.ProductName}</h3>
                        <p>Product ID: {detail.ProdID}</p>
                        <p>Unit price: {detail.Unitprice}</p>
                        <p>In stock amount: {detail.InStockAmt}</p>
                        <p>- - - - - - - - - - - - - - - - - - - -</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill;