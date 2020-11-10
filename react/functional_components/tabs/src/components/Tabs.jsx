import React, { useState } from 'react';

const Tabs = (props) => {
    const [ state, setState ] = useState("")
    const tabbing = [ { label: "Tab 1", content: "Tab 1 content" }, { label: "Tab 2", content: "Tab 2 content" }, { label: "Tab 3", content: "Tab 3 content" } ];
    const onClickHandler = (e, value) => {
        let displayContent = value.content;
        setState(displayContent);
    }
    const btn = {
        height: "75px",
        width: "150px",
        fontSize: "20px",
        border: "none",
        backgroundColor: "white",
        marginRight: "25px",
    }
    const list ={
        display: "inline-block",
    }


    return (
        <>
            { tabbing.map( (item, index) => {
                return (
                    <ul key = {index} style = { list } > 
                        <button style = { btn } onClick = { (e) => onClickHandler(e, item) } > { item.label } </button>
                    </ul>
                    
                )
            })}
            <div>
                { state }
            </div>
        </>
    )
}

export default Tabs;