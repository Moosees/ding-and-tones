import React from 'react';
import { useSelector } from 'react-redux';
import { getNoteLabelFromName } from '../../../assets/intervals';

const MiniTonefield = ({ isDing, note, position, sharpNotes, showNote }) => {
  const { scaleRotation } = useSelector(({ scale }) => ({
    scaleRotation: scale.info.rotation,
  }));

  const { rotate, translate } = position;

  return (
    <g
      cx="0"
      cy="0"
      transform={`rotate(${
        rotate + scaleRotation + 270
      }) translate(${translate})`}
      style={{
        fontSize: isDing ? '2.3' : '1.4',
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
        transform={`rotate(-${rotate + scaleRotation + 270})`}
      >
        {showNote ? getNoteLabelFromName(note, sharpNotes) : ''}
      </text>
    </g>
  );
};

export default MiniTonefield;
