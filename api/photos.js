const apiRequest = require("../lib/apiRequest");

const getPhotos = () => {
  return apiRequest.get("/photos");
};

module.exports = {
  getPhotos,
};
