import React from 'react';

const Smurf = ({ props }) => {
  return (
    <div className="smurf-container">
      <h2 className="smurf-name">{props.name}</h2>
      <p className="smurf-age">Age: {props.age}</p>
      <p className="smurf-height">Height: {props.height}</p>
    </div>
  );
};

export default Smurf;