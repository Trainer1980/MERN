import React, { useState } from 'react';

const Pokemon = (props) => {
    const [ pokemon, setPokemon ] = useState([]);

    const onClickHandler = () => {
        console.log("hello")
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=811')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
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
export default Pokemon;