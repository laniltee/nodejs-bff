const express = require("express");
const { users } = require("../api");
const { formatUsersResponse } = require("../utils/usersUtils");

const router = express.Router();

router.get("/", async (req, res) => {
  const usersResponse = await users.getUsers();
  console.log("user response received");
  console.log(usersResponse.data);
  res.json(formatUsersResponse(usersResponse.data));
});

module.exports = router;
