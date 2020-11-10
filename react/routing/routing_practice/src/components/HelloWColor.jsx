import React from 'react';

const HelloWColor = (props) => {
    const wordStyle = {
        color: props.tcolor,
        backgroundColor: props.bcolor,
    }
    return (
        <div>
            <h1 style = { wordStyle }>
                The number is: { props.word }
            </h1>
        </div>
    )
}

export default HelloWColor;