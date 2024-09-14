import Link from "next/link";

const CategorySection = () => {
    return (
        <div className="flex justify-between items-center w-full max-w-[860px] h-[56px] mx-auto px-4 border-b border-gray-500">
            <nav className="flex flex-grow justify-between items-center">
                <Link href="/" className="mx-2">Home</Link>
                <Link href="/politics" className="mx-2">Politics</Link>
                <Link href="/technology" className="mx-2">Technology</Link>
                <Link href="/sports" className="mx-2">Sports</Link>
                <Link href="/fashion" className="mx-2">Fashion</Link>
                {/* Add more links if needed */}
            </nav>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
                />
                <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default CategorySection;
