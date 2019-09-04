import React from 'react';
import Stage from './Stage';

export default function StageList(props) {
    let stageUsers = props.stage.filter(users => {users.onStage})
    stageUsers = stageUsers.map(users => <Stage key={users.id} name={users.name} avatar={users.avatar}/>)

    return (
        <div className="stage" key={props.id}>
            {stageUsers}
        </div>
    )
}
