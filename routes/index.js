import express from 'express';

const router = express.Router();

import users from './users';
import photos from './photos';

router.use('/users', users);
router.use('/photos', photos);

export default router;
