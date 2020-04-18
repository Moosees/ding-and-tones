import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setBarSubdivision, setBarMetre } from '../../redux/bars/bars.actions';
import { deleteBarFromSong } from '../../redux/song/song.actions';
import MetreControls from '../metreControls/MetreControls';

const BarControls = ({
  bar,
  bars,
  setBarSubdivision,
  setBarMetre,
  deleteBarFromSong,
}) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const { barId, arrangementId } = bar;
  const { subdivision, metre } = bars[barId];

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
        <MetreControls
          metre={metre}
          subdivision={subdivision}
          setMetre={(metre, lengthInBars) =>
            setBarMetre(barId, metre, lengthInBars)
          }
          setSubdivision={(subdivision) =>
            setBarSubdivision(barId, subdivision)
          }
        />
      )}
    </div>
  );
};
const mapStateToProps = ({ bars }) => ({
  bars,
});

export default connect(mapStateToProps, {
  setBarSubdivision,
  setBarMetre,
  deleteBarFromSong,
})(BarControls);
