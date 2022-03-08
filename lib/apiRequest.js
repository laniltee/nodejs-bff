import axios from "axios";

const apiRequest = axios.create({
  baseURL: `${process.env.API_URL}/`,
});

export default apiRequest;
