const express = require("express");
const { photos } = require("../api");

const router = express.Router();

router.get("/", async (req, res) => {
  const photosResponse = await photos.getPhotos();
  res.json(photosResponse.data);
});

module.exports = router;
