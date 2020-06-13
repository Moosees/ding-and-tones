import React from 'react';
import { connect } from 'react-redux';
import { copyBarToEnd, deleteBar } from '../../redux/bars/bars.actions';

const BarControls = ({ barId, copyBarToEnd, deleteBar }) => {
  return (
    <div>
      <button onClick={() => copyBarToEnd(barId)}>Duplicate</button>
      <button onClick={() => deleteBar(barId)}>Delete</button>
    </div>
  );
};

export default connect(null, {
  copyBarToEnd,
  deleteBar,
})(BarControls);
