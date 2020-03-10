import React from 'react';

const Tonefield = ({ color = 'black', note, isDing, position }) => (
  <circle
    onClick={() => console.log({ note })}
    r={isDing ? '2.5' : '2'}
    cx="0"
    cy="0"
    fill={color}
    transform={isDing ? '' : `rotate(90) rotate(${position}) translate(7)`}
  />
);

export default Tonefield;
