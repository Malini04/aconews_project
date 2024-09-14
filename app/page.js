import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Navbar />

        
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {/* <li>Home Page</li> */}
          <Link href='./NewsArticle'>Go to News article</Link>
      </ol>
      </main>
    </div>
  );
}
