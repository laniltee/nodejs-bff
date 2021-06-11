const express = require("express");

const router = express.Router();

const users = require("./users");
const photos = require("./photos");

router.use("/users", users);
router.use("/photos", photos);

module.exports = router;
