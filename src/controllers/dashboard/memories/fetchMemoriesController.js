import { Router } from 'express';

import fetchMemories from '#services/dashboard/memories/fetchMemoriesService.js';

const fetchMemoriesController = Router();

fetchMemoriesController.get('/fetch', async (req, res) => {
  const fetchedMemories = await fetchMemories();

  res.send(fetchedMemories);
});

export default fetchMemoriesController;
