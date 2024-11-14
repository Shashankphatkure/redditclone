"use client";

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-background-alt-light dark:border-background-alt-dark">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-xl">RedditClone</span>
          </Link>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-1.5 bg-accent-yellow hover:bg-accent-yellow-hover text-white rounded-full font-medium">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
