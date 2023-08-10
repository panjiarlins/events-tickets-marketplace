import axios from 'axios';

<<<<<<< HEAD
const LOCAL_HOST = 'http://192.168.0.104';
=======
const LOCAL_HOST = "http://192.168.0.113";
>>>>>>> 02c9852d07578b93872119ec75ca8a413608eda0

const web_host = `${LOCAL_HOST}:3000`;

const axios_api = axios.create({
  baseURL: `${LOCAL_HOST}:2000`,
});

export { axios_api, web_host };
