"use client";

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-background-alt-light dark:border-background-alt-dark">
        <div className="max-w-[1800px] mx-auto px-4 h-14 flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🎯</span>
              <span className="font-bold text-xl hidden sm:inline">
                RedditClone
              </span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:block relative flex-grow max-w-xl">
              <input
                type="text"
                placeholder="Search RedditClone"
                className="w-full bg-background-alt-light dark:bg-background-alt-dark rounded-full py-1.5 px-4 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition-all"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block px-4 py-1.5 bg-background-alt-light dark:bg-background-alt-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary-light dark:text-text-primary-dark rounded-full transition-colors">
              Get App
            </button>
            <button className="px-4 py-1.5 bg-accent-yellow hover:bg-accent-yellow-hover text-white rounded-full font-medium transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
