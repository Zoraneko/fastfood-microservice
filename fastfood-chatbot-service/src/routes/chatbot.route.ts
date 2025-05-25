import { Router } from 'express';
import { getReply } from '../controllers/chatbot.controller';

const router = Router();
router.post('/ask', getReply);

export default router;
