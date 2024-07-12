import { Router } from 'express';

import fetchMemoriesController from './fetchMemoriesController.js';

const memoriesController = Router();

memoriesController.use('/memories', fetchMemoriesController);

export default memoriesController;
