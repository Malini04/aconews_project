'use client';
import React, { useState } from 'react';

// Define your API key and endpoint
const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY; // Ensure you have this in your .env file
const API_URL = 'https://gnews.io/api/v4/search';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');  // Current search term in the input field
  const [keywords, setKeywords] = useState([]);  // Array of search keywords
  const [newsResults, setNewsResults] = useState([]);  // News fetched from API

  // Function to handle input changes
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);  // Update search term
  };

  // Function to handle adding keywords when space is pressed
  const handleAddKeyword = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      const trimmedKeyword = searchTerm.trim();
      if (trimmedKeyword && !keywords.includes(trimmedKeyword)) {
        setKeywords((prevKeywords) => [...prevKeywords, trimmedKeyword]);
        setSearchTerm('');  // Clear the input field after adding
      }
    }
  };

  // Function to remove a keyword
  const handleRemoveKeyword = (keywordToRemove) => {
    setKeywords((prevKeywords) =>
      prevKeywords.filter((keyword) => keyword !== keywordToRemove)
    );
  };

  // Function to clear all keywords
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  // Function to format the keywords into a valid query string
  const formatQuery = (keywords) => {
    return keywords
      .map(keyword => {
        if (keyword.includes(' ') || /[!"#$%&'()*+,.\/:;<=>?@[\\]^_`{|}~]/.test(keyword)) {
          return `"${keyword}"`;
        }
        return keyword;
      })
      .join(' AND '); // Use AND as default operator
  };

  // Function to fetch news with specific keywords
  const fetchNews = async () => {
    if (keywords.length === 0) return;

    const query = formatQuery(keywords); // Format the keywords into a valid query string
    const url = `${API_URL}?q=${encodeURIComponent(query)}&lang=en&max=3&apikey=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      if (data.articles) {
        setNewsResults(data.articles);  // Store fetched articles
      } else {
        setNewsResults([]);  // Set empty results if no articles found
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      // Load dummy news data from public folder if API request fails
      try {
        const response = await fetch('/dummy/news.json');
        const data = await response.json();
        console.log(data)
        console.log('no data');
        setNewsResults(data);  // Set dummy news data
      } catch (dummyError) {
        console.error('Error loading dummy news:', dummyError);
        setNewsResults([]);  // Handle error by resetting results
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search News</h2>
      <div className="flex mb-4 items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleAddKeyword}
          placeholder="Enter keyword e.g., apple"
          className="border border-gray-600 rounded-md p-2 h-[30px] flex-grow"
        />
        <button
          onClick={() => {
            const trimmedKeyword = searchTerm.trim();
            if (trimmedKeyword && !keywords.includes(trimmedKeyword)) {
              setKeywords((prevKeywords) => [...prevKeywords, trimmedKeyword]);
              setSearchTerm('');  // Clear the input field after adding
            }
          }}
          className="bg-white p-2 rounded-2xl flex items-center justify-center"
        >
          <img
            src="/search.png"
            alt="Search"
            height={50}
            width={50}
            className="bg-white p-1 rounded"
          />
        </button>
      </div>

      {/* Display added search keywords */}
      <div className="mb-4">
        <h3 className="font-semibold">Keywords:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {keywords.map((keyword, index) => (
            <div key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded-md">
              <span className="mr-2">{keyword}</span>
              <button
                onClick={() => handleRemoveKeyword(keyword)}
                className="text-red-500"
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleClearKeywords}
          className="bg-red-500 text-white p-2 mt-2 rounded-md"
        >
          Clear Keywords
        </button>
      </div>

      {/* Search button */}
      <button onClick={fetchNews} className="bg-green-500 text-white p-2 rounded-md mb-4">
        Search News
      </button>

      {/* Display news results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <h3 className="font-semibold">News Results:</h3>
        {newsResults.length > 0 ? (
          newsResults.map((newsItem, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-md">
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h4 className="font-semibold">{newsItem.title}</h4>
              </a>
              <p>{newsItem.description}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
