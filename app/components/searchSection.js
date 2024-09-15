import Link from 'next/link';
import React from 'react';

const SearchSection = () => {
  return (
    <header className="w-full max-w-[860px] p-4 mx-auto border-b-4 border-gray-300 flex items-center justify-center">
      <div className="text-center">
        <Link href="../SearchNews" className="inline-block px-4 py-2 border border-gray-500 rounded-3xl text-blue-500 hover:text-blue-800 hover:bg-gray-100 transition-colors duration-300">
          Search News
        </Link>
      </div>
    </header>
  );
};

export default SearchSection;
