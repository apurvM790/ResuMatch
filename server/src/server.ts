import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { clerkMiddleware } from '@clerk/express';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());



const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});