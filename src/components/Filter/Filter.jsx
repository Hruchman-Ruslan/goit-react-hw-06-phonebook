import { Label, Input } from './Filter.styled';

import { useContacts } from 'redux/contacts/useContacts';

export const Filter = () => {
  const { changeFilter, filter } = useContacts();

  return (
    <Label>
      Filter contacts by name
      <Input type="text" onChange={changeFilter} value={filter} />
    </Label>
  );
};
