import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://health-management-user-api.herokuapp.com',
  timeout: 3000
});
export default authInstance;
