import axios from 'axios';

const api = axios.create({
  baseURL: 'https://learningfirebase-ff59d.firebaseio.com/',
});

export default api;
