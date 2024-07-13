import { Router } from 'express';

import createMemory from '#services/dashboard/memory/createMemoryService.js';

const createMemoryController = Router();

createMemoryController.post('/create', async (req, res) => {
  const dataToCreateMemory = req.body;

  try {
    const createdMemory = await createMemory(dataToCreateMemory);
    res.send({ message: 'success', data: createdMemory });
  } catch (error) {
    res.status(500).send({ message: 'error', error });
  }
});

export default createMemoryController;
