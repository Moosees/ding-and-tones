import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: { msg: '' },
  reducers: {
    clearAlert(state) {
      console.log('CLEAR ALERT');
      state.msg = '';
    },
    createAlert(state, { payload }) {
      console.log('CREATE ALERT', { payload });
      state.msg = payload.alert;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, { payload }) => {
          console.log('ALERT ACTION FULFILLED MATCHER', {
            state: state.msg,
            payload,
          });
          if (payload?.alert) state.msg = payload.alert;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          console.log('ALERT ACTION REJECTED MATCHER', {
            state: state.msg,
            payload,
          });
          if (payload?.data?.error) state.msg = payload.data.error;
        }
      )
      .addDefaultCase((state, { payload }) => {
        if (payload?.alert) {
          console.log('ALERT DEFAULT', { payload });
          state.msg = payload.alert;
        }
      });
  },
});

export const { clearAlert, createAlert } = alertSlice.actions;
export default alertSlice;
