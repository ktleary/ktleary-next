import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Link from 'next/link';
import TopNav from './components/TopNav';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'ktleary: Home of Kevin Leary',
  description: 'Kevin Leary is a software engineer in the Boston area.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800">
        <section className="flex flex-col">
          <TopNav />
        </section>

        {children}
        <footer className="flex justify-end items-center px-4 py-2 text-sm text-gray-500  mt-8 bottom-0 w-full">
          <div className="flex justify-center">
            <Link
              href="https://twitter.com/pysolin"
              className="px-2 py-2"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
              </svg>
            </Link>
            <Link
              href="https://github.com/ktleary"
              className="px-2 py-2"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
              </svg>
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
