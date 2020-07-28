import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { difficultyByValue } from '../../assets/constants';
import { metreList } from '../../assets/metre';
import { deleteSongById } from '../../redux/song/song.actions';
import BtnIcon from '../button/Icon';
import Loading from '../loading/Loading';
import {
  SongContainer,
  SongList,
  SongTextContainer,
} from './songsFound.styles';

const SongsFound = ({
  deleteSongById,
  isDeleting,
  isSearching,
  isSignedIn,
  songs,
}) => {
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
          <BtnIcon
            label={`delete ${title}`}
            icon="delete"
            onClick={() => deleteSongById(songId)}
            disabled={!isSignedIn || !isOwner || !isSearching || isDeleting}
          />
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

const mapStateToProps = ({ search, song, user }) => ({
  songs: search.songs,
  isSearching: search.isSearching,
  isDeleting: song.ui.isDeleting,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { deleteSongById })(SongsFound);
