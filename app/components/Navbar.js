import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-acowale-blue py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold flex items-center">
          <Link href="/">
            <img
              src="/aw-logo-blu.svg"
              alt="Logo"
              width={117.77}
              height={24}
              className="mr-2"
            />
          </Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-black hover:text-gray-500 transition-colors">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
