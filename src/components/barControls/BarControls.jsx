import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setBpm } from '../../redux/song/song.actions';

const BarControls = () => {
  const [customTime, setCustomTime] = useState(false);
  const [customGrid, setCustomGrid] = useState(false);

  return (
    <div>
      <button onClick={() => setCustomTime(!customTime)}>
        Custom time signature
      </button>
      {customTime && (
        <label>
          Time signature:
          <select value={'3/4'} onChange={(e) => console.log(e.target.value)}>
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
          <select value={8} onChange={(e) => console.log(e.target.value)}>
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
const mapStateToProps = ({ song }) => ({
  bpm: song.bpm,
});

export default connect(mapStateToProps, { setBpm })(BarControls);
