import React from 'react';

const Tonefield = ({ color = '#000', text = '', note, isDing, position }) => (
  <g
    onClick={() => console.log({ note })}
    cx="0"
    cy="0"
    transform={isDing ? '' : `rotate(${position + 90}) translate(7)`}
    style={{ fontSize: isDing ? '0.35rem' : '0.25rem', cursor: 'pointer' }}
  >
    <circle r={isDing ? '2.5' : '2'} fill={color} />
    <text
      textAnchor="middle"
      dy="0.3em"
      fill="#ccc"
      transform={isDing ? '' : `rotate(-${position + 90})`}
    >
      {text}
    </text>
  </g>
);

export default Tonefield;
