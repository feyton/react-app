import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3500',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api
