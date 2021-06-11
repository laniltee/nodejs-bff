const axios = require("axios");

const apiRequest = axios.create({
  baseURL: `${process.env.API_URL}/`,
});

module.exports = apiRequest;

