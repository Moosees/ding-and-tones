import React from 'react';
import { connect } from 'react-redux';
import { setBarMetre, setBarSubdivision } from '../../redux/bars/bars.actions';
import MetreControls from '../metreControls/MetreControls';

const BarMetre = ({ bar, setBarSubdivision, setBarMetre }) => {
  const { barId, metre, subdivision } = bar;

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

export default connect(null, {
  setBarSubdivision,
  setBarMetre,
})(BarMetre);
