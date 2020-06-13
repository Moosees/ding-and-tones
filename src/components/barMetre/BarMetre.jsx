import React from 'react';
import { connect } from 'react-redux';
import { setBarSubdivision } from '../../redux/bars/bars.actions';
import MetreControls from '../metreControls/MetreControls';

const BarMetre = ({ barId, bars, setBarSubdivision }) => {
  const { metre, subdivision } = bars[barId];

  return (
    <MetreControls
      metre={metre}
      subdivision={subdivision}
      setSubdivision={(subdivision) => setBarSubdivision(barId, subdivision)}
    />
  );
};

const mapStateToProps = ({ bars }) => ({
  bars: bars.bars,
});

export default connect(mapStateToProps, {
  setBarSubdivision,
})(BarMetre);
