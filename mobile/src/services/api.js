import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.43.226:3334'
});

export default api;