import { sequelize } from './config/database';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import expenditureRoutes from './routes/expenditureRoutes';
import transferRoutes from './routes/transferRoutes';
import userRoutes from './routes/userRoutes';
import errorHandler from './middlewares/errorHandler';
import assetRoutes from './routes/assetRoutes';
import assignmentRoutes from './routes/assignmentRoutes';
import express from 'express';
import models from './models';

const app = express();
const PORT = process.env.PORT || 3000;

// ... middleware and route setup ...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});