import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://health-management-user-api.herokuapp.com',
  timeout: 3000,
});
