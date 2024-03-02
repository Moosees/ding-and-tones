import { api } from '../api/apiSlice';

export const userExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    saveUserInfo: builder.mutation({
      query: (userInfo) => ({
        url: '/user/info',
        method: 'POST',
        body: userInfo, // { name, anonymous }
      }),
    }),
  }),
});

export const { useSaveUserInfoMutation } = userExtendedApi;
