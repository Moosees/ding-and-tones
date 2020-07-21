import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { difficultyByValue } from '../../assets/constants';
import { metreList } from '../../assets/metre';
import Loading from '../loading/Loading';
import { DeleteIcon, SongContainer, SongList } from './songsFound.styles';

const SongsFound = ({ isSearching, isSignedIn, songs }) => {
  const history = useHistory();

  const getSongs = () =>
    songs.map((song, i) => {
      const {
        songId,
        title,
        composer,
        scale,
        difficulty,
        metre,
        isOwner,
      } = song;

      return (
        <SongContainer
          key={songId}
          onClick={() => history.push(`/song/${songId}`)}
        >
          {isOwner && isSignedIn && (
            <DeleteIcon className="material-icons">delete</DeleteIcon>
          )}
          {title} by {composer} - Metre: {metreList[metre].name} - Difficulty:{' '}
          {difficultyByValue[difficulty]} - Scale: {scale}
        </SongContainer>
      );
    });

  return isSearching ? <Loading /> : <SongList>{songs && getSongs()}</SongList>;
};

const mapStateToProps = ({ search, user }) => ({
  songs: search.songs,
  isSearching: search.isSearching,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps)(SongsFound);
