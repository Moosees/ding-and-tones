import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setBarSubdivision, setBarTime } from '../../redux/bars/bars.actions';
import { deleteBarFromSong } from '../../redux/song/song.actions';

const BarControls = ({
  bar,
  bars,
  setBarSubdivision,
  setBarTime,
  deleteBarFromSong,
}) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const { barId, arrangementId } = bar;
  const { subdivision, timeSignature } = bars[barId];

  const handleDelete = () => {
    deleteBarFromSong(arrangementId);
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
            Beat subdivision:
            <select
              value={subdivision}
              onChange={(e) => setBarSubdivision(barId, e.target.value)}
            >
              <option value={4}>4ths</option>
              <option value={8}>8ths</option>
              <option value={16}>16ths</option>
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
  setBarSubdivision,
  setBarTime,
  deleteBarFromSong,
})(BarControls);
