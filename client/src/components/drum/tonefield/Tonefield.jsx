import React from 'react';
import { connect } from 'react-redux';

const Tonefield = ({
  color,
  handlePlay,
  hasFocus,
  isPlaying,
  localIndex,
  positionMap,
  scaleRotation,
  showNote,
  text,
}) => {
  const { rotate, translate } = positionMap[localIndex];
  const isDing = localIndex === 0;

  return (
    <g
      onClick={showNote ? handlePlay : null}
      cx="0"
      cy="0"
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

const mapStateToProps = ({ scale }) => ({
  positionMap: scale.parsed.positions,
  scaleRotation: scale.info.rotation,
});

export default connect(mapStateToProps)(Tonefield);
