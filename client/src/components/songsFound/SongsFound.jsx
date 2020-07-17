import React from 'react';
import { connect } from 'react-redux';
import { difficultyByValue } from '../../assets/constants';
import { metreList } from '../../assets/metre';
import { DeleteIcon, SongContainer, SongList } from './songsFound.styles';

const SongsFound = ({ isSearching, isSignedIn, songs }) => {
  const getSongs = () =>
    songs.map((song, i) => {
      const { title, composer, scale, difficulty, metre, isOwner } = song;

      return (
        <SongContainer key={i}>
          {isOwner && isSignedIn && (
            <DeleteIcon className="material-icons">delete</DeleteIcon>
          )}
          {title} by {composer} - Metre: {metreList[metre].name} - Difficulty:{' '}
          {difficultyByValue[difficulty]} - Scale: {scale}
        </SongContainer>
      );
    });

  return isSearching ? (
    <div>Loading...</div>
  ) : (
    <SongList>{songs && getSongs()}</SongList>
  );
};

const mapStateToProps = ({ search, user }) => ({
  songs: search.songs,
  isSearching: search.isSearching,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps)(SongsFound);
