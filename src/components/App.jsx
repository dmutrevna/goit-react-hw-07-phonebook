import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContactsThunk } from 'redux/store/operations';

import {
  AppContainer,
  TitleContacts,
  TitlePhone,
} from './ContactForm/ContactForm.styled';
import { selectError, selectLoading } from 'redux/store/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <AppContainer>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>An error occurred while loading contacts</p>}
      <ContactList />
    </AppContainer>
  );
};
