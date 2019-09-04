import React from 'react';
import Participant from './Participant';

//props = array of participant objects
export default function ParticipantList(props) {
    let participants = props.participants.map(person => <Participant key = {person.id} avatar = {person.avatar} name = {person.name} inSession = {person.inSession} onStage = {person.onStage} />)

    return (
        <ul className="participant-list">
            {participants}
        </ul>
    )
}