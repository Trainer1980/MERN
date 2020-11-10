import React, { useState, useEffect } from 'react';

const StarWars = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        console.log("hello")
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);

    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default StarWars;
