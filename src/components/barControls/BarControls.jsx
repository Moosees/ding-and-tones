import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setBarGrid, setBarTime } from '../../redux/bars/bars.actions';

const BarControls = ({ barId, bars, setBarGrid, setBarTime }) => {
  const [customTime, setCustomTime] = useState(false);
  const [customGrid, setCustomGrid] = useState(false);

  const { gridValue, timeSignature } = bars[barId];

  return (
    <div>
      <button onClick={() => setCustomTime(!customTime)}>
        Custom time signature
      </button>
      {customTime && (
        <label>
          Time signature:
          <select
            value={timeSignature}
            onChange={(e) => setBarTime(barId, e.target.value)}
          >
            <option value={'4/4'}>4/4</option>
            <option value={'3/4'}>3/4</option>
          </select>
        </label>
      )}
      <button onClick={() => setCustomGrid(!customGrid)}>
        Custom grid value
      </button>
      {customGrid && (
        <label>
          Grid value:
          <select
            value={gridValue}
            onChange={(e) => setBarGrid(barId, e.target.value)}
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={16}>16</option>
          </select>
        </label>
      )}
      <button>Copy bar</button>
      <button>Unlink bar</button>
      <button>Delete bar</button>
    </div>
  );
};
const mapStateToProps = ({ bars }) => ({
  bars,
});

export default connect(mapStateToProps, { setBarGrid, setBarTime })(
  BarControls
);
