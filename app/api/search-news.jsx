import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const searchQuery = req.query.q;

  if (!searchQuery) {
    return res.status(400).json({ error: 'Please provide a search query' });
  }

  try {
    const response = await fetch(`https://gnews.io/api/v4/search?q=${encodeURIComponent(searchQuery)}&lang=en&max=3&apikey=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}`);
    
    if (!response.ok) {
      throw new Error('API response was not ok');
    }

    const data = await response.json();
    res.status(200).json(data.articles);
  } catch (error) {
    console.log('API request failed:', error.message);
    console.log('Attempting to load fallback data');
    const filePath = path.join(process.cwd(), 'public', 'dummy', 'news.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading fallback file:', err);
        res.status(500).json({ error: 'Failed to load fallback data' });
      } else {
        console.log('Fallback data loaded successfully');
        res.status(200).json(JSON.parse(data));
      }
    });
  }
  
}
