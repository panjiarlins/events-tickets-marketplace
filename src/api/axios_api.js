import axios from 'axios';

const LOCAL_HOST = "http://192.168.0.113";

const web_host = `${LOCAL_HOST}:3000`;

const axios_api = axios.create({
  baseURL: `${LOCAL_HOST}:2000`,
});

export { axios_api, web_host };
