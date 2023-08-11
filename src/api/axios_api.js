import axios from 'axios';

const LOCAL_HOST = 'http://192.168.102.216';

const web_host = `http://${LOCAL_HOST}:3000`;

const axios_api = axios.create({
  baseURL: `https://api-mini-project.glitch.me`,
});

export { axios_api, web_host };
