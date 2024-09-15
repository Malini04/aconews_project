import Link from "next/link";
import Navbar from "./components/Navbar";
import { analytics } from "@/lib/firebase";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <header className="row-start-1 mb-8">
        <Navbar />
      </header>

      <main className="flex flex-col items-center justify-center gap-8 row-start-2 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to ACONEWS</h1>
        <div className="text-center">
        <Link href="/NewsPaper" className="inline-block px-4 py-2 border border-gray-500 rounded-3xl text-blue-500 hover:text-blue-800 hover:bg-gray-100 transition-colors duration-300">
          Go to News Feed
        </Link>
      </div>
      </main>

      <footer className="row-start-3 text-center text-gray-600">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
