import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "add-todo" :
            return { todos: [ ...state.todos, { text: action.text, completed:  false } ] };
        case "comp-todo" :
            return {
                todos: state.todos.map((t, idx) => idx === action.idx ? { ...t, completed: !t.completed } : t)
            };
        case "del-todo" :
            const todos = Object.assign([], state.todos);
            state.todos.map((t, idx) => idx === action.idx ? todos.splice(idx, 1) : t);
            return {
                todos: todos,
            };
        default :
            return state;
    }
}

const ToDoList = (props) => {
    const [ { todos }, dispatch ] = useReducer(reducer, { todos: [] });
    const [text, setText] = useState();

    return(
        <div>
            <form onSubmit = { (e) => {
                e.preventDefault();
                dispatch( { type: "add-todo", text } );
                setText('');
            }}>
                <input value = { text } onChange = { (e) => setText(e.target.value) } />
                <input type = "submit" value = "Add"/>
            </form>
            { todos.map( (t, idx ) => <div key = { t.text } style = {{ textDecoration: t.completed ? "line-through" : "" }} > { t.text } 
                <label> <input type = "checkbox"
                    onClick = { () => dispatch( { type: "comp-todo", idx } )} /> 
                </label>
                    <button type = "button" onClick = { () => dispatch( { type: "del-todo", idx }) } >Delete</button>
            </div> ) }
        </div>
    );
}

export default ToDoList;

// checked = { comp }  
// 