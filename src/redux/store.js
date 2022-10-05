import filterReducer from './filterSlice';
import contactsReducer from './contactsSlice';
import {
  combineReducers,
  // current,
  configureStore,
} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: gDM => gDM(),
});
