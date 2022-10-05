import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactAPI,
  getContactsAPI,
  removeContactAPI,
} from 'sevices/mockAPI';

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const contacts = await addContactAPI(data);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContactsAPI();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, thunkAPI) => {
    try {
      const contact = await removeContactAPI(id);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
