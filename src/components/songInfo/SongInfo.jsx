import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../metre.data';
import { toggleEditSong } from '../../redux/ui/ui.actions';
import PlayButton from '../playButton/PlayButton';
import SongControls from '../songControls/SongControls';

const SongInfo = ({ name, metre, bpm, isEditingSong, toggleEditSong }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {metreList[metre].name} @ {bpm} beats per minute{' '}
        <button onClick={toggleEditSong}>Edit</button>
        <PlayButton />
      </div>
      {isEditingSong && <SongControls />}
    </div>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  name: song.name,
  metre: song.metre,
  bpm: song.bpm,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps, { toggleEditSong })(SongInfo);
