'use client'
import { useEffect, useState } from 'react';

// Define your API key and endpoint
const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY; // Ensure you have this in your .env file
const API_URL = 'https://gnews.io/api/v4/top-headlines';

// In-memory cache for news data
const newsCache = {};

const BreakingNews = () => {
    const [latestNews, setLatestNews] = useState(null);
    const [moreNews, setMoreNews] = useState([]);
    
    const fetchNews = async () => {
        // Check if the news is already cached
        if (newsCache['breakingNews']) {
            console.log("Using cached breaking news data");
            const cachedData = newsCache['breakingNews'];
            setLatestNews(cachedData.latest);
            setMoreNews(cachedData.more);
            return;
        }

        const url = `${API_URL}?lang=en&country=us&max=5&apikey=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (response.status === 429) {
                console.warn('Rate limit exceeded. Retrying after a delay...');
                await new Promise(resolve => setTimeout(resolve, 60000)); // Retry after 60 seconds
                return fetchNews(category); // Retry the request
            }
            const data = await response.json();
            
            if (data.articles && data.articles.length > 0) {
                const latest = data.articles[0]; // Latest news
                const more = data.articles.slice(1); // Other news

                // Cache the fetched data
                newsCache['breakingNews'] = { latest, more };

                setLatestNews(latest);  // Set the latest news
                setMoreNews(more);      // Set more news
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="bg-white p-4">
            {/* Latest Breaking News */}
            {latestNews && (
                <div>
                    {/* Latest Breaking News Image */}
                    <img
                        src={latestNews.image}
                        alt="Breaking News"
                        className="w-full h-[300px] object-cover mb-4"
                    />

                    {/* Latest Breaking News Info */}
                    <div className="text-sm text-gray-500 mb-2">
                        <span>{new Date(latestNews.publishedAt).toLocaleDateString()}</span> | 
                        <span>{latestNews.category || 'General'}</span> | 
                        <span>by {latestNews.source.name}</span>
                    </div>

                    {/* Latest Breaking News Title */}
                    <h2 className="text-2xl font-bold text-blue-500 hover:text-gray-500 cursor-pointer mb-4">
                        <a href={latestNews.url} target="_blank" rel="noopener noreferrer">
                            {latestNews.title}
                        </a>
                    </h2>
                    
                    {/* Latest Breaking News Content */}
                    <p className="text-gray-600 mt-2 text-sm">
                        {latestNews.description.length > 100
                            ? `${latestNews.description.slice(0, 100)}...`
                            : latestNews.description}
                    </p>
                </div>
            )}

            {/* More Breaking News */}
            <div className="mt-6">
                <h3 className="font-semibold text-lg mb-4">More Breaking News</h3>
                <ul className="list-disc list-inside">
                    {moreNews.map((newsItem, index) => (
                        <li key={index} className="mb-3">
                            <a href={newsItem.url} className="text-blue-500 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                                {newsItem.title}
                            </a>
                            <p className="text-gray-600 text-sm">
                                {newsItem.description.length > 100
                                    ? `${newsItem.description.slice(0, 100)}...`
                                    : newsItem.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BreakingNews;

