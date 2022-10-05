import axios from 'axios';

axios.defaults.baseURL = 'https://633d8a3f7e19b1782910ceed.mockapi.io/';

export const addContactAPI = async data => {
  try {
    return axios.post('contacts', data);
  } catch (error) {
    console.log(error);
  }
};
export const getContactsAPI = async () => {
  try {
    const response = await axios.get('contacts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const removeContactAPI = async id => {
  try {
    await axios.delete(`contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
};
