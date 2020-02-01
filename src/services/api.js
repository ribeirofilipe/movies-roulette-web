import axios from 'axios';

const api = axios.create({
  baseURL: 'https://the-movies-backend.herokuapp.com/'
});

export default api;