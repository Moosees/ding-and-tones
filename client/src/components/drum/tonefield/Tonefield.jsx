import React from 'react';
import { useSelector } from 'react-redux';

const Tonefield = ({
  color,
  handlePlay,
  hasFocus,
  isPlaying,
  localIndex,
  note,
  showNote,
  text,
}) => {
  const { isReady, position, scaleRotation } = useSelector(
    ({ howls, scale }) => ({
      isReady: howls.status[note] === 'ready',
      position: scale.parsed.positions[localIndex],
      scaleRotation: scale.info.rotation,
    })
  );

  const { rotate, translate } = position;
  const isDing = localIndex === 0;

  return (
    <g
      onClick={showNote && isReady ? handlePlay : null}
      cx="0"
      cy="0"
      opacity={isReady ? 1 : 0.5}
      transform={`rotate(${
        rotate + scaleRotation + 270
      }) translate(${translate})`}
      style={{
        fontSize: isDing ? '2.3px' : '1.5px',
        cursor: showNote ? 'pointer' : 'default',
      }}
    >
      <circle
        r={isDing ? '2.5' : '1.5'}
        stroke={color}
        strokeWidth={hasFocus ? '0.5' : '0.2'}
        fill={isPlaying ? '#ccc' : '#333'}
      />
      <text
        textAnchor="middle"
        dy="0.3em"
        fill={isPlaying ? '#333' : '#ccc'}
        transform={`rotate(-${rotate + scaleRotation + 270})`}
      >
        {text}
      </text>
    </g>
  );
};

export default Tonefield;
