import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:3001/api/v1/user/profile",
});

// Intercepteur token

const token = JSON.parse(localStorage.getItem("user"));
const getToken = token?.body?.token;

Axios.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${getToken}`;
    return request;
});

export default Axios;
