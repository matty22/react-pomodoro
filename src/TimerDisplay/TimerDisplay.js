import React from 'react';
import './TimerDisplay.css';

const timerDisplay = (props) => (
  <div className='timerDisplay'>
    { Math.floor(props.value / 60) < 10 ? '0' + Math.floor(props.value / 60) : Math.floor(props.value / 60) }:
    { props.value % 60 < 10 ? '0' + props.value % 60 : props.value % 60 }
  </div>
);


export default timerDisplay;