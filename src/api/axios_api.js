import axios from 'axios';

export const axios_api = axios.create({
  baseURL: 'http://localhost:2300',
});
