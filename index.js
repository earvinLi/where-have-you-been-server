import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import dashboardController from './src/controllers/dashboard/dashboardController.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', dashboardController);

app.listen(5001, () => console.log('Server ready on port 5001.'));

export default app;
