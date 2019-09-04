import React from 'react';
import participants from './STORE'


//id, type = string, message = string, time = number, timestamp
export default function ChatEvent(props) {
    let timestamp = new Date(props.timestamp)
    let user = participants.find(participant => participant.id === props.participantId)

    return (
        <li className="chat-message" key={props.timestamp}>
            <img src={user.avatar} alt="" /><p>{user.name}</p><p>{timestamp}</p>
            <p>{props.type === 'message' ? }</p>
        </li>
    )
}