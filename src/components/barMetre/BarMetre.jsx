import React from 'react';
import { connect } from 'react-redux';
import { setBarMetre, setBarSubdivision } from '../../redux/bars/bars.actions';
import MetreControls from '../metreControls/MetreControls';

const BarMetre = ({ bar, bars, setBarSubdivision, setBarMetre }) => {
  const { barId } = bar;
  const { subdivision, metre } = bars[barId];

  return (
    <MetreControls
      metre={metre}
      subdivision={subdivision}
      setMetre={(metre, lengthInBars) =>
        setBarMetre(barId, metre, lengthInBars)
      }
      setSubdivision={(subdivision) => setBarSubdivision(barId, subdivision)}
    />
  );
};

const mapStateToProps = ({ bars }) => ({
  bars,
});

export default connect(mapStateToProps, {
  setBarSubdivision,
  setBarMetre,
})(BarMetre);
