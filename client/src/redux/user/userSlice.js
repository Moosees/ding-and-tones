import { api } from '../api/apiSlice';

export const userExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    saveUserInfo: builder.mutation({
      query: (userInfo) => ({
        url: '/user/info',
        method: 'PATCH',
        body: userInfo, // { name, anonymous }
      }),
    }),
  }),
});

export const { useSaveUserInfoMutation } = userExtendedApi;
