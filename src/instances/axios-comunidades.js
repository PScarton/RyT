import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://rytadmin.firebaseio.com/'
});

export default instance;