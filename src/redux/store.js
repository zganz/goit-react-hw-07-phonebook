import {
  createAction,
  createReducer,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

export const setFilter = createAction('filter/set');

const filter = createReducer('', {
  [setFilter]: (state, action) => action.payload,
});

const reducers = combineReducers({
  contacts: contactsApi.reducer,
  filter,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
