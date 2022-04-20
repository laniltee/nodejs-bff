import express from 'express';
import { todos } from '../api';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todosResponse = await todos.getTodos();
    res.json(todosResponse.data);
  } catch (e) {
    console.error(e);
    res.status(500).send({ status: 500, message: e.toString() });
  }
});

export default router;
