import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { difficultyByValue } from '../../../assets/constants';
import { metreList } from '../../../assets/metre';
import {
  useDeleteSongByIdMutation,
  useLazyGetSongByIdQuery,
} from '../../../redux/song/song.api';
import BtnIcon from '../../shared/button/BtnIcon';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import Confirmation from '../../shared/popup/Confirmation';
import ReactTable from './ReactTable';
import { DeleteContainer } from './results.styles';

const Results = () => {
  const songs = useSelector(({ search }) => search.songs);
  const isSearching = useSelector(({ search }) => search.isSearching);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const [deleteSongById, { isLoading: isDeleting }] =
    useDeleteSongByIdMutation();

  const navigate = useNavigate();

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

  const [getSongById] = useLazyGetSongByIdQuery();
  const renderRowExpanded = useCallback(
    ({ isOwner, scaleLabel, songId, title, scaleId }) => {
      const fetchSongFromServer = async (songId, getScale) => {
        const { isSuccess } = await getSongById({ songId, getScale });
        if (isSuccess) navigate('/song');
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
                  onConfirm={() => deleteSongById({ songId })}
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
    [isDeleting, isSearching, isSignedIn, navigate, getSongById, deleteSongById]
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

export default Results;
