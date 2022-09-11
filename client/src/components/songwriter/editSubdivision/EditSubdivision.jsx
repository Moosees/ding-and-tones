import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBarSubdivision } from '../../../redux/song/song.actions';
import Subdivision from '../../shared/metreControls/Subdivision';
import { EditSubdivisionContainer } from './editSubdivision.styles';

const EditSubdivision = ({ barId }) => {
  const dispatch = useDispatch();
  const { metre, subdivision } = useSelector(({ song }) => song.bars[barId]);

  const handleSetSubdivision = (value, beatIndex) => {
    const newSubdivision = [...subdivision];
    newSubdivision[beatIndex] = value;

    dispatch(updateBarSubdivision(barId, newSubdivision));
  };

  return (
    <EditSubdivisionContainer>
      {subdivision.map((beat, i) => (
        <Subdivision
          small
          type="beat"
          key={i}
          beatIndex={i}
          metre={metre}
          setSubdivision={(value) => handleSetSubdivision(value, i)}
          subdivision={beat}
        />
      ))}
    </EditSubdivisionContainer>
  );
};

export default EditSubdivision;
