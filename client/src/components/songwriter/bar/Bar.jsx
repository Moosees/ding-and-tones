import React, { useState } from 'react';
import { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { createBarTemplate } from '../../../assets/metre';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import Beat from '../beat/Beat';
import EditSubdivisions from '../editSubdivisions/EditSubdivisions';
import { BarContainer, Beats } from './bar.styles';

const Bar = ({ barId, barIndex }) => {
  const [editSubdivisionsOpen, setEditSubdivisionsOpen] = useState(false);
  const { isPlaying, isMuted } = useSelector(
    ({ ui }) => ({
      isPlaying: ui.currentBar === barId,
      isMuted: ui.mutedBars[barId] && ui.mutedBars[barId] === true,
    }),
    shallowEqual
  );
  const { metre, measure, subdivisions } = useSelector(
    ({ song }) => song.bars[barId]
  );

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
        toggleEditSubdivisions={() => setEditSubdivisionsOpen((val) => !val)}
      />
    </BarContainer>
  );
};

export default Bar;
