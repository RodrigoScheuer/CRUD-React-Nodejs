import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.100.6:3333' // não pode ser localhost, 
});

export default api;