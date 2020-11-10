import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Planets = ( props ) => {
    const [ planets, setPlanets ] = useState(null);
    
    const spanStyle = {
        fontWeight: 'normal'
    }
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + props.id + '/')
        .then(response => {
            setPlanets(response.data)
        })
        .catch(() => navigate('/error'));
        }, [ props.id ] );
    
    if(planets == null){
        return "Loading..."
    }
    return(
        <div>
            <h1> { planets.name }</h1>
            <h3>Climate: <span style = { spanStyle } > { planets.climate } </span> </h3>
            <h3>Terrain: <span style = { spanStyle } > { planets.terrain } </span> </h3>
            <h3>Surface water: <span style = { spanStyle } > { planets.surface_water } </span> </h3>
            <h3>Population: <span style = { spanStyle } > { planets.population } </span> </h3>
        </div>
    )
}

export default Planets;