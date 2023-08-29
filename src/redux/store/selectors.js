import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const getFilteredContact = () => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    };
    return getFilteredContact();
  }
);
