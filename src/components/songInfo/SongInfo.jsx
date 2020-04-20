import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../metre.data';
import { toggleEditSong } from '../../redux/song/song.actions';
import PlayButton from '../playButton/PlayButton';
import SongControls from '../songControls/SongControls';

const SongInfo = ({ name, metre, bpm, isEditing, toggleEditSong }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {metreList[metre].name} @ {bpm} beats per minute{' '}
        <button onClick={toggleEditSong}>Edit</button>
        <PlayButton />
      </div>
      {isEditing && <SongControls />}
    </div>
  );
};

const mapStateToProps = ({ song }) => ({
  name: song.name,
  metre: song.metre,
  bpm: song.bpm,
  isEditing: song.isEditing,
});

export default connect(mapStateToProps, { toggleEditSong })(SongInfo);
