const DailyFeed = () => {
  // Sample data for daily feed
  const newsFeed = [
    {
      title: 'New AI Technology Revolutionizes Industry',
      content: 'Artificial Intelligence (AI) continues to transform industries globally, promising new advancements in automation, machine learning, and more.',
      category: 'Technology',
      link: '/news/ai-technology-revolution'
    },
    {
      title: 'Top 10 Travel Destinations for 2024',
      content: 'Explore the top travel destinations for 2024, from pristine beaches to vibrant cultural hubs, offering unique experiences for every traveler.',
      category: 'Travel',
      link: '/news/top-travel-destinations-2024'
    }
  ];

  // Function to truncate content to 50 words
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
  };

  return (
    <div className="bg-white p-4">
      <h3 className="text-xl font-bold mb-4">Daily Feed</h3>

      {/* Map over the newsFeed array to display news items */}
      {newsFeed.map((newsItem, index) => (
        <div key={index} className="mb-6">
          {/* News Title */}
          <h4 className="text-lg font-semibold text-blue-500 hover:text-gray-500 cursor-pointer">
            <a href={newsItem.link}>{newsItem.title}</a>
          </h4>

          {/* News Content */}
          <p className="text-gray-600 mt-2 text-sm">
            {truncateContent(newsItem.content, 30)}
          </p>

          {/* Separator */}
          {index !== newsFeed.length - 1 && (
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
