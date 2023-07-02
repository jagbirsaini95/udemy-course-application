export default function ViewProductDetails(props) {
    return (
        <div className="container">
            <h1>{props.index + 1}. {props.product.productName}</h1>
            <h3>Quantity: {props.product.quantity}</h3>
            <h5>Price: {props.product.price}$</h5>
        </div>
    )

}