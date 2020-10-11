import React from 'react';
import { connect } from 'react-redux';

const Bar = ({ barId, bars }) => {
  const { metre, subdivision, lengthInBeats, measure } = bars[barId];

  return <div>{measure.join(' ')}</div>;
};

const mapStateToProps = ({ song }) => ({
  bars: song.bars,
});

export default connect(mapStateToProps)(Bar);
