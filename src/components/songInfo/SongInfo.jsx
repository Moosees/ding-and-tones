import React, { useState } from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../metre.data';
import PlayButton from '../playButton/PlayButton';
import SongControls from '../songControls/SongControls';

const SongInfo = ({ name, metre, bpm }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h2>{name}</h2>
      <div>
        {metreList[metre].name} @ {bpm} beats per minute{' '}
        <button onClick={handleClick}>Edit</button>
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
});

export default connect(mapStateToProps)(SongInfo);
