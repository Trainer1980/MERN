import React from 'react';

const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                The word is: { props.word }
            </h1>
        </div>
    )
}

export default Hello;