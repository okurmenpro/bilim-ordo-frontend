import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://34.93.66.214/"
});

export default apiClient;