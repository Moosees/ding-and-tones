import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  toggleIsEditing,
  toggleShowIntervals,
} from '../../redux/drum/drum.actions';
import EditScale from '../editScale/EditScale';
import Legend from '../legend/Legend';

const DrumInfo = ({
  name,
  displayedChord,
  isEditing,
  showIntervals,
  toggleIsEditing,
  toggleShowIntervals,
}) => {
  const [legendOpen, setLegendOpen] = useState(false);

  // this is a mess!
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setLegendOpen(!legendOpen)}>Show legend</button>
      {!displayedChord && (
        <div>
          <button onClick={toggleIsEditing}>
            {isEditing ? 'Stop editing' : 'Edit scale'}
          </button>
          {isEditing ? (
            <EditScale />
          ) : (
            <button onClick={toggleShowIntervals}>
              {showIntervals ? 'Show notes' : 'Show intervals'}
            </button>
          )}
        </div>
      )}
      {legendOpen && <Legend />}
    </div>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  displayedChord: drum.displayedChord,
  isEditing: drum.isEditing,
  showIntervals: drum.showIntervals,
  name: scale.name,
});

export default connect(mapStateToProps, {
  toggleIsEditing,
  toggleShowIntervals,
})(DrumInfo);
