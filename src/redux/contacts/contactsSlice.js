import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import contactDefault from '../../data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactDefault,
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: newContact => {
        return {
          payload: { ...newContact, id: nanoid() },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contactId => contactId.id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

const persistedContactsSlice = persistReducer(
  { key: 'contacts', storage, whitelist: ['items'] },
  contactsSlice.reducer
);

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export default persistedContactsSlice;
