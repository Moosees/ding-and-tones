import React from 'react';
import { connect } from 'react-redux';

const Tonefield = ({
  audioPath,
  color,
  hasFocus,
  isPlaying,
  localIndex,
  note,
  positionMap,
  showNote,
  text,
}) => {
  const { rotate, translate } = positionMap[localIndex];
  const isDing = localIndex === 0;

  const handlePlay = () => {
    new Audio(`${audioPath}/${note}.mp3`).play();
  };

  return (
    <g
      onClick={showNote ? handlePlay : null}
      cx="0"
      cy="0"
      transform={`rotate(${rotate + 90}) translate(${translate})`}
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
        transform={`rotate(-${rotate + 90})`}
      >
        {text}
      </text>
    </g>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  audioPath: drum.audioPath,
  positionMap: scale.ui.positionMap,
});

export default connect(mapStateToProps)(Tonefield);
