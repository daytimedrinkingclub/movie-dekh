const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/evaluate', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
            { role: "system", content: "You are a helpful assistant who understands multiple language and guess movie genre from the description provided by user and will return only single message which is the name of the movie genre as a response which is most relevant to the description provided by user." },
            { role: "user", content: message }
      ],
    });
    res.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.get('/api/trendingmovies', async (req, res) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day/?api_key=${process.env.TMDB_API_KEY}`);
    const data = await response.json();
    res.json({ movies: data.results });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching trending movies.' });
  }
});

app.get('/api/preferredmovies', async (req, res) => {
  try {
    const { genre } = req.query;
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genre}`);
    const data = await response.json();
    res.json({ movies: data.results });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching movies.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));