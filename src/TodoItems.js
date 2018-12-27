import React from 'react'

function TodoItems(props) {
    return (
        <div>
            <input type="checkbox"
                checked={props.item.completed}
                onChange={() => console.log('Changed')}
            />
            <span>{props.item.text}</span>
            <br/>
        </div>
    )
}

export default TodoItems