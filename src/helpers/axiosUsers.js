import axios from "axios";

export const axiosUsers = axios.create({
    baseURL: "https://6a806e85ec7a640e63abc268.mockapi.io",
    headers : {
        "Content-Type" : "application/json"
    }
});