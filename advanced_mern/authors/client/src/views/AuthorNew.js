import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const AuthorNew = () => {
    const [ name, setName ] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log("Error: ", err))
        navigate('/');
    }

    return(
        <div>
            <h4>Add a new author:</h4>
            <form onSubmit = { onSubmitHandler } >
                <label>Name:</label><br/>
                <input type = 'text' onChange = { (e) => { setName(e.target.value) } } /><br/>
                <button type = "button" onClick = { () => navigate('/')} >Cancel</button>
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}

export default AuthorNew;