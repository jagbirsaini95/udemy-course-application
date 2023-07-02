import { useState } from "react";

import '../App.css';
import AddProductForm from './AddProductForm';
import ViewProductDetails from './ViewProductDetails';

const defaultProduct = [{
    productName: 'Shoes',
    quantity: 2,
    price: 200,
},
{
    productName: 'Shirts',
    quantity: 3,
    price: 150,
}]

function Week1() {
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [products, setProducts] = useState(defaultProduct);

    const showAddProductFormHandler = () => {
        setShowAddProductForm(prevState => {
            return !prevState;
        })
    }

    const addNewProduct = (newProduct) => {
        setProducts(prevState => {
            return [newProduct, ...prevState]
        })
    }

    return (
        <div className="App1">
            <h1>Week 1</h1>
            {!showAddProductForm && <button className='btn' onClick={showAddProductFormHandler}>Add new product</button>}
            {showAddProductForm && <AddProductForm addProduct={addNewProduct} showFormHandler={showAddProductFormHandler} show={showAddProductForm} />}
            {products.map((item, index) => <ViewProductDetails key={index} index={index} product={item} />)}
        </div>
    );
}

export default Week1;
