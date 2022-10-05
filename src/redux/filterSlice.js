import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter(state, action) {
      return action.payload;
    },
  },
});
const filterReducer = filterSlice.reducer;
export const { getFilter } = filterSlice.actions;
export default filterReducer;
