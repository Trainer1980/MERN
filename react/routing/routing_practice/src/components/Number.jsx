import React from 'react';
import Hello from './Hello';

const Number = (props) => {
    if(isNaN(props.id)){
        return <Hello  word = { props.id } />;
    } 
    
    return(
        <div>
            <h1>
                The number is: { props.id }
            </h1>
        </div>
    )
}

export default Number;