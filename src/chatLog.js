import React from 'react';
import ChatEvent from './chatEvents';

export default function ChatLog(props) {
    let chatLog = props.chatEvents.map(chatEvent => <ChatEvent id={chatEvent.participantId} type={chatEvent.type} message={chatEvent.message} timestamp={chatEvent.timeStamp} />)

    return (
        <ul>
            {chatLog}
        </ul>
    );
}