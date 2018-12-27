import React from 'react'

function TodoItems(props) {
    return (
        <div>
            <input type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <span>{props.item.text} </span>
            <span style={{color: '#FD5A69'}}>{props.item.completed ? 'Completed' : 'Not yet'}</span>
            <br/>
        </div>
    )
}

export default TodoItems