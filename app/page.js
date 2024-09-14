import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <header className="row-start-1 mb-8">
        <Navbar />
      </header>

      <main className="flex flex-col items-center justify-center gap-8 row-start-2 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to My Website</h1>
        <ol className="list-inside list-decimal text-sm text-gray-700 font-[family-name:var(--font-geist-mono)]">
          {/* Add more list items if needed */}
          <li>
            <Link
              href="./NewsPaper"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Go to News article Page
            </Link>
          </li>
        </ol>
      </main>

      <footer className="row-start-3 text-center text-gray-600">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
