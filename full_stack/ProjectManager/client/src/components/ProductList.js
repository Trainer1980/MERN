import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router'
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const ProductList = (props) => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log("Error: ", err))
    })
    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId))
    }
        
    return(
        <div>
            { products.map((product, idx) => {
                return(
                    <p key = { idx } >
                        <Link to = { '/products/' + product._id } > { product.title } </Link>
                        |
                        |
                        <Link to = { '/products/' + product._id + '/edit '}>Edit</Link>
                        |
                        |
                        <DeleteButton productId = { product._id } successCallback = { () => removeFromDom(product._id) } >
                            Delete
                        </DeleteButton>
                    </p>
                )
            })}
        </div>
    )
}

export default ProductList;