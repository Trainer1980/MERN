import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const AuthorUpdate = (props) => {
    const { id } = props;
    const [ name, setName ] = useState('');

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name)
            })
            .catch(err => console.log("Error: ", err));
    }, [ id ])

    const updatePerson = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => console.log(res))
            .catch(err => console.log("Error: ", err));
        navigate('/');
    }

    return(
        <div>
            <h4>Edit this author:</h4>
            <form onSubmit = { updatePerson } >
                <label>Name:</label><br/>
                <input type = 'text' name = 'name' value = { name } onChange = { (e) => { setName(e.target.value) } } /><br/>
                <button type = "button" onClick = { () => navigate('/')} >Cancel</button>
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}

export default AuthorUpdate;