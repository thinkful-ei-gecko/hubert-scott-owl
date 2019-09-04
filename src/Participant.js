import React from 'react';


//props is expected to be an Object containing paticipant id, avatar link, name, boolean inSession, boolean, onStage
export default function Participant(props) {
    return (
        <li className="participant" key={props.id}>
            <img src={props.avatar} alt="placeholder"></img>
            <h3>{props.name}</h3>
            <div className={props.inSession ? 'in-session': 'left-session'}></div>
            <p>{props.onStage ? 'on stage' : ''}</p>
        </li>
    );
}