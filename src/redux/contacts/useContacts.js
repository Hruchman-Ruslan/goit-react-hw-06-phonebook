import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from './selectors';

import * as actions from './contactsSlice';

export const useContacts = () => {
  const dispath = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const addContact = newContact => {
    dispath(actions.addContact(newContact));
  };
  const deleteContact = id => {
    dispath(actions.deleteContact(id));
  };
  const changeFilter = e => {
    dispath(actions.changeFilter(e.target.value));
  };

  return { addContact, deleteContact, changeFilter, contacts, filter };
};
