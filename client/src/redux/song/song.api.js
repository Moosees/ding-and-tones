import { api } from '../api/api.slice';

export const extendedSongApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteSongById: builder.mutation({
      query: (songId) => ({
        url: `/song/id/${songId}`,
        method: 'DELETE',
      }),
    }),
  }),
});
