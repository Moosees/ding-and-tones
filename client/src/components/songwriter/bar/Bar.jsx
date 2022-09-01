import React, { useState } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createBarTemplate } from '../../../assets/metre';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import Beat from '../beat/Beat';
import EditSubdivision from '../editSubdivision/EditSubdivision';
import { BarContainer, Beats } from './bar.styles';

const Bar = ({ barId, index, moveBar }) => {
  const [editSubdivisionOpen, setEditSubdivisionOpen] = useState(false);
  const { measure, metre, subdivision, isPlaying, isMuted } = useSelector(
    ({ song, ui }) => ({
      measure: song.bars[barId].measure,
      metre: song.bars[barId].metre,
      subdivision: song.bars[barId].subdivision,
      isPlaying: ui.currentBar === barId,
      isMuted: ui.mutedBars[barId],
    })
  );

  const barTemplate = useMemo(
    () => createBarTemplate(metre, subdivision),
    [metre, subdivision]
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
          />
        ))}
      </Beats>
      {editSubdivisionOpen && (
        <EditSubdivision barId={barId} subdivision={subdivision} />
      )}
      <BarControls
        barId={barId}
        toggleEditSubdivision={() => setEditSubdivisionOpen((val) => !val)}
      />
    </BarContainer>
  );
};

export default Bar;
