import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBarSubdivisions } from '../../../redux/song/song.slice';
import Subdivision from '../../shared/metreControls/Subdivision';
import { EditSubdivisionsContainer } from './editSubdivisions.styles';

const EditSubdivisions = ({ barId }) => {
  const dispatch = useDispatch();
  const metre = useSelector(({ song }) => song.bars[barId].metre);
  const subdivisions = useSelector(({ song }) => song.bars[barId].subdivisions);

  const handleSetSubdivision = (value, beatIndex) => {
    const newSubdivisions = [...subdivisions];
    newSubdivisions[beatIndex] = parseInt(value);

    dispatch(updateBarSubdivisions({ barId, newSubdivisions }));
  };

  return (
    <EditSubdivisionsContainer>
      {subdivisions.map((beat, i) => (
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
    </EditSubdivisionsContainer>
  );
};

export default EditSubdivisions;
