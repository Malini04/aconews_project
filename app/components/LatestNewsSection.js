import Link from "next/link";

const LatestNewsSection = () => {
    return (
        <div className="w-full max-w-[860px] mx-auto mt-8 grid grid-cols-4 gap-4 border-t border-gray-300 pt-4">
            {/* Blog Section */}
            <div className="flex flex-col">
                <Link href="/blog" className="text-blue-500 hover:text-gray-500 text-left mb-2">Latest in Blog</Link>
                <p className="text-left">
                    Explore the recent insights and updates from the blog world. 
                </p>
            </div>
            
            {/* Food Section */}
            <div className="flex flex-col">
                <Link href="/food" className="text-blue-500 hover:text-gray-500 text-left mb-2">Latest in Food</Link>
                <p className="text-left">
                    Check out the newest recipes and food trends in the culinary scene.
                </p>
            </div>

            {/* Travel Section */}
            <div className="flex flex-col">
                <Link href="/travel" className="text-blue-500 hover:text-gray-500 text-left mb-2">Latest in Travel</Link>
                <p className="text-left">
                    Discover the best destinations and travel tips for your next adventure.
                </p>
            </div>

            {/* Lifestyle Section */}
            <div className="flex flex-col">
                <Link href="/lifestyle" className="text-blue-500 hover:text-gray-500 text-left mb-2">Latest in Lifestyle</Link>
                <p className="text-left">
                    Stay updated on the latest trends and lifestyle changes around the globe.
                </p>
            </div>
        </div>
    );
};

export default LatestNewsSection;
