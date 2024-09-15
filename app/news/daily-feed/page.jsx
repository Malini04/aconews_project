'use client'
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
const CATEGORY = 'general';
const URL = `https://gnews.io/api/v4/top-headlines?category=${CATEGORY}&lang=en&country=us&max=16&apikey=${API_KEY}`;

const Page = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(URL);
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setArticles(data.articles);
        } catch (error) {
          setError(error.message);
          // Fallback to local data if available
          fetch('/dummy/news.json')
            .then((response) => response.json())
            .then((data) => setArticles(data.articles || []))
            .catch((error) => setError('Failed to load local data.'));
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center mt-4">Top Headlines</h1>
        {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
        <div className="grid grid-cols-4 gap-4">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-sm mb-2">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default Page;
