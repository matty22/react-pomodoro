import React from 'react';
import './ControlButton.css';

const controlButton = (props) => (
  <button className="controlButton" onClick={ props.action }>{ props.children }</button>
);

export default controlButton;