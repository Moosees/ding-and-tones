import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createBarTemplate, metreList } from '../../../assets/metre';
import Beats from '../beats/Beats';
import { BarDivider, BarMetre } from './bar.styles';

const Bar = ({ barId, barMetreOffset, bars, prevBar }) => {
  const { metre, subdivisions, measure } = bars[barId];
  const prevBarMetre = prevBar ? bars[prevBar].metre : null;
  const { nameShort } = metreList[metre];

  const barTemplate = createBarTemplate(metre, subdivisions);

  const beatsGrouped = barTemplate.reduce((acc, beat, i) => {
    const beatData = { ...beat, beatId: measure[i] };

    if (!acc[beatData.group]) {
      return [...acc, [beatData]];
    }

    acc[beatData.group] = [...acc[beatData.group], beatData];
    return acc;
  }, []);
  console.log({ measure, barTemplate, beatsGrouped });

  return (
    <>
      {(!prevBarMetre || prevBarMetre !== metre) && (
        <BarMetre offset={barMetreOffset}>
          {nameShort.split('/').map((substring, i) => (
            <span key={i}>{substring}</span>
          ))}
        </BarMetre>
      )}
      {beatsGrouped.map((group, i) => (
        <Beats key={i} group={group} />
      ))}
      <BarDivider />
    </>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
  barMetreOffset: ui.barMetreOffset,
});

export default connect(mapStateToProps)(Bar);
