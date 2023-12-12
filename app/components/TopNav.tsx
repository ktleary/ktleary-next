'use client';

import {useState} from 'react';
import Link from 'next/link';
import SiteIcon from './SiteIcon';
import {usePathname} from 'next/navigation';

const TopNav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-4">
      <Link href="/" className="text-2xl font-bold text-cyan-700 dark:text-white">
        <div className="flex justify-center">
          {pathname === '/' ? (
            <SiteIcon className="w-8 h-8 fill-slate-500 dark:fill-white" />
          ) : (
            <div>Kevin Leary</div>
          )}
        </div>
      </Link>
      <div className="flex lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="px-2 py-2 text-sm text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            className="fill-current text-black dark:text-slate-200"
            width="24">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
          {/* {isMobileMenuOpen ? 'Close' : 'Menu'} */}
        </button>
      </div>
      <div className="hidden lg:flex">
        {/* Desktop menu links */}
        <Link href="projects" className="px-2 py-2 text-sm">
          Projects
        </Link>
        <Link href="about" className="px-2 py-2 text-sm">
          About
        </Link>
        <Link href="mailto:kevin@ktleary.com" className="px-2 py-2 text-sm">
          Contact
        </Link>
        <Link href="blog" className="px-2 py-2 text-sm">
          Blog
        </Link>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-12 right-4  shadow-md w-40 p-2 space-y-2 bg-white dark:bg-slate-800">
          <Link
            href="/projects"
            className="block text-sm"
            onClick={toggleMobileMenu}>
            Projects
          </Link>
          <Link
            href="/about"
            className="block text-sm"
            onClick={toggleMobileMenu}>
            About
          </Link>
          <Link
            href="mailto:kevin@ktleary.com"
            className="block text-sm"
            onClick={toggleMobileMenu}>
            Contact
          </Link>
          <Link
            href="/blog"
            className="block text-sm"
            onClick={toggleMobileMenu}>
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
