import { Request, Response } from 'express';
import { getChatbotReply } from '../services/chatbot.service';

export const getReply = (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  const reply = getChatbotReply(message);
  res.json({ reply });
};
