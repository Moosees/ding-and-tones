import React from 'react';
import { connect } from 'react-redux';
import { createBarTemplate, metreList } from '../../../assets/metre';
import Beats from '../beats/Beats';
import { BarMetre, BeatGroup } from './bar.styles';

const Bar = ({ barId, bars, prevBar }) => {
  const { metre, subdivisions, measure } = bars[barId];
  const prevBarMetre = prevBar ? bars[prevBar].metre : null;
  const { nameShort } = metreList[metre];

  const barTemplate = createBarTemplate(metre, subdivisions);

  const beatsGrouped = barTemplate.reduce((acc, beat, i) => {
    const beatData = { ...beat, beatId: measure[i], barStart: i === 0 };

    if (!acc[beatData.group]) {
      return [...acc, [beatData]];
    }

    acc[beatData.group] = [...acc[beatData.group], beatData];
    return acc;
  }, []);

  return beatsGrouped.map((group, i) => {
    const newMetre = i === 0 && (!prevBarMetre || prevBarMetre !== metre);
    return (
      <BeatGroup key={i} newMetre={newMetre}>
        {newMetre && (
          <BarMetre>
            {nameShort.split('/').map((substring, i) => (
              <span key={i}>{substring}</span>
            ))}
          </BarMetre>
        )}
        <Beats key={i} group={group} />
      </BeatGroup>
    );
  });
};

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
});

export default connect(mapStateToProps)(Bar);
