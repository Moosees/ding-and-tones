import React from 'react';

const Tonefield = ({ color = "black", tone, isDing, position }) => (
  <circle
    onClick={() => console.log({ tone, position })}
    r={isDing ? '2.5' : '2'}
    cx="0"
    cy="0"
    fill={color}
    transform={isDing ? '' : `rotate(90) rotate(${position}) translate(7)`}
  />
);

export default Tonefield;
