import React, { useState } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createBarTemplate } from '../../../assets/metre';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import Beat from '../beat/Beat';
import EditSubdivisions from '../editSubdivisions/EditSubdivisions';
import { BarContainer, Beats } from './bar.styles';

const Bar = ({ barId, index, moveBar }) => {
  const [editSubdivisionsOpen, setEditSubdivisionsOpen] = useState(false);
  const { measure, metre, subdivisions, isPlaying, isMuted } = useSelector(
    ({ song, ui }) => ({
      measure: song.bars[barId].measure,
      metre: song.bars[barId].metre,
      subdivisions: song.bars[barId].subdivisions,
      isPlaying: ui.currentBar === barId,
      isMuted: ui.mutedBars[barId],
    })
  );

  const barTemplate = useMemo(
    () => createBarTemplate(metre, subdivisions),
    [metre, subdivisions]
  );
  console.log({ measure });

  return (
    <BarContainer>
      <BarInfo barId={barId} index={index} />
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
      {editSubdivisionsOpen && (
        <EditSubdivisions barId={barId} />
      )}
      <BarControls
        barId={barId}
        toggleEditSubdivisions={() => setEditSubdivisionsOpen((val) => !val)}
      />
    </BarContainer>
  );
};

export default Bar;
