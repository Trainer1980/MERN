import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {
    const [ people, setPeople ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data))
            .catch(err => console.log("Error: ", err));
    })
    const removeFromDom = (personId) => {
        setPeople(people.filter(person => person._id !== personId))
    }

    return (
        <div>
            { people.map((person, idx) => {
                return (
                    <p key = { idx } > 
                        <Link to = { '/people/' + person._id }>
                            { person.lastName }, { person.firstName }
                        </Link>
                        |
                        |
                        <Link to = {'/people/' + person._id + '/edit' } >
                            Edit
                        </Link>
                        |
                        |
                        <DeleteButton personId = { person._id } successCallback = { () => removeFromDom(person._id) } />
                    </p>
                )
            })}
        </div>
    )
}

export default PersonList;