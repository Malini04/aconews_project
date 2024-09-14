// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-acowale-blue p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold">
            <Link href="/" >
                <img src="/aw-logo-blu.svg" alt="Logo" width={117.77} height={24} style={{ marginRight: '8px' }} />
            </Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-black hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/category/world" className="text-black hover:text-gray-300">World</Link>
          </li>
          <li>
            <Link href="/category/sports" className="text-black hover:text-gray-300">Sports</Link>
          </li>
          <li>
            <Link href="/search" className="text-black hover:text-gray-300">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
