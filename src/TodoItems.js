import React from 'react'

function TodoItems(props) {
    const completedStyles = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div>
            <input type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <span style={props.item.completed ? completedStyles : null}>{props.item.text} </span>
            <br/>
        </div>
    )
}

export default TodoItems