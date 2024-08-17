import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { difficultyByValue } from '../../../assets/constants';
import { metreList } from '../../../assets/metre';
import {
  useDeleteSongByIdMutation,
  useLazyGetSongByIdQuery,
} from '../../../redux/api/api.slice';
import BtnIcon from '../../shared/button/BtnIcon';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import Confirmation from '../../shared/popup/Confirmation';
import ReactTable from './ReactTable';
import { DeleteContainer } from './results.styles';

const Results = ({ songs }) => {
  console.log({ songs });
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying,
  );
  const [deleteSongById, { isLoading: isDeleting }] =
    useDeleteSongByIdMutation();
  const [getSongById] = useLazyGetSongByIdQuery();

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
    [],
  );

  const data = useMemo(() => (songs ? [...songs] : []), [songs]);

  const renderRowExpanded = useCallback(
    ({ isOwner, scaleLabel, songId, title, scaleId }) => {
      const fetchSongFromServer = async (songId, getScale) => {
        if (isSongPlaying) return;

        const { isSuccess } = await getSongById({
          songId,
          getScale,
          editSong: false,
        });
        if (isSuccess) navigate('/song');
      };

      return (
        <>
          <td colSpan={2}>
            <Buttons position="flex-start">
              <BtnPrimary
                disabled={isSongPlaying}
                light
                label="Load w/o scale"
                onClick={() => fetchSongFromServer(songId, false)}
              />
              {scaleId && (
                <BtnPrimary
                  disabled={isSongPlaying}
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
                    disabled={isDeleting || isSongPlaying}
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
      isSongPlaying,
      isSignedIn,
      isDeleting,
      getSongById,
      navigate,
      deleteSongById,
    ],
  );

  const handleFetchMore = useCallback(
    () => console.log('fetch more songs'),
    [],
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
