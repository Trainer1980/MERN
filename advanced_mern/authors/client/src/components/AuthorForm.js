import React, { useState } from 'react';
import axios from'axios';
import { navigate } from '@reach/router';

const AuthorForm = () => {
    const [ name, setName ] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res => {
                res.jason(res);
                navigate('/');
            })
            .catch(err => console.log("Error: ", err))
    }

    return(
        <div>
            <form onSubmit = { onSubmitHandler } >
                <label>Name:</label><br/>
                <input type = 'text' onChange = { (e) => setName(e.target.value) } /><br/>
                <button onClick = { () => navigate('/')} >Cancel</button>
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm;