import localFont from "next/font/local";
import Navbar from "./components/Navbar";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aconews",
  description: "the latest scoop machine, feeding users hot-off-the-press news from all over.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-mono)] layout-container `}
      >
        {/* <header className="text-center text-acowale-blue">ACONEWS</header> */}
        {/* <Navbar /> */}
        <main className="content">{children}</main>
        <footer className="text-center text-acowale-blue  footer">© 2024 ACONEWS</footer>
      </body>
    </html>
  );
}
