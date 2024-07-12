import { Router } from 'express';

import createMemoryController from './createMemoryController.js';

const memoryController = Router();

memoryController.use('/memory', createMemoryController);

export default memoryController;
