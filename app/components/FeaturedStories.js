// const FeaturedStories = () => {
//   // Sample news data array
//   const newsStories = [
//     {
//       id: 1,
//       imageUrl: "/breaking-news.jpg",
//       date: "Jan 15, 2024",
//       category: "Politics",
//       title: "Breaking News: Major Political Event Shakes the Nation",
//       content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
//       link: "/breaking-news-url",
//     },
//     {
//       id: 2,
//       imageUrl: "/breaking-news.jpg",
//       date: "Jan 12, 2024",
//       category: "Technology",
//       title: "Tech Giants Unveil New Innovations for 2024",
//       content: "The biggest tech companies have announced their plans to bring revolutionary products to market...",
//       link: "/technology-news-url",
//     },
//     {
//       id: 3,
//       imageUrl: "/travel-news.jpg",
//       date: "Jan 10, 2024",
//       category: "Travel",
//       title: "Top Travel Destinations You Can't Miss in 2024",
//       content: "Explore the hidden gems and must-visit locations around the globe for the year ahead...",
//       link: "/travel-news-url",
//     },
//     {
//       id: 4,
//       imageUrl: "/lifestyle-news.jpg",
//       date: "Jan 08, 2024",
//       category: "Lifestyle",
//       title: "How to Lead a Balanced Life in a Fast-Paced World",
//       content: "Living a balanced lifestyle requires intention and prioritization. Here's how you can start...",
//       link: "/lifestyle-news-url",
//     }
//   ];

//   // Function to truncate content to 50 words
//   const truncateContent = (content, wordLimit) => {
//     const words = content.split(' ');
//     if (words.length > wordLimit) {
//       return words.slice(0, wordLimit).join(' ') + '...';
//     }
//     return content;
//   };

//   return (
//     <div className="bg-white p-4 pt-12">
//       <h3 className="text-xl font-bold mb-4">FEATURED STORIES</h3>
//       <div className="border-b-4 border-gray-300 mb-0.5"></div>
//       <div className="border-b-2 border-gray-300 mb-4"></div>

//       <div className="grid grid-cols-2 gap-4 mb-8">
//         {/* Map through newsStories array */}
//         {newsStories.map((story) => (
//           <div key={story.id}>
//             <img
//               src={story.imageUrl}
//               alt={story.title}
//               className="w-full h-[300px] object-cover mb-4"
//             />

//             {/* News Info */}
//             <div className="text-sm hover:text-gray-500 mb-2 text-red-500">
//               <span>{story.date}</span> | <span>{story.category}</span>
//             </div>

//             {/* News Title */}
//             <h2 className="text-xl font-bold text-black hover:text-gray-500 cursor-pointer mb-4">
//               <a href={story.link}>{story.title}</a>
//             </h2>

//             {/* Truncated News Content */}
//             <p className="text-gray-600 mt-2 text-sm">
//               {truncateContent(story.content, 50)}
//             </p>

//             {/* Read More Link */}
//             <a
//               href={story.link}
//               className="text-blue-600 hover:text-gray-500 mt-2 block"
//             >
//               Read more
//             </a>
//           </div>
//         ))}
//       </div>


//       <div className="border-b-4 border-gray-700 mb-0.5"></div>

//       <a href="/news/daily-feed" className="text-red-500 hover:text-gray-500">
//         View More Posts
//       </a>
//     </div>
//   );
// };

// export default FeaturedStories;


'use client';

import { useEffect, useState } from 'react';

// Define your API key and endpoint
const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY; // Ensure this is set in your .env file
const API_URL = 'https://gnews.io/api/v4/top-headlines';

const FeaturedStories = () => {
  const [newsStories, setNewsStories] = useState([]);

  // Fetch news data from API for different categories
  const fetchNews = async () => {
    const categories = ['general', 'technology', 'travel', 'lifestyle', 'business']; // Add more categories as needed
    const requests = categories.map(category =>
      fetch(`${API_URL}?category=${category}&lang=en&country=us&max=1&apikey=${API_KEY}`)
    );

    try {
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map(res => res.json()));

      // Flatten the array of articles and set the state
      const stories = data.flatMap(item => item.articles);
      setNewsStories(stories);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Function to truncate content to 50 words
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
  };

  return (
    <div className="bg-white p-4 pt-12">
      <h3 className="text-xl font-bold mb-4">FEATURED STORIES</h3>
      <div className="border-b-4 border-gray-300 mb-0.5"></div>
      <div className="border-b-2 border-gray-300 mb-4"></div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Map through newsStories array */}
        {newsStories.map((story, index) => (
          <div key={index}>
            {/* News Image */}
            {story.image ? (
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-[300px] object-cover mb-4"
              />
            ) : (
              <div className="w-full h-[300px] bg-gray-200 mb-4 flex items-center justify-center">
                <span>No Image Available</span>
              </div>
            )}

            {/* News Info */}
            <div className="text-sm hover:text-gray-500 mb-2 text-red-500">
              <span>{new Date(story.publishedAt).toLocaleDateString()}</span> | <span>{story.category || 'General'}</span>
            </div>

            {/* News Title */}
            <h2 className="text-xl font-bold text-black hover:text-gray-500 cursor-pointer mb-4">
              <a href={story.url}>{story.title}</a>
            </h2>

            {/* Truncated News Content */}
            <p className="text-gray-600 mt-2 text-sm">
              {truncateContent(story.content, 50)}
            </p>

            {/* Read More Link */}
            <a
              href={story.url}
              className="text-blue-600 hover:text-gray-500 mt-2 block"
            >
              Read more
            </a>
          </div>
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

