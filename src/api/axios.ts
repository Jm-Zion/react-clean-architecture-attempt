import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.openbrewerydb.org/v1",
});
