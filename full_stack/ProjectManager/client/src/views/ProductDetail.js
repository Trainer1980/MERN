import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ProductDetail = (props) => {
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => setProduct(res.data))
            .catch(err => console.log("Error: ", err))
    }, [ props.id ])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                console.log(res)
                navigate('/products')
            })
            .catch(err => console.log("Error: ", err))
    }

    return(
        <div>
            <h1> { product.title } </h1>
            <p>Price: { product.price } </p>
            <p>Description: { product.description } </p>
            <p> <Link to = { '/products/' + product._id + '/edit' } >Edit</Link> </p>
            <button onClick = { (e) => { deleteProduct(product._id) } } >Delete</button>
            <div>
                <h3> <Link to = { '/products' } >List</Link> </h3>
            </div>
        </div>
    )
}

export default ProductDetail;