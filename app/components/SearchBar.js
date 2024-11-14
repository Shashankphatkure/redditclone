import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RECENT_SEARCHES = [
  "machine learning",
  "web development",
  "data science",
  "artificial intelligence",
];

const TRENDING_SEARCHES = [
  { query: "quantum computing", growth: "+250%" },
  { query: "blockchain development", growth: "+180%" },
  { query: "cybersecurity trends", growth: "+120%" },
];

export default function SearchBar({
  variant = "default",
  placeholder,
  defaultValue = "",
}) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchBarRef = useRef(null);

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <div ref={searchBarRef} className="relative">
      <div
        className={`relative flex items-center ${
          variant === "main" ? "max-w-3xl mx-auto" : "w-full"
        }`}
      >
        {/* Search Icon */}
        <div className="absolute left-4 text-text-secondary-light dark:text-text-secondary-dark">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            setIsFocused(true);
            setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Search..."}
          className={`w-full py-3 pl-12 pr-4 bg-background-alt-light dark:bg-background-alt-dark rounded-lg
            text-text-primary-light dark:text-text-primary-dark placeholder-text-secondary-light
            dark:placeholder-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow
            transition-all ${variant === "main" ? "text-lg" : "text-base"}`}
        />

        {/* Search Button (only for main variant) */}
        {variant === "main" && (
          <button
            onClick={() => handleSearch(query)}
            className="absolute right-2 px-4 py-1.5 bg-accent-yellow hover:bg-accent-yellow-hover
              dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark rounded-full
              font-medium transition-colors"
          >
            Search
          </button>
        )}
      </div>

      {/* Search Suggestions Dropdown */}
      {showSuggestions && (
        <div
          className="absolute w-full mt-2 bg-background-light dark:bg-background-dark rounded-lg shadow-lg
          border border-background-alt-light dark:border-background-alt-dark overflow-hidden z-50"
        >
          {/* Recent Searches */}
          <div className="p-4">
            <h3 className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">
              Recent Searches
            </h3>
            <div className="space-y-2">
              {RECENT_SEARCHES.map((search) => (
                <button
                  key={search}
                  onClick={() => handleSearch(search)}
                  className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-background-alt-light
                    dark:hover:bg-background-alt-dark transition-colors text-left"
                >
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    🕒
                  </span>
                  <span className="text-text-primary-light dark:text-text-primary-dark">
                    {search}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Trending Searches */}
          <div className="border-t border-background-alt-light dark:border-background-alt-dark p-4">
            <h3 className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">
              Trending Searches
            </h3>
            <div className="space-y-2">
              {TRENDING_SEARCHES.map((item) => (
                <button
                  key={item.query}
                  onClick={() => handleSearch(item.query)}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-background-alt-light
                    dark:hover:bg-background-alt-dark transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">
                      🔥
                    </span>
                    <span className="text-text-primary-light dark:text-text-primary-dark">
                      {item.query}
                    </span>
                  </div>
                  <span className="text-sm text-accent-green">
                    {item.growth}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-background-alt-light dark:border-background-alt-dark p-4">
            <div className="flex items-center justify-between text-sm">
              <Link
                href="/search/advanced"
                className="text-interactive-blue hover:text-interactive-blue-hover dark:text-interactive-blue-dark"
              >
                Advanced Search
              </Link>
              <button
                onClick={() => setShowSuggestions(false)}
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light
                  dark:hover:text-text-primary-dark"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
