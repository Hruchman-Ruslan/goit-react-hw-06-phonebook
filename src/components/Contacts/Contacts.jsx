import PropTypes from 'prop-types';

import { List, Item, Text, Button } from './Contacts.styled';

import { useContacts } from 'redux/contacts/useContacts';

export const ContactList = () => {
  const { contacts, filter, deleteContact } = useContacts();

  const getFilterName = () => {
    if (!filter) return contacts;
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  const list = getFilterName();
  console.log(list);

  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
