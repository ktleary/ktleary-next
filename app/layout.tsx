import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import SiteIcon from './components/SiteIcon';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'ktleary: Home of Kevin Leary',
  description: 'Kevin Leary is a software engineer in the Boston area.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate text-slate dark:text-white">
        <section className="flex flex-col">
          <nav className="flex justify-between items-center px-4 py-4">
            <a href="/" className="text-2xl font-bold text-white">
              <div className="flex justify-center">
                <SiteIcon className="w-8 h-8 " />
              </div>
            </a>
            <div className="flex">
              <a href="Projects" className="px-4 py-2">
                Projects
              </a>
              <a href="About" className="px-4 py-2">
                About
              </a>
              <a
                href="
                Code"
                className=" px-4 py-2">
                Code
              </a>
              <a href="https://blog.ktleary.com" className=" px-4 py-2">
                Blog
              </a>
            </div>
          </nav>
        </section>

        {children}
        <footer className="flex justify-center items-center px-4 py-4 text-sm text-gray-500 absolute bottom-0 w-full">
          <div className="flex justify-center">
            <a
              href="https://twitter.com/ktleary"
              className="px-4 py-2"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
            <a
              href="https://github.com/ktleary"
              className="px-4 py-2"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kevin-leary-4a0b9b1"
              className="px-4 py-2"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
