import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ADDRESS } from '../../oauth';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_ADDRESS || API_ADDRESS,
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['MySongs', 'MyScales', 'Song', 'Scale'],
  endpoints: () => ({}),
});
