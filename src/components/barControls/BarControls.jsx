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
  const [, beatValue] = timeSignature.split('/');

  const handleTimeChange = (e) => {
    const [, newMinSubdivision] = e.target.value.split('/');

    setBarTime(barId, e.target.value);

    if (newMinSubdivision > subdivision) {
      setBarSubdivision(barId, newMinSubdivision);
    }
  };

  return (
    <div>
      <button>Copy to next</button>
      <button>Copy to end</button>
      {/* disable if bar is not linked */}
      <button disabled={true}>Unlink bar</button>
      <button onClick={() => deleteBarFromSong(arrangementId)}>
        Delete bar
      </button>
      <button onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}>
        Custom bar values
      </button>
      {isAdvancedOpen && (
        <>
          <label>
            Time signature:
            <select value={timeSignature} onChange={handleTimeChange}>
              <option value={'3/4'}>3/4</option>
              <option value={'4/4'}>4/4</option>
              <option value={'7/8'}>7/8</option>
            </select>
          </label>
          <label>
            Beat subdivision:
            <select
              value={subdivision}
              onChange={(e) => setBarSubdivision(barId, e.target.value)}
            >
              <option value={4} disabled={beatValue > 4}>
                4ths
              </option>
              <option value={8} disabled={beatValue > 8}>
                8ths
              </option>
              <option value={16} disabled={beatValue > 16}>
                16ths
              </option>
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
