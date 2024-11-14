"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Image from "next/image";

// Enhanced mock data with more fields
const mockSearch = async (query, filter) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const allResults = [
    {
      id: 1,
      type: "post",
      title: "Research Methods in Computer Science",
      description: "A comprehensive guide to research methodologies in CS...",
      url: "/post/1",
      date: "2024-01-15",
      author: "techresearcher",
      community: "ComputerScience",
      upvotes: 1234,
      comments: 25,
      awards: ["helpful", "insightful"],
      tags: ["Research", "Computer Science", "Methodology"],
    },
    {
      id: 2,
      type: "user",
      title: "Dr. Jane Smith",
      description: "Professor of Computer Science at MIT",
      url: "/user/jsmith",
      date: "2024-01-10",
      karma: 45000,
      badges: ["Verified", "Top Contributor"],
      avatar: `https://picsum.photos/seed/jsmith/200`,
      topCommunities: ["ComputerScience", "MachineLearning", "Programming"],
    },
    // Add more mock results...
  ];

  // Filter based on type and query
  return allResults.filter(
    (item) =>
      (filter === "all" || item.type === filter) &&
      (item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()))
  );
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("relevant");

  const filters = [
    { id: "all", label: "All" },
    { id: "post", label: "Posts" },
    { id: "user", label: "Users" },
    { id: "community", label: "Communities" },
  ];

  const sortOptions = [
    { id: "relevant", label: "Most Relevant" },
    { id: "recent", label: "Most Recent" },
    { id: "upvoted", label: "Most Upvoted" },
    { id: "commented", label: "Most Commented" },
  ];

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const searchResults = await mockSearch(query, activeFilter);
        setResults(searchResults);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [query, activeFilter]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Search Header */}
      <div className="sticky top-0 bg-background-light dark:bg-background-dark shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <SearchBar
            variant="main"
            placeholder="Search posts, users, or communities..."
            defaultValue={query}
          />

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 space-y-4 sm:space-y-0">
            <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors
                    ${
                      activeFilter === filter.id
                        ? "bg-accent-yellow text-text-primary-light font-medium"
                        : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-background-alt-light dark:border-background-alt-dark text-text-primary-light dark:text-text-primary-dark focus:ring-2 focus:ring-accent-yellow"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent-yellow border-t-transparent"></div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Searching...
            </p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result) => (
              <SearchResultCard key={result.id} result={result} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
              No results found
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Try different keywords or remove search filters
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
              Start your search
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Discover posts, users, and communities
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// New component for search result cards
function SearchResultCard({ result }) {
  if (result.type === "user") {
    return (
      <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-4">
          <Image
            src={result.avatar}
            alt={result.title}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark">
              {result.title}
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              {result.description}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              {result.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-1 text-xs rounded-full bg-accent-yellow/10 text-accent-yellow-dark"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <button className="px-4 py-2 rounded-full bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark">
            Follow
          </button>
        </div>
      </div>
    );
  }

  // Default post/community card
  return (
    <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark">
            {result.title}
          </h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">
            {result.description}
          </p>
          {result.tags && (
            <div className="flex flex-wrap gap-2 mt-2">
              {result.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-background-alt-light dark:bg-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
