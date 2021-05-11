import React from 'react';

const MiniTonefield = ({ isDing, note, position, text = 'A2' }) => {
  const { rotate, translate } = position;

  return (
    <g
      cx="0"
      cy="0"
      transform={`rotate(${rotate + 90}) translate(${translate})`}
      style={{
        fontSize: isDing ? '2.3px' : '1.5px',
        cursor: 'default',
      }}
    >
      <circle
        r={isDing ? '2.5' : '1.5'}
        stroke="#000"
        strokeWidth="0.2"
        fill="none"
      />
      <text
        textAnchor="middle"
        dy="0.3em"
        fill="#000"
        transform={`rotate(-${rotate + 90})`}
      >
        {text}
      </text>
    </g>
  );
};

export default MiniTonefield;
