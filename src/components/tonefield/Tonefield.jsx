import React from 'react';
import { connect } from 'react-redux';
import { setDisplayedNote } from '../../redux/drum/drum.actions';

const Tonefield = ({
  color = '#000',
  text = '',
  note,
  isDing,
  position,
  showIntervals,
  setDisplayedNote,
}) => {
  const handlePlay = () => {
    new Audio('audio/rav/test.wav').play();
  };

  const handleIntervals = () => {
    setDisplayedNote(note);
  };

  return (
    <g
      onClick={showIntervals ? handleIntervals : handlePlay}
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
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { setDisplayedNote })(Tonefield);
