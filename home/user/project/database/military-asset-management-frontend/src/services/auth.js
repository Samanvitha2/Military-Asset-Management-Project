import api from './api';

const auth = {
  login: (username, password) => {
    return api.post('/login', { username, password }).then((response) => response.data.token);
  },
  getUser: (token) => {
    return api.get('/user', { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data);
  },
};

export default auth;