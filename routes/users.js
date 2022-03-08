import express from "express";
import { users } from "../api";
import formatUsersResponse from "../utils/usersUtils";

const router = express.Router();

router.get("/", async (req, res) => {
  const usersResponse = await users.getUsers();
  console.log("user response received");
  console.log(usersResponse.data);
  res.json(formatUsersResponse(usersResponse.data));
});

module.exports = router;
