import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { difficultyByValue } from '../../assets/constants';
import { metreList } from '../../assets/metre';
import { deleteSongById } from '../../redux/song/song.actions';
import BtnIcon from '../button/Icon';
import BtnPrimary from '../button/Primary';
import Loading from '../loading/Loading';
import SongsTable from './SongsTable';

const SongsFound = ({
  deleteSongById,
  isDeleting,
  isSearching,
  isSignedIn,
  songs,
}) => {
  const { push: redirectTo } = useHistory();

  const columns = useMemo(
    () => [
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
        style: {
          textAlign: 'center',
        },
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
    ],
    []
  );

  const data = useMemo(() => [...songs], [songs]);

  const renderRowExpanded = useCallback(
    ({ isOwner, scaleLabel, songId, title }) => (
      <>
        <td>
          <BtnPrimary
            light
            label="Load with scale"
            onClick={() => redirectTo(`/song/${songId}`)}
          />
        </td>
        <td>
          <BtnPrimary light label="Load w/o scale" disabled={true} />
        </td>
        <td>
          {isOwner && isSignedIn ? (
            <BtnIcon
              label={`delete ${title}`}
              icon="delete"
              onClick={() => deleteSongById(songId)}
              disabled={isSearching || isDeleting}
            />
          ) : null}
        </td>
        <td colSpan={2}>{scaleLabel}</td>
      </>
    ),
    [deleteSongById, isDeleting, isSearching, isSignedIn, redirectTo]
  );

  const handleFetchMore = useCallback(
    () => console.log('fetch more songs'),
    []
  );

  return isSearching ? (
    <Loading />
  ) : (
    <SongsTable
      columns={columns}
      data={data}
      renderRowExpanded={renderRowExpanded}
      handleFetchMore={handleFetchMore}
    />
  );
};

const mapStateToProps = ({ search, song, user }) => ({
  songs: search.songs,
  isSearching: search.isSearching,
  isDeleting: song.ui.isDeleting,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { deleteSongById })(SongsFound);
