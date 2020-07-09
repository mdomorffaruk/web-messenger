import React from 'react'

function Message(props) {
    return (
        <div>
            <p>{props.name}: {props.text}</p>
        </div>
    )
}

export default Message
