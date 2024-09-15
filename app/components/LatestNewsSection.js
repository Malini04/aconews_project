'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

// Define your API key and endpoint
const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
console.log(API_KEY);
const API_URL = 'https://gnews.io/api/v4/top-headlines';

const LatestNewsSection = () => {
    const [newsData, setNewsData] = useState({
        general: [],
        technology: [],
        entertainment: [],
        health: []
        // Add other categories if needed
    });

    const categories = ['general', 'technology', 'entertainment', 'health']; // Add other categories if needed

    // Function to fetch news data from API
    const fetchNews = async (category) => {
        const url = `${API_URL}?category=${category}&lang=en&country=us&max=1&apikey=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (response.status === 429) {
                console.warn('Rate limit exceeded. Retrying after a delay...');
                await new Promise(resolve => setTimeout(resolve, 60000)); // Retry after 60 seconds
                return fetchNews(category); // Retry the request
            }
            const data = await response.json();
            return data.articles;
        } catch (error) {
            console.error('Error fetching news:', error);
            return [];
        }
    };

    // Fetch news for each category when component mounts
    // useEffect(() => {
    //     const fetchAllNews = async () => {
    //         const fetchedNews = {};
    //         for (const category of categories) {
    //             fetchedNews[category] = await fetchNews(category);
    //         }
    //         setNewsData(fetchedNews);
    //     };
    //     fetchAllNews();
    // }, []);

    useEffect(() => {
        const fetchAllNews = async () => {
            const cachedNews = JSON.parse(localStorage.getItem('cachedNews')) || {};
            const fetchedNews = {};
            for (const category of categories) {
                if (cachedNews[category]) {
                    fetchedNews[category] = cachedNews[category];
                } else {
                    fetchedNews[category] = await fetchNews(category);
                }
            }
            setNewsData(fetchedNews);
            localStorage.setItem('cachedNews', JSON.stringify(fetchedNews));
        };
        fetchAllNews();
    }, []);

    return (
        <div className="w-full max-w-[860px] mx-auto mt-2 grid grid-cols-4 gap-4 border-t border-gray-300 pt-4">
            {categories.map((category) => (
                <div key={category} className="flex flex-col">
                    <Link href={`/${category}`} className="text-red-400 hover:text-gray-500 text-left mb-2 text-xs">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                    {newsData[category] && newsData[category].length > 0 ? (
                        newsData[category].slice(0, 1).map((newsItem, index) => (
                            <div key={index} className="mb-2">
                                <Link href={newsItem.url} className="text-black-500 hover:text-gray-500 text-left block mb-1 text-sm">
                                    {newsItem.title}
                                </Link>
                                {/* <p className="text-left text-gray-600 text-sm">
                                    {newsItem.description && newsItem.description.length > 100
                                        ? `${newsItem.description.slice(0, 100)}...`
                                        : newsItem.description}
                                </p> */}
                            </div>
                        ))
                    ) : (
                        <p className="text-left text-black-600 text-sm">No news available</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LatestNewsSection;
