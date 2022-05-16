import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 10000,
    withCredentials: true
});


instance.interceptors.request.use(config => {
    config.headers = {
        "app-token": localStorage.getItem("app-token") || "",
        score: new Date().getTime()
    };
    return config;
}, error => Promise.reject(error));



instance.interceptors.response.use(function (response) {
    return response;
}, error => Promise.reject(error));

export default instance;