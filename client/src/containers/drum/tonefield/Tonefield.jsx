import React from 'react';
import { connect } from 'react-redux';
import { setDisplayedNote } from '../../../redux/drum/drum.actions';

const Tonefield = ({
  audioPath,
  color,
  displayedChord,
  hasFocus,
  isDing,
  note,
  noteIndex,
  position,
  setDisplayedNote,
  showIntervals,
  showNote,
  text,
}) => {
  const { rotate, translate } = position;

  const handlePlay = () => {
    new Audio(`${audioPath}/${note}.mp3`).play();
  };

  const handleIntervals = () => {
    setDisplayedNote(noteIndex);
  };

  return (
    <g
      onClick={
        !showIntervals ? handlePlay : displayedChord ? null : handleIntervals
      }
      cx="0"
      cy="0"
      transform={`rotate(${rotate}) translate(${translate})`}
      style={{
        fontSize: isDing ? '0.23rem' : '0.14rem',
        cursor:
          showNote && !(displayedChord && showIntervals)
            ? 'pointer'
            : 'default',
      }}
    >
      <circle
        r={isDing ? '2.5' : '1.5'}
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
  audioPath: drum.audioPath,
  displayedChord: drum.displayedChord,
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { setDisplayedNote })(Tonefield);
