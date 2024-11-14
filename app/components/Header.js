"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { headerMenuItems } from "../data/mockData";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-background-alt-light dark:border-background-alt-dark">
      <div className="max-w-[1800px] mx-auto px-4 h-14 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-xl hidden sm:inline">
              EduReddit
            </span>
          </Link>

          {/* Quick Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/all"
              className="hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-1.5 rounded-md"
            >
              All
            </Link>
            <Link
              href="/random"
              className="hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-1.5 rounded-md"
            >
              Random
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-2">
            {headerMenuItems.map((menu) => (
              <div key={menu.label} className="relative">
                <Link
                  href={`/${menu.label.toLowerCase()}`}
                  className="px-3 py-1.5 rounded-md hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
                  onMouseEnter={() => setActiveMenu(menu.label)}
                >
                  {menu.label}
                </Link>
                {activeMenu === menu.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-background-light dark:bg-background-dark rounded-lg shadow-lg border border-background-alt-light dark:border-background-alt-dark"
                    onMouseEnter={() => setActiveMenu(menu.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item.name}
                        href={`/${menu.label.toLowerCase()}/${item.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

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
          <Link
            href="/premium"
            className="hidden sm:flex items-center space-x-1 px-4 py-1.5 text-accent-yellow hover:text-accent-yellow-hover transition-colors"
          >
            <span>⭐</span>
            <span>Premium</span>
          </Link>
          <Link
            href="/get-app"
            className="hidden sm:block px-4 py-1.5 bg-background-alt-light dark:bg-background-alt-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary-light dark:text-text-primary-dark rounded-full transition-colors"
          >
            Get App
          </Link>
          <Link
            href="/signin"
            className="px-4 py-1.5 bg-accent-yellow hover:bg-accent-yellow-hover text-white rounded-full font-medium transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
