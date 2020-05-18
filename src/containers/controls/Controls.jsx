import React from 'react';
import { connect } from 'react-redux';
import { toggleShowIntervals } from '../../redux/drum/drum.actions';
import Intervals from '../intervals/Intervals';
import User from '../user/User';

const Controls = ({ showIntervals, toggleShowIntervals }) => {
  return (
    <div>
      <div>
        <button onClick={() => toggleShowIntervals(false)}>Controls</button>
        <button onClick={() => toggleShowIntervals(true)}>Intervals</button>
      </div>
      {showIntervals ? <Intervals /> : <User />}
    </div>
  );
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { toggleShowIntervals })(Controls);
