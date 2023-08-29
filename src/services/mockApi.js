import axios from 'axios';

const contactApi = axios.create({
  baseURL: 'https://64eb506ce51e1e82c5773272.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await contactApi.get('/contacts');
  return data;
};

export const fetchDeleteContact = async id => {
  const { data } = await contactApi.delete(`/contacts/${id}`);
  return data;
};

export const fetchAddContact = async contact => {
  const { data } = await contactApi.post('/contacts', contact);
  return data;
};
