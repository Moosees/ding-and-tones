import React from 'react';
import { connect } from 'react-redux';
import {
  toggleIsEditing,
  toggleShowIntervals,
} from '../../redux/scale/scale.actions';

const DrumInfo = ({
  name,
  isEditing,
  showIntervals,
  toggleIsEditing,
  toggleShowIntervals,
}) => {
  return (
    <div>
      <h2>{name}</h2>
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
    </div>
  );
};

const mapStateToProps = ({ scale }) => ({
  name: scale.name,
  isEditing: scale.isEditing,
  showIntervals: scale.showIntervals,
});

export default connect(mapStateToProps, {
  toggleIsEditing,
  toggleShowIntervals,
})(DrumInfo);
