import {
  createAction,
  createReducer,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const addContact = createAction('contact/add');
export const deleteContact = createAction('contact/delete');
export const setFilter = createAction('filter/set');

const contacts = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const filter = createReducer('', {
  [setFilter]: (state, action) => action.payload,
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
const reducers = combineReducers({ contacts, filter });
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
