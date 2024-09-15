'use client'
import { useState, useEffect } from "react";

// Define your API key and endpoint
const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
const API_URL = 'https://gnews.io/api/v4/top-headlines';

const FeaturedStories = () => {
  const [newsStories, setNewsStories] = useState([]);  // Store all fetched news stories here
  const [currentPage, setCurrentPage] = useState(1);  // Pagination state
  const storiesPerPage = 8;  // You want 4 rows with 2 columns (so 8 stories per page)

  const categories = ['world', 'nation', 'business', 'sports', 'science'];  // Categories to fetch

  // Cache to store fetched stories by category
  const newsCache = {};

  // Fetch news for a specific category
  const fetchNews = async (category) => {
    // Check if data for this category is already in the cache
    if (newsCache[category]) {
      console.log(`Using cached data for category: ${category}`);
      return newsCache[category];  // Return cached data
    }

    // If not cached, fetch news from API
    const url = `${API_URL}?category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`; // Max 10 articles per category for now
    try {
      const response = await fetch(url);
      if (response.status === 429) {
        console.warn('Rate limit exceeded. Retrying after a delay...');
        await new Promise(resolve => setTimeout(resolve, 6000)); // Retry after 60 seconds
        return fetchNews(category); // Retry the request
    }
      const data = await response.json();
      newsCache[category] = data.articles || [];  // Store the fetched data in the cache
      return data.articles || [];
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  };

  // Fetch all categories and combine results
  const fetchAllNews = async () => {
    let allStories = [];
    for (let category of categories) {
      const categoryNews = await fetchNews(category);
      allStories = [...allStories, ...categoryNews];  // Append stories from each category
    }
    setNewsStories(allStories);  // Set the combined stories into state
  };

  // Fetch news on component mount
  useEffect(() => {
    fetchAllNews();
  }, []);

  // Pagination logic: Calculate stories to display on the current page
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = newsStories.slice(indexOfFirstStory, indexOfLastStory);

  // Function to go to next page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Truncate content to a specific word limit
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
  };

  return (
    <div className="w-full max-w-[860px] mx-auto  py-2 bg-white pt-12">
      <h3 className="text-xl font-bold mb-4">FEATURED STORIES</h3>
      <div className="border-b-4 border-gray-300 mb-0.5"></div>
      <div className="border-b-2 border-gray-300 mb-4"></div>

      {/* Display current paginated stories */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {currentStories.map((story, index) => (
          <div key={index}>
            <img
              src={story.image || "/placeholder.jpg"}  // Use a placeholder if no image is available
              alt={story.title}
              className="w-full h-[300px] object-cover mb-4"
            />
            <div className="text-sm text-gray-500 mb-2">
              <span>{new Date(story.publishedAt).toLocaleDateString()}</span> | 
              <span>{story.source?.name || 'Unknown Source'}</span>
            </div>
            <h2 className="text-xl font-bold text-black hover:text-gray-500 cursor-pointer mb-4">
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
              </a>
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              {truncateContent(story.description || '', 50)}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center">
        {Array.from({ length: Math.ceil(newsStories.length / storiesPerPage) }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="border-b-4 border-gray-700 mb-0.5"></div>

      <a href="/news/daily-feed" className="text-red-500 hover:text-gray-500">
        View More Posts
      </a>
    </div>
  );
};

export default FeaturedStories;
