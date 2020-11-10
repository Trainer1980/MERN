import React from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
    table: {
        maxWidth: "500px",
        margin: "auto"
    },
});


const AuthorList = (props) => {
    const classes = useStyles();
    const { removeFromDom } = props;

    const deletePerson = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    
    return(
        <div>
            <TableContainer>
                <Table className = { classes.table } aria-label = 'simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Author</TableCell>
                            <TableCell>Actions Available</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { props.authors.map((author, idx) => (
                            <TableRow key = { idx } > 
                                <TableCell> { author.name } </TableCell>
                                <TableCell> <button onClick = { () => navigate('/edit/' + author._id) } >Edit</button> &nbsp; &nbsp; <button onClick = { (e) => { deletePerson(author._id) } } >Delete</button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AuthorList;