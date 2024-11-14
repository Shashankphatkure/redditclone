"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

// Mock data - replace with actual API calls
const mockSearch = async (query) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      type: "post",
      title: "Research Methods in Computer Science",
      description: "A comprehensive guide to research methodologies in CS...",
      url: "/post/1",
      date: "2024-01-15",
      comments: 25,
    },
    {
      id: 2,
      type: "user",
      title: "Dr. Jane Smith",
      description: "Professor of Computer Science at MIT",
      url: "/user/jsmith",
      date: "2024-01-10",
    },
    {
      id: 3,
      type: "community",
      title: "Machine Learning Research",
      description: "A community for ML researchers and enthusiasts",
      url: "/r/mlresearch",
      date: "2024-01-01",
    },
    // Add more mock results...
  ].filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const searchResults = await mockSearch(query);
        setResults(searchResults);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [query]);

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Search
          </h1>
          <SearchBar
            variant="main"
            placeholder="Search posts, users, or communities..."
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <SearchResults results={results} query={query} />
        )}
      </div>
    </main>
  );
}
