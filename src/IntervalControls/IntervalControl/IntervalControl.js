import React from 'react';
import './IntervalControl.css';
import './IntervalControl.css';

const intervalControl = (props) => (
  <div className="intervalControl">
    <button onClick={ props.subtract } 
            className={ props.enabled ? 'activeButton' : 'inactiveButton' }>-</button>
    <p>{ props.display / 60 < 10 ? '0' + props.display / 60 : props.display / 60 }:00</p>
    <button onClick={ props.add } 
            className={ props.enabled ? 'activeButton' : 'inactiveButton' }>+</button>
  </div>
);

export default intervalControl;