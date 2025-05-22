import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // replace with your backend API URL
});

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  const postData = (data) => {
    api.post(url, data)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return { data, isLoading, error, postData };
};

export default useFetch;
