const BreakingNews = () => {
  return (
      <div className="bg-white p-4">
          {/* Breaking News Image */}
          <img
              src="/breaking-news.jpg"
              alt="Breaking News"
              className="w-full h-[300px] object-cover mb-4"
          />

          {/* Breaking News Info */}
          <div className="text-sm text-gray-500 mb-2">
              <span>Jan 15, 2024</span> | <span>Politics</span> | <span>by John Doe</span>
          </div>

          {/* Breaking News Title */}
          <h2 className="text-2xl font-bold text-blue-500 hover:text-gray-500 cursor-pointer mb-4">
              <a href="/breaking-news-url">Breaking News: Major Political Event Shakes the Nation</a>
          </h2>

          {/* More Breaking News */}
          <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">More Breaking News</h3>
              <ul className="list-disc list-inside">
                  <li className="mb-1">
                      <a href="/news-1" className="text-blue-500 hover:text-gray-500">News Headline 1</a>
                  </li>
                  <li className="mb-1">
                      <a href="/news-2" className="text-blue-500 hover:text-gray-500">News Headline 2</a>
                  </li>
                  <li className="mb-1">
                      <a href="/news-3" className="text-blue-500 hover:text-gray-500">News Headline 3</a>
                  </li>
              </ul>
          </div>
      </div>
  );
};

export default BreakingNews;
