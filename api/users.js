const apiRequest = require("../lib/apiRequest");

const getUsers = () => {
  return apiRequest.get("/users");
};

module.exports = {
  getUsers,
};
