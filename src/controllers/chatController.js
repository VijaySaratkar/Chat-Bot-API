import axios from 'axios';
import Chat from '../models/Chat.js';

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const userId = req.user.id;

  try {
    const openaiRes = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-4.1", // or "gpt-3.5-turbo"
        messages: [{ role: "user", content: message }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const reply = openaiRes.data.choices[0].message.content;

    const chat = await Chat.create({
      userId,
      messages: [
        { role: 'user', content: message },
        { role: 'assistant', content: reply }
      ]
    });

    res.json({ reply, chatId: chat._id });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Chat failed' });
  }
};

export const getChats = async (req, res) => {
  const userId = req.user.id;
  try {
    const chats = await Chat.find({ userId }).sort({ createdAt: -1 });
    res.json(chats);
  } catch {
    res.status(500).json({ error: 'Failed to fetch chats' });
  }
};
