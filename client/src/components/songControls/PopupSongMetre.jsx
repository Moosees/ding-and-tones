import React from 'react';
import { connect } from 'react-redux';
import { addNewBar } from '../../redux/bars/bars.actions';
import { updateSongInfo } from '../../redux/song/song.actions';
import MetreControls from '../metreControls/MetreControls';
import Popup from '../popup/Popup';

const PopupSongMetre = ({
  handleNewBar,
  metre,
  onClose,
  subdivision,
  updateSongInfo,
}) => {
  return (
    <Popup onClose={onClose}>
      <MetreControls
        metre={metre}
        subdivision={subdivision}
        setMetre={(value) => updateSongInfo({ metre: value })}
        setSubdivision={(value) => updateSongInfo({ subdivision: value })}
        onClick={() => handleNewBar(metre, subdivision)}
      />
    </Popup>
  );
};

const mapStateToProps = ({ song }) => ({
  subdivision: song.subdivision,
  metre: song.metre,
});

export default connect(mapStateToProps, {
  addNewBar,
  updateSongInfo,
})(PopupSongMetre);
