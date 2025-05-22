import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // replace with your backend API URL
});

export default api;
