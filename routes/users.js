import express from 'express';
import * as users from '../api/users';
import { formatUsersResponse } from '../utils/usersUtils';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const usersResponse = await users.getUsers();
    console.log('user response received');
    console.log(usersResponse.data);
    res.json(formatUsersResponse(usersResponse.data));
  } catch (e) {
    console.error(e);
    res.status(500).send({ status: 500, message: e.toString() });
  }
});

export default router;
