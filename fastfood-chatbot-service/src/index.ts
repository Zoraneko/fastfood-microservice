import express from 'express';
import chatbotRouter from './routes/chatbot.route';

const app = express();
const PORT = process.env.PORT || 4005;

app.use(express.json());
app.use('/api/chatbot', chatbotRouter);

app.listen(PORT, () => {
  console.log(`Chatbot service running on port ${PORT}`);
});
