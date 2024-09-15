// components/Header.js
'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const DateHeader = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(dateStr);
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300 text-sm">
      <div className="text-gray-600">{currentDate}</div>
      <div className="flex space-x-4">
        <Link href="/" className="hover:text-gray-800 text-gray-700">Home</Link>
        <Link href="/new/daily-feed" className="hover:text-gray-800 text-gray-700">Daily-Feed</Link>
        {/* <Link href="/politics" className="hover:text-gray-800 text-gray-700">Politics</Link>
        <Link href="/common-pages" className="hover:text-gray-800 text-gray-700">Common Pages</Link>
        <Link href="/contacts" className="hover:text-gray-800 text-gray-700">Contacts</Link> */}
      </div>
    </header>
  );
};

export default DateHeader;
