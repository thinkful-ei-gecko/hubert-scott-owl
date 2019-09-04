import React from 'react';
import Participant from './Participant';
import './participantList.css';

//props = array of participant objects
export default function ParticipantList(props) {
    let participants = props.participants.map(person => <Participant key={person.id} avatar={person.avatar} name={person.name} inSession={person.inSession} onStage={person.onStage} />)

    return (
        <section className="participants">
            <ul className="participant-list">
                {participants}
            </ul>
        </section>
    );
}