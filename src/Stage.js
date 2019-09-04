import React from 'react';

export default function Stage(props) {
    return (
        <div className="user-info" key={props.id}>
            <div className="user-name">
                {props.name}
            </div>
            <div className="volume-line"></div>
            <i className="fas fa-volume-up"></i>
            <i className="fas fa-search"></i>
            <div className="user-avatar">
                <img src={props.avatar} alt ="user avatar"/>
            </div>
        </div>
    )
}