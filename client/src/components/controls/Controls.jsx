import React from 'react';
import { connect } from 'react-redux';
import Intervals from './intervals/Intervals';
import User from './user/User';

const Controls = ({ showIntervals }) => {
  return <>{showIntervals ? <Intervals /> : <User />}</>;
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps)(Controls);
