import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { difficultyByValue } from '../../assets/constants';
import { metreList } from '../../assets/metre';
import { deleteSongById } from '../../redux/song/song.actions';
import Loading from '../loading/Loading';
import {
  DeleteIcon,
  NoDeleteIcon,
  SongContainer,
  SongList,
  SongTextContainer,
} from './songsFound.styles';

const SongsFound = ({ deleteSongById, isSearching, isSignedIn, songs }) => {
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
        <SongContainer key={songId}>
          {isOwner && isSignedIn ? (
            <DeleteIcon
              className="material-icons"
              onClick={() => deleteSongById(songId)}
            >
              delete
            </DeleteIcon>
          ) : (
            <NoDeleteIcon className="material-icons">delete</NoDeleteIcon>
          )}
          <SongTextContainer onClick={() => history.push(`/song/${songId}`)}>
            <span>
              {title} by {composer}
            </span>
            <span>{metreList[metre].name}</span>
            <span>{difficultyByValue[difficulty]}</span>
            <span>{scale}</span>
          </SongTextContainer>
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

export default connect(mapStateToProps, { deleteSongById })(SongsFound);
