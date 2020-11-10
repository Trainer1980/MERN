import React, { useState } from 'react';

const BoxForm = (props) => {
    const [ bxc, setBxc ] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(bxc);
        setBxc("");
    };

    return (
        <form onSubmit = { handleSubmit }>
            <input type='text' onChange = { (e) => setBxc(e.target.value)} value = { bxc } />
            <input type="submit" />
        </form>
    );
};

export default BoxForm;