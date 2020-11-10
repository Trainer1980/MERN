import React, { useState } from 'react';
import axios from 'axios';

const PokemonAxios = (props) => {
    const [ pokemon, setPokemon ] = useState([]);

    const onClickHandler = () => {
        console.log("hello")
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=811').then(response => {
            setPokemon(response.data.results)
        })
    };

    return (
        <div>
            <div>
            <button onClick = { onClickHandler }>Fetch Pokemon</button>
                {pokemon.length > 0 && pokemon.map((p, index)=>{
                    return (<ol key={index}>{p.name}</ol>)
                })}
            </div>
        </div>
    );
}
export default PokemonAxios;