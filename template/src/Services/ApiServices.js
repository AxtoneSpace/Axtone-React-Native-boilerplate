import axios from 'axios';

const API = axios.create({
  baseURL: 'http://143.198.196.96:3333/api/auth/',
});

const URL = {
  login: 'login',
};

export {API, URL};
