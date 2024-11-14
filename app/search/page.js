"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All", icon: "🔍" },
    { id: "posts", label: "Posts", icon: "📝" },
    { id: "communities", label: "Communities", icon: "👥" },
    { id: "people", label: "People", icon: "👤" },
    { id: "comments", label: "Comments", icon: "💬" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearching(true);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setTimeout(() => setIsSearching(false), 1500); // Simulate search delay
    }
  };

  return (
    <div className="min-h-screen">
      {/* Search Header */}
      <div className="sticky top-0 bg-background-light dark:bg-background-dark border-b border-background-alt-light dark:border-background-alt-dark z-20 pb-4">
        <div className="max-w-4xl mx-auto px-4">
          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative mt-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything..."
              className="w-full bg-background-alt-light dark:bg-background-alt-dark rounded-2xl py-4 px-6 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-accent-yellow hover:bg-accent-yellow-hover text-white rounded-full transition-colors"
            >
              {isSearching ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "🔍"
              )}
            </button>
          </form>

          {/* Filters */}
          <div className="flex items-center space-x-2 mt-4 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? "bg-accent-yellow text-white"
                    : "bg-background-alt-light dark:bg-background-alt-dark hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {isSearching ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-16 h-16 border-4 border-accent-yellow border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
              Searching across EduReddit...
            </p>
          </div>
        ) : query ? (
          <div className="space-y-6">
            {/* Search Results Cards */}
            {[1, 2, 3].map((result) => (
              <div
                key={result}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        r/technology
                      </span>
                      <span>•</span>
                      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        Posted by u/techie123
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Search Result Title {result}
                    </h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                      This is a sample search result description that matches
                      your query...
                    </p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-text-secondary-light hover:text-accent-yellow">
                        <span>⬆️</span>
                        <span>3.2k</span>
                      </button>
                      <button className="flex items-center space-x-1 text-text-secondary-light hover:text-accent-yellow">
                        <span>💬</span>
                        <span>245 comments</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-2">Search EduReddit</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Find posts, communities, and people
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
