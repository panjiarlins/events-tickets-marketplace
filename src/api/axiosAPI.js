import axios from 'axios';

const { protocol } = window.location;
const { hostname } = window.location;

const webHost = `${protocol}//${hostname}`;

// const LOCAL_HOST = 'http://192.168.102.216';

// const web_host = `http://${LOCAL_HOST}:3000`;

const axiosAPI = axios.create({
  baseURL: 'https://api-mini-project.glitch.me',
});

export { axiosAPI, webHost };
