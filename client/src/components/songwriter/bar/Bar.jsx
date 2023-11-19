import React, { useMemo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { createBarTemplate } from '../../../assets/metre';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import Beat from '../beat/Beat';
import EditSubdivisions from '../editSubdivisions/EditSubdivisions';
import { BarContainer, Beats } from './bar.styles';

const Bar = ({ barId, barIndex }) => {
  const { metre, measure, subdivisions, isPlaying, isMuted } = useSelector(
    ({ song, ui }) => ({
      metre: song.bars[barId].metre,
      measure: song.bars[barId].measure,
      subdivisions: song.bars[barId].subdivisions,
      isPlaying: ui.currentBar === barId,
      isMuted: ui.mutedBars[barId] && ui.mutedBars[barId] === true,
    }),
    shallowEqual
  );

  const [editSubdivisionsOpen, setEditSubdivisionsOpen] = useState(false);

  const barTemplate = useMemo(() => {
    return createBarTemplate(metre, subdivisions);
  }, [metre, subdivisions]);

  return (
    <BarContainer>
      <BarInfo barId={barId} barIndex={barIndex} />
      <Beats isMuted={isMuted} isPlaying={isPlaying}>
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
            (editSubdivisionsOpen) => !editSubdivisionsOpen
          )
        }
      />
    </BarContainer>
  );
};

export default Bar;
