import axios from 'axios';

const { protocol } = window.location;
const { hostname } = window.location;

const webHost = `${protocol}//${hostname}`;

const axiosAPI = axios.create({
  baseURL: 'https://api-mini-project.glitch.me',
});

export { axiosAPI, webHost };
