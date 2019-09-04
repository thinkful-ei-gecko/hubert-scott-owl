import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ParticipantList from './ParticipantList';
import participants from './STORE';


ReactDOM.render(<ParticipantList participants = {participants}/>, document.getElementById('root'));