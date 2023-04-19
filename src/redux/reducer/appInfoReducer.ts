import {initialState} from '../constants/appInitialState';
import {createSlice} from '@reduxjs/toolkit';

const AppInfoSlice = createSlice({
  name: 'appInfoReducer',
  initialState,
  reducers: {
    updateActivityData: (state, action) => {
      state.activityList = state.activityList.concat(action.payload);
    },
  },
});

export default AppInfoSlice.reducer;

export const {updateActivityData} = AppInfoSlice.actions;
