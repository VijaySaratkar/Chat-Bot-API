import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: [{ role: String, content: String }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Chat', chatSchema);
