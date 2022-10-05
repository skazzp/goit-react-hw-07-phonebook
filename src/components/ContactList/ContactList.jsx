import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContact } from 'redux/operations';

import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);
  const filterQuery = useSelector(state => state.filter);
  const filterContacts = (contacts, filterQuery) => {
    return filterQuery
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterQuery.toLowerCase())
        )
      : contacts;
  };
  const filteredContacts = filterContacts(contacts, filterQuery);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            <span className={css.name}>{contact.name} : </span>
            <span>{contact.number}</span>
            <button
              type="button"
              onClick={() => {
                dispatch(removeContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
