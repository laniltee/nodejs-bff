import express from 'express';
import { photos } from '../api';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const photosResponse = await photos.getPhotos();
    res.json(photosResponse.data);
  } catch (e) {
    console.error(e);
    res.status(500).send({ status: 500, message: e.toString() });
  }
});

export default router;
