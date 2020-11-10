import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Homeworld = ( { url } ) => {
    const [ homeworld, setHomeworld ] = useState({});

    const spanStyle = {
        fontWeight: 'normal'
    };

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setHomeworld(response.data);
        })
        .catch(console.log)
    }, [ url ] );

    return (
        <div>
            <h3>Homeworld: <span style = { spanStyle } > { homeworld.name } </span> </h3>
        </div>
    )
}

export default Homeworld;