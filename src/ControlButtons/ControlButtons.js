import React from 'react';
import ControlButton from './ControlButton/ControlButton';

const controlButtons = (props) => (
  <div>
    <ControlButton action={ props.pause }>Pause</ControlButton>
    <ControlButton action={ props.start }>Start</ControlButton>
    <ControlButton action={ props.reset }>Reset</ControlButton>
  </div>
);

export default controlButtons;