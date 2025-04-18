import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from '../routes/authRoutes.js';
import chatRoutes from '../routes/chatRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

// Add this before routes
app.use(cors({
  origin:'*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`✅ Server running at http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error('❌ MongoDB Error:', err));
