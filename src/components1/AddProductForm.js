import './AddProductForm.css'
export default function AddProductForm(props) {

    const cancelHandler = () => {
        props.showFormHandler(!props.show)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            productName: e.target.elements.product.value,
            quantity: e.target.elements.quantity.value,
            price: e.target.elements.price.value,
        }
        props.addProduct(newProduct);
    }

    return (
        <div className="container">
            <form onSubmit={formSubmitHandler}>
                Product Name:  <br />
                <input name='product' placeholder='product' type="text" required /><br />
                Quantity <br />
                <input name='quantity' placeholder='quantity' type="number" required /><br />
                Price: <br />
                <input name='price' placeholder='price' type="number" required />
                <div className="add-product-btns">
                    <button className='btn' type='submit'>Add product</button>
                    <button className='btn' onClick={cancelHandler}>cancel</button>
                </div>
            </form>
        </div>
    )
}