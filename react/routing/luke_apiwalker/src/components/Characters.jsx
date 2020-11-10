import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
// import Homeworld from './Homeworld';

const Characters = ( props ) => {
    const [ people, setPeople ] = useState('');
    const [ homeworld, setHomeworld ] = useState( { name: '' } );

    const spanStyle = {
        fontWeight: 'normal'
    }

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + props.id + '/')
        .then(response => {
            setPeople(response.data)
            setHomeworld( { name: 'Loading...' } )
        })
        .catch(() => navigate('/error'));
            
        }, [ props.id ] );

    useEffect(() => {
        axios.get(people.homeworld)
        .then(response => {
            setHomeworld(response.data);
        })
        .catch(console.log);
    }, [ props.id, people ]);
    
    if(people == null){
        return "Loading..."
    }

    const getHomeworldId = () => {
        if(homeworld.url) {
            const url = homeworld.url;
            let i = url.length-2;
            let HwId = '';

            while(url[i] !== '/') {
                HwId = url[i] + HwId;
                i--;
            }
            return HwId;
        }
    }

    return(
        <div>
            <h1> <span style = { spanStyle } > { people.name } </span> </h1>
            <h3>Homeworld: <span style = { spanStyle } > <Link to = { '/planets/' + getHomeworldId() + '/' } > { homeworld.name } </Link> </span></h3>
            {/* <Homeworld url = { people.homeworld } /> */}
            <h3>Height: <span style = { spanStyle } > { people.height } cm </span> </h3>
            <h3>Mass: <span style = { spanStyle } > { people.mass } kg </span> </h3>
            <h3>Hair Color: <span style = { spanStyle } > { people.hair_color } </span> </h3>
            <h3>Eye Color: <span style = { spanStyle } > { people.eye_color } </span> </h3>
            <h3>Skin Color: <span style = { spanStyle } >{ people.skin_color } </span> </h3>
        </div>
    )
}

export default Characters;