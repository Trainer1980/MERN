import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';

const AuthorMain = () => {
    const [ authors, setAuthors ] = useState([])
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                setAuthors(res.data.sort((a, b) => a.name > b.name ? 1 : -1));
                setLoaded(true);
            })
            .catch(err => console.log("Error: ", err))
    })

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return(
        <div>
            <Link to = '/new'>Add an Author</Link>
            <h4>We have quotes by:</h4>
            { loaded && <AuthorList authors = { authors } removeFromDom = { removeFromDom } /> }
        </div>
    )
}

export default AuthorMain;