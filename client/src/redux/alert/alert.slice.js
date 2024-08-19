import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: { msg: '' },
  reducers: {
    clearAlert(state) {
      state.msg = '';
    },
    createAlert(state, { payload }) {
      state.msg = state.msg ? state.msg + '\n' + payload.alert : payload.alert;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, { payload }) => {
          if (payload?.alert)
            state.msg = state.msg
              ? state.msg + '\n' + payload.alert
              : payload.alert;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          if (payload?.data?.error)
            state.msg = state.msg
              ? state.msg + '\n' + payload.data.error
              : payload.data.error;
        },
      )
      .addDefaultCase((state, { payload }) => {
        if (payload?.alert) {
          state.msg = state.msg
            ? state.msg + '\n' + payload.alert
            : payload.alert;
        }
      });
  },
});

export const { clearAlert, createAlert } = alertSlice.actions;
export default alertSlice;
