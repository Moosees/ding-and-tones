import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { difficultyByValue } from '../../assets/constants';
import { metreList } from '../../assets/metre';
import { deleteSongById } from '../../redux/song/song.actions';
import Loading from '../loading/Loading';
import SongsTable from './SongsTable';

const SongsFound = ({
  deleteSongById,
  isDeleting,
  isSearching,
  isSignedIn,
  songs,
}) => {
  const history = useHistory();

  const columns = useMemo(() => [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Composer',
      accessor: 'composer',
    },
    {
      Header: 'Metre',
      accessor: 'metre',
      Cell: ({ value }) => metreList[value].name,
    },
    {
      Header: 'Scale',
      accessor: 'scaleName',
    },
    {
      Header: 'Difficulty',
      accessor: 'difficulty',
      Cell: ({ value }) => difficultyByValue[value],
    },
  ]);

  //       <SongContainer key={songId}>
  //         <BtnIcon
  //           label={`delete ${title}`}
  //           icon="delete"
  //           onClick={() => deleteSongById(songId)}
  //           disabled={!isSignedIn || !isOwner || !isSearching || isDeleting}
  //         />
  //         <SongTextContainer onClick={() => history.push(`/song/${songId}`)}>

  return isSearching ? (
    <Loading />
  ) : (
    <SongsTable columns={columns} data={songs} />
  );
};

const mapStateToProps = ({ search, song, user }) => ({
  songs: search.songs,
  isSearching: search.isSearching,
  isDeleting: song.ui.isDeleting,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { deleteSongById })(SongsFound);
