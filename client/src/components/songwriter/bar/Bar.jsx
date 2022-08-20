import React from 'react';
import { connect } from 'react-redux';
import { createBarTemplate } from '../../../assets/metre';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import Beat from '../beat/Beat';
import { BarContainer, Beats } from './bar.styles';

const Bar = ({
  barId,
  bars,
  currentBar,
  index,
  isSongPlaying,
  moveBar,
  mutedBars,
}) => {
  const { measure, metre, subdivision } = bars[barId];
  const isMuted = mutedBars[barId];

  const barTemplate = createBarTemplate(metre, subdivision);
  console.log({ barTemplate, measure });

  return (
    <BarContainer>
      <BarInfo barId={barId} index={index} />
      <Beats isMuted={isMuted} isPlaying={barId === currentBar}>
        {measure.map((beatId, i) => (
          <Beat
            key={beatId}
            isMuted={isMuted}
            beatId={beatId}
            template={barTemplate[i]}
          />
        ))}
      </Beats>
      <BarControls barId={barId} />
    </BarContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
  currentBar: ui.currentBar,
  isSongPlaying: ui.isSongPlaying,
  mutedBars: ui.mutedBars,
});

export default connect(mapStateToProps)(Bar);
