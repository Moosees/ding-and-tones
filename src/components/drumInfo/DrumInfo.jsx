import React from 'react';
import { connect } from 'react-redux';
import {
  toggleIsEditing,
  toggleShowIntervals,
} from '../../redux/drum/drum.actions';

const DrumInfo = ({
  name,
  displayedChord,
  isEditing,
  showIntervals,
  toggleIsEditing,
  toggleShowIntervals,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      {!displayedChord && (
        <div>
          <button onClick={toggleIsEditing}>
            {isEditing ? 'Stop editing' : 'Edit scale'}
          </button>
          {!isEditing && (
            <button onClick={toggleShowIntervals}>
              {showIntervals ? 'Show notes' : 'Show intervals'}
            </button>
          )}
        </div>
      )}
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
