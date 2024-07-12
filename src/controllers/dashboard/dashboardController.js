import { Router } from 'express';

import memoryController from './memory/memoryController.js';
import memoriesController from './memories/memoriesController.js';

const dashboardController = Router();

dashboardController.use('/dashboard', memoryController);
dashboardController.use('/dashboard', memoriesController);

export default dashboardController;
