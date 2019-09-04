import React from 'react';

export default function Stage(props) {
    return (
        <div className="user-info" key={props.id}>
            <div className="name-volume-block">
                <h3 className="user-name">
                    {props.name}
                </h3>
                <div className="volume-line"></div>
                <i className="fas fa-volume-up"></i>
                <i className="fas fa-search"></i>
                <img src={props.avatar} alt="user avatar" className="stage-avatar" />
            </div>
        </div>
    )
}