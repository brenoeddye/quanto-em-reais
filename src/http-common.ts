import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://economia.awesomeapi.com.br",
    headers: {
        "Content-type": "application/json"
    }
});

export default apiClient