import { useState, useEffect } from 'react';
import auth from '../services/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      auth.getUser(storedToken).then((user) => setUser(user));
    }
  }, []);

  const login = (username, password) => {
    auth.login(username, password).then((token) => {
      setToken(token);
      localStorage.setItem('token', token);
      auth.getUser(token).then((user) => setUser(user));
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return { user, token, login, logout, isAuthenticated: !!token };
};

export default useAuth;
