import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setBarGrid, setBarTime } from '../../redux/bars/bars.actions';
import { deleteBarFromSong } from '../../redux/song/song.actions';

const BarControls = ({
  bar,
  bars,
  setBarGrid,
  setBarTime,
  deleteBarFromSong,
}) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const { barId, arrangementId } = bar;
  const { gridValue, timeSignature } = bars[barId];

  const handleDelete = () => {
    deleteBarFromSong(arrangementId)
  };

  return (
    <div>
      <button>Copy to next</button>
      <button>Copy to end</button>
      {/* disable if bar is not linked */}
      <button disabled={true}>Unlink bar</button>
      <button onClick={handleDelete}>Delete bar</button>
      <button onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}>
        Custom bar values
      </button>
      {isAdvancedOpen && (
        <>
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
        </>
      )}
    </div>
  );
};
const mapStateToProps = ({ bars }) => ({
  bars,
});

export default connect(mapStateToProps, {
  setBarGrid,
  setBarTime,
  deleteBarFromSong,
})(BarControls);
