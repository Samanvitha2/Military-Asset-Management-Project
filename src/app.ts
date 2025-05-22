import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { sequelize } from './config/database';
import errorHandler from './middlewares/errorHandler';

// Import routes
import userRoutes from './routes/userRoutes';
import assetRoutes from './routes/assetRoutes';
import assignmentRoutes from './routes/assignmentRoutes';
import expenditureRoutes from './routes/expenditureRoutes';
import transferRoutes from './routes/transferRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/expenditures', expenditureRoutes);
app.use('/api/transfers', transferRoutes);

// Error handling
app.use(errorHandler);

// Database connection and server start
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer(); 