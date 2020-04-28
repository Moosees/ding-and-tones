import React from 'react';
import { connect } from 'react-redux';
import { setDisplayedNote } from '../../redux/drum/drum.actions';

const Tonefield = ({
  color,
  text,
  noteIndex,
  isDing,
  hasFocus,
  position,
  showIntervals,
  setDisplayedNote,
}) => {
  const { rotate, translate } = position;

  const handlePlay = () => {
    new Audio('audio/rav/test.wav').play();
  };

  const handleIntervals = () => {
    setDisplayedNote(noteIndex);
  };

  return (
    <g
      onClick={showIntervals ? handleIntervals : handlePlay}
      cx="0"
      cy="0"
      transform={`rotate(${rotate}) translate(${translate})`}
      style={{
        fontSize: isDing ? '0.35rem' : '0.25rem',
        cursor: 'pointer',
      }}
    >
      <circle
        r={isDing ? '2.5' : '2'}
        stroke={color}
        strokeWidth={hasFocus ? '0.5' : '0.2'}
        fill="#333"
      />
      <text
        textAnchor="middle"
        dy="0.3em"
        fill="#ccc"
        transform={`rotate(-${rotate + 90})`}
      >
        {text}
      </text>
    </g>
  );
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { setDisplayedNote })(Tonefield);
