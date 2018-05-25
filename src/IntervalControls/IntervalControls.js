import React from 'react';
import IntervalControl from './IntervalControl/IntervalControl';
import './IntervalControls.css';

const intervalControls = (props) => (
  <section className="intervalControls">
    <div>
      <p>Total Time</p>
      <IntervalControl display={ props.originalWork } 
                       add={ props.addWork } 
                       subtract={ props.subtractWork } />
    </div>
    <div>
      <p>Break Time</p>
      <IntervalControl display={ props.originalBreak } 
                       add={ props.addBreak }
                       subtract={ props.subtractBreak } />
    </div>
  </section>
);

export default intervalControls;