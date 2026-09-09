import axios from "axios";
const apiURL = import.meta.env.VITE_MOCKAPI_URL;

export const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});
