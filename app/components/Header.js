"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Popular", href: "/popular" },
    { name: "Topics", href: "/topics" },
    { name: "Communities", href: "/communities" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-background-light dark:bg-background-dark transition-shadow duration-200
        ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="RedditAI"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                RedditAI
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark
                    hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchBar variant="compact" placeholder="Search RedditAI" />
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-background-alt-light dark:hover:bg-background-alt-dark
                text-text-secondary-light dark:text-text-secondary-dark transition-colors"
            >
              {isDarkMode ? "🌞" : "🌙"}
            </button>

            {/* Get App Button */}
            <button
              className="hidden sm:block px-4 py-2 bg-accent-yellow hover:bg-accent-yellow-hover
              dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark rounded-full
              font-medium transition-colors"
            >
              Get App
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-background-alt-light
                  dark:hover:bg-background-alt-dark transition-colors"
              >
                <Image
                  src="https://picsum.photos/seed/user/32"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="hidden sm:block text-text-secondary-light dark:text-text-secondary-dark">
                  Username
                </span>
                <span className="text-text-secondary-light dark:text-text-secondary-dark">
                  ▼
                </span>
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-background-light dark:bg-background-dark
                  rounded-lg shadow-lg border border-background-alt-light dark:border-background-alt-dark
                  overflow-hidden"
                >
                  <div className="py-1">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-text-secondary-light dark:text-text-secondary-dark
                        hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-text-secondary-light dark:text-text-secondary-dark
                        hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                    >
                      Settings
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-interactive-red
                        hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
