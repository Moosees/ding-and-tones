import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { BarInfoContainer } from './barInfo.styles';
import BtnIcon from '../../shared/button/Icon';

const BarControls = ({
  arrangement,
  barId,
  bars,
  beats,
  index,
  isEditingSong,
}) => {
  const { metre } = bars[barId];

  return (
    <BarInfoContainer>
      <BtnIcon icon="navigate_before" />
      <span>
        Bar: {index + 1}/{arrangement.length} - Metre:{' '}
        {metreList[metre].nameShort}
      </span>
      <BtnIcon icon="navigate_next" />
    </BarInfoContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  arrangement: song.arrangement,
  bars: song.bars,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps)(BarControls);
