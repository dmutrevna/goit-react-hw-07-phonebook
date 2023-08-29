import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notify from 'notiflix';

import { addContactThunk } from 'redux/store/operations';
import { selectContacts } from 'redux/store/selectors';

import { FormContainer, SubTitle } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SubTitle>Name</SubTitle>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        required
      />
      <SubTitle>Number</SubTitle>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        required
      />
      <button type="submit">Add contact</button>
    </FormContainer>
  );
};
