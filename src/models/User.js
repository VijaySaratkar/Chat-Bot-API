import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: mongoose.Schema.Types.Mixed, required: true }, 
});

export default mongoose.model('User', userSchema);
