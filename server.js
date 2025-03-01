import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './src/middleware/errorHandler.js';
import userRouter from './src/routes/userRoutes.js';
import connectDB from './src/config/dbCon.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
// Connect to the database before starting the server
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api', userRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
