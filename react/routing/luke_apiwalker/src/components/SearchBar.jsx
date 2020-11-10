import React, { useState } from 'react';
import { navigate } from '@reach/router';

const SearchBar = (props) => {
    const [ formState, setFormState ] = useState({
        option: "people",
        id: ''
    });

    const labelStyle = {
        fontWeight: 'bold',
        marginRight: '10px',
        marginLeft: '20px'
    };

    const inputStyle ={
        width: '100px',
        marginRight: '25px'
    };

    const btnStyle = {
        width: '100px',
        backgroundColor: 'blue',
        color: 'white'
    };

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        navigate('/' + formState.option + '/' + formState.id)
    }

    return(
        <form onSubmit = { onSubmitHandler }>
            <label style = { labelStyle }>Search for:</label>
            <select name = 'option' value = { formState.option } onChange = { onChangeHandler }>
                <option value = 'people'>People</option>
                <option value = 'planets'>Planets</option>
                <option value = 'starships'>Starships</option>
            </select>
            <label style = { labelStyle }>ID:</label>
            <input name = 'id' value = { formState.id } onChange = { onChangeHandler } style = { inputStyle } />
            <button style = { btnStyle }>Search</button>
        </form>
    )
}

export default SearchBar;