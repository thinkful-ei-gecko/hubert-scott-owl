import React from 'react';

export default function CurrentUser(props) {
    return (
        <div className="current-user">
            <div className="volume-line"></div>
            <div className="user-avatar">
                <img src={props.avatar} alt="user avatar"/>
            </div>
        </div>
    );
}