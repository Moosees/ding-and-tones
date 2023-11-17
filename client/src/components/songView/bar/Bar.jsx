import React from 'react';
import { useSelector } from 'react-redux';
import { createBarTemplate, metreList } from '../../../assets/metre';
import Beats from '../beats/Beats';
import { BarMetre, BeatGroup } from './bar.styles';

const Bar = ({ barId, prevBar }) => {
  const { metre, subdivisions, measure, previousBar } = useSelector(
    ({ song }) => ({
      metre: song.bars[barId].metre,
      subdivisions: song.bars[barId].subdivisions,
      measure: song.bars[barId].measure,
      previousBar: song.bars[prevBar],
    })
  );

  const prevBarMetre = previousBar?.metre;
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

export default Bar;
