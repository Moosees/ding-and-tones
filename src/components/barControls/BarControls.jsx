import React from 'react';
import { connect } from 'react-redux';
import { copyBarToEnd, deleteBar } from '../../redux/bars/bars.actions';

const BarControls = ({ bar, copyBarToEnd, deleteBar }) => {
  return (
    <div>
      <button onClick={() => copyBarToEnd(bar)}>Duplicate</button>
      <button onClick={() => deleteBar(bar)}>Delete</button>
    </div>
  );
};

export default connect(null, {
  copyBarToEnd,
  deleteBar,
})(BarControls);
