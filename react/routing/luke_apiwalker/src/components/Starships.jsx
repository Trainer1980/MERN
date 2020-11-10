import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Starships = ( props ) => {
    const [ starships, setStarships ] = useState(null);
    
    const spanStyle = {
        fontWeight: 'normal'
    }
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + props.id + '/')
        .then(response => {
            setStarships(response.data)
        })
        .catch(() => navigate('/error'));
        }, [ props.id ] );
    
    if(starships == null){
        return "Loading..."
    }
    return(
        <div>
            <h1> { starships.name }</h1>
            <h3>Model: <span style = { spanStyle } > { starships.model } </span> </h3>
            <h3>Manufacturer: <span style = { spanStyle } > { starships.manufacturer } </span> </h3>
            <h3>Hyperdrive Rating: <span style = { spanStyle } > { starships.hyperdrive_rating } </span> </h3>
            <h3>Starship Class: <span style = { spanStyle } > { starships.starship_class } </span> </h3>
        </div>
    )
}

export default Starships;