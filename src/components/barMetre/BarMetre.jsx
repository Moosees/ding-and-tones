import React from 'react';
import { connect } from 'react-redux';
import { setBarMetre, setBarSubdivision } from '../../redux/bars/bars.actions';
import MetreControls from '../metreControls/MetreControls';

const BarMetre = ({ bar, barData, setBarSubdivision, setBarMetre }) => {
  const { metre, subdivision } = barData[bar];

  return (
    <MetreControls
      metre={metre}
      subdivision={subdivision}
      setMetre={(metre, lengthInBars) => setBarMetre(bar, metre, lengthInBars)}
      setSubdivision={(subdivision) => setBarSubdivision(bar, subdivision)}
    />
  );
};

const mapStateToProps = ({ bars }) => ({
  barData: bars.data,
});

export default connect(mapStateToProps, {
  setBarSubdivision,
  setBarMetre,
})(BarMetre);
