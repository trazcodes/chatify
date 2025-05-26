import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from '../lib/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})); 
app.use(express.json());
app.use(cookieParser());

// Routes

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT}`) ;
    connectDB();

});