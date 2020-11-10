import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const ProductUpdate = (props) => {
    const { id } = props;
    const [ product, setProduct ] = useState();
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true)
            })
            .catch(err => console.log("Error: ", err))
    }, [ id ])

    const updateProduct= (person) => {
        axios.put('http://localhost:8000/api/products/' + id, person)
            .then(res => {
                console.log(res)
                navigate('/products/' + id)
            })
            .catch(err => console.log("Error: ", err))
    }

    return(
        <div>
            <h1>Update a Product</h1>
            { loaded && (
                <>
                    <ProductForm
                        onSubmitProp = { updateProduct }
                        initialTitle = { product.title }
                        initialPrice = { product.price }
                        initialDescription = { product.description }
                    />
                    <DeleteButton productId = { product._id } successCallback = { () => navigate('/products')} >
                        Delete
                    </DeleteButton>
                </>
            )}
        </div>
    )
}

export default ProductUpdate;