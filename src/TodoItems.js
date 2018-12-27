import React from 'react'

function TodoItems(props) {
    return (
        <div>
            <input type="checkbox" />
            <span>{props.item.text}</span>
            <br/>
        </div>
    )
}

export default TodoItems