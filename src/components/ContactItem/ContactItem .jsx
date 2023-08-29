import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContactThunk } from 'redux/store/operations';

import { IoMdContact } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';
import {
  ContactItemContainer,
  ContactIcon,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactItem.styled';

export const ContactItem = contact => {
  const dispatch = useDispatch();

  return (
    <ContactItemContainer>
      <ContactIcon>
        <IoMdContact />
      </ContactIcon>
      <ContactName>{contact.name}</ContactName>: tel:
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContactThunk(contact.id))}
      >
        <TiDelete />
      </DeleteButton>
    </ContactItemContainer>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
