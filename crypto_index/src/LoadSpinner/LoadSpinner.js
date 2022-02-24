import React from 'react';
import './LoadSpinner.css';

function LoadSpinner() {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default LoadSpinner;
