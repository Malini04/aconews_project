'use client';

import { useEffect, useState } from 'react';

// Define your API key and endpoint
const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY; // Make sure to set this in your .env file
const API_URL = 'https://gnews.io/api/v4/top-headlines';

const DailyFeed = () => {
  const [newsFeed, setNewsFeed] = useState([]);

  // Fetch news data from API
  const fetchNews = async () => {
    const url = `${API_URL}?lang=en&country=us&max=3&apikey=${API_KEY}`; // Adjust category and max number as needed
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNewsFeed(data.articles || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Function to truncate content to 30 words
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
  };

  // Determine which news item to display as the top item
  // const [topNewsItem, ...otherNewsItems] = newsFeed.length > 1 ? [newsFeed[1], ...newsFeed[2]] : newsFeed;
  const [topNewsItem, ...otherNewsItems] = newsFeed.length > 2 ? [newsFeed[1], newsFeed[2]] : newsFeed;


  return (
    <div className="bg-white ">
      <h3 className="text-xl font-bold mb-4">Daily Feed</h3>

      {/* Display the top news item */}
      {topNewsItem && (
        <div className="mb-6">
          {/* News Image */}
          {topNewsItem.image && (
            <img
              src={topNewsItem.image}
              alt={topNewsItem.title}
              className="w-full h-[150px] object-cover mb-4"
            />
          )}

          {/* News Title */}
          <h4 className="text-lg font-semibold text-blue-500 hover:text-gray-500 cursor-pointer">
            <a href={topNewsItem.url}>{topNewsItem.title}</a>
          </h4>

          {/* News Content */}
          <p className="text-gray-600 mt-2 text-sm">
            {truncateContent(topNewsItem.content, 10)}
          </p>

          {/* News Info */}
          <div className="text-sm text-gray-500 mb-2">
            <span>{new Date(topNewsItem.publishedAt).toLocaleDateString()}</span> | <span>{topNewsItem.category || 'General'}</span> | <span>by {topNewsItem.source.name || 'Unknown'}</span>
          </div>
        </div>
      )}

      {/* Display the remaining news items */}
      {otherNewsItems.map((newsItem, index) => (
        <div key={index} className="mb-6">
          {/* News Title */}
          <h4 className="text-lg font-semibold text-blue-500 hover:text-gray-500 cursor-pointer">
            <a href={newsItem.url}>{newsItem.title}</a>
          </h4>

          {/* News Content */}
          <p className="text-gray-600 mt-2 text-sm">
            {truncateContent(newsItem.content, 10)}
          </p>

          {/* Separator */}
          {index !== otherNewsItems.length - 1 && (
            <hr className="my-4 border-t-2 border-gray-200" />
          )}
        </div>
      ))}

      {/* Bottom Border */}
      <div className="border-b-2 border-gray-300 mb-4"></div>

      {/* View More and Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        {/* View More Posts Link */}
        <a href="/news/daily-feed" className="hover:text-blue-500">
          View More Posts
        </a>

        {/* Pagination Controls */}
        <div className="flex items-center">
          <span className="px-2 cursor-pointer text-lg hover:text-blue-500">&lt;</span>
          <span className="px-2 cursor-pointer text-lg hover:text-blue-500">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default DailyFeed;

