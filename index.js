const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAIApi, Configuration } = require('openai');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });
    res.json({ response: chatCompletion.data.choices[0].message.content });
  } catch (err) {
    console.error('Error from OpenAI:', err);
    res.status(500).json({ error: 'OpenAI API error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
