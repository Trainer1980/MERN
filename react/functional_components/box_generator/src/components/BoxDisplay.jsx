import React from 'react';

const BoxDisplay = (props) => {
    const bxstyle = {
        height: "150px",
        width: "150px",
        marginRight: "30px",
        marginTop: "30px",
        display: "inline-block",
        backgroundColor: props.box,
    };
    
    return (
        <div style = { bxstyle } >

        </div>
            
    );
};

export default BoxDisplay;