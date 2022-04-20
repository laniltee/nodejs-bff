import express from 'express';

const router = express.Router();

import users from './users';
import photos from './photos';
import todos from './todos';

router.use('/users', users);
router.use('/photos', photos);
router.use('/todos', todos);

export default router;
