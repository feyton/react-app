import axios from '../config/axios.js';

const userAPI = '/api/v1/accounts/register';

const register = async (userData) => {
  const response = await axios.post(userAPI, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register
};
export default authService;
