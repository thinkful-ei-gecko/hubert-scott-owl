import React from 'react';
import ParticipantList from './ParticipantList';
import StageList from './StageList';
import participants from './STORE';
import './App.css';

function App() {
  return (
    <main className='App'>
      <ParticipantList participants = {participants}/>
      <StageList stage = {participants}/>
    </main>
  );
}

export default App;
