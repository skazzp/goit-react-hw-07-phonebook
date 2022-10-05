import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContacts, removeContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [removeContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter(elem => elem.id !== action.payload);
    },
    [removeContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
