import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { difficultyByValue } from '../../../assets/constants';
import { metreList } from '../../../assets/metre';
import { deleteSongById, getSongById } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnIcon from '../../shared/button/Icon';
import BtnPrimary from '../../shared/button/Primary';
import Confirmation from '../../shared/popup/Confirmation';
import ReactTable from './ReactTable';
import { DeleteContainer } from './results.styles';

const Results = ({
  deleteSongById,
  isDeleting,
  isSearching,
  isSignedIn,
  getSongById,
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
        style: { width: '0.001%' },
      },
      {
        Header: 'Scale',
        accessor: 'scaleName',
      },
      {
        Header: 'Difficulty',
        accessor: 'difficulty',
        Cell: ({ value }) => difficultyByValue[value],
        style: { width: '0.001%' },
      },
    ],
    []
  );

  const data = useMemo(() => [...songs], [songs]);

  const renderRowExpanded = useCallback(
    ({ isOwner, scaleLabel, songId, title, scaleId }) => {
      const fetchSongFromServer = (songId, getScale) => {
        getSongById(songId, getScale).then((res) => {
          if (res) redirectTo('/song');
        });
      };

      return (
        <>
          <td colSpan={2}>
            <Buttons position="flex-start">
              <BtnPrimary
                light
                label="Load w/o scale"
                onClick={() => fetchSongFromServer(songId, false)}
              />
              {scaleId && (
                <BtnPrimary
                  light
                  label="Load with scale"
                  onClick={() => fetchSongFromServer(songId, true)}
                />
              )}
            </Buttons>
          </td>
          <td colSpan={1}>
            {isOwner && isSignedIn ? (
              <DeleteContainer>
                <Confirmation
                  onConfirm={() => deleteSongById(songId)}
                  label={`Are you sure you want to delete "${title}"`}
                >
                  <BtnIcon
                    title={`Delete "${title}"`}
                    icon="delete"
                    disabled={isSearching || isDeleting}
                    position="right"
                  />
                </Confirmation>
              </DeleteContainer>
            ) : null}
          </td>
          <td colSpan={2}>{scaleLabel}</td>
        </>
      );
    },
    [
      deleteSongById,
      getSongById,
      isDeleting,
      isSearching,
      isSignedIn,
      redirectTo,
    ]
  );

  const handleFetchMore = useCallback(
    () => console.log('fetch more songs'),
    []
  );

  return (
    <ReactTable
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

export default connect(mapStateToProps, { deleteSongById, getSongById })(
  Results
);
