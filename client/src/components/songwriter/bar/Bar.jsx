import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { createBarTemplate } from '../../../assets/metre';
import { selectIsBarPlaying } from '../../../redux/song/song.selectors';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import Beat from '../beat/Beat';
import EditSubdivisions from '../editSubdivisions/EditSubdivisions';
import { BarContainer, Beats } from './bar.styles';

const Bar = ({ barId, barIndex }) => {
  const metre = useSelector(({ song }) => song.bars[barId].metre);
  const measure = useSelector(({ song }) => song.bars[barId].measure);
  const subdivisions = useSelector(({ song }) => song.bars[barId].subdivisions);
  const mutedBars = useSelector(({ song }) => song.mutedBars);
  const isPlaying = useSelector((state) => selectIsBarPlaying(state, barId));

  const isMuted = mutedBars[barId] && mutedBars[barId] === true;

  const [editSubdivisionsOpen, setEditSubdivisionsOpen] = useState(false);

  const barTemplate = useMemo(() => {
    return createBarTemplate(metre, subdivisions);
  }, [metre, subdivisions]);

  return (
    <BarContainer>
      <BarInfo barId={barId} barIndex={barIndex} />
      <Beats $isPlaying={isPlaying}>
        {measure.map((beatId, i) => (
          <Beat
            key={beatId}
            isMuted={isMuted}
            beatId={beatId}
            template={barTemplate[i]}
            editSubdivisionsOpen={editSubdivisionsOpen}
          />
        ))}
      </Beats>
      {editSubdivisionsOpen && <EditSubdivisions barId={barId} />}
      <BarControls
        barId={barId}
        toggleEditSubdivisions={() =>
          setEditSubdivisionsOpen(
            (editSubdivisionsOpen) => !editSubdivisionsOpen,
          )
        }
      />
    </BarContainer>
  );
};

export default Bar;
