import apiRequest from "../lib/apiRequest.js";

export const getUsers = () => {
  return apiRequest.get("/users");
};
