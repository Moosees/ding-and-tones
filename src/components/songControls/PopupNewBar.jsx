import React from 'react';
import MetreControls from '../metreControls/MetreControls';
import { connect } from 'react-redux';
import { addNewBar } from '../../redux/bars/bars.actions';
import {
  setSongMetre,
  setSongSubdivision,
} from '../../redux/song/song.actions';
import Popup from '../popup/Popup';

const PopupNewBar = ({
  handleNewBar,
  metre,
  onClose,
  subdivision,
  setSongMetre,
  setSongSubdivision,
}) => {
  return (
    <Popup onClose={onClose}>
      <MetreControls
        metre={metre}
        subdivision={subdivision}
        setMetre={setSongMetre}
        setSubdivision={setSongSubdivision}
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
  setSongSubdivision,
  setSongMetre,
})(PopupNewBar);
