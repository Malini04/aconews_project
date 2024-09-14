'use client'

import Link from "next/link";
import { useRef } from "react";

// Array of categories
const categories = [
    { name: "Home", href: "/" },
    { name: "General", href: "/category/general" },
    { name: "World", href: "/category/world" },
    { name: "Nation", href: "/category/nation" },
    { name: "Business", href: "/category/business" },
    { name: "Technology", href: "/category/technology" },
    { name: "Entertainment", href: "/category/entertainment" },
    { name: "Sports", href: "/category/sports" },
    { name: "Science", href: "/category/science" },
    { name: "Health", href: "/category/health" }
];

const CategorySection = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200; // Adjust this value to control scroll speed
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="w-full max-w-[860px] mx-auto px-4 py-2 border-b border-gray-500">
            <div className="relative">
                {/* Scroll Buttons */}
                {/* <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-200"
                >
                    &lt;
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-200"
                >
                    &gt;
                </button> */}

                {/* Scrollable Container */}
                {/* <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto whitespace-nowrap scroll-smooth"
                > */}
                    <nav className="flex items-center space-x-4">
                        {categories.map((category) => (
                            <Link
                                key={category.href}
                                href={category.href}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            {/* </div> */}
        </div>
    );
};

export default CategorySection;
