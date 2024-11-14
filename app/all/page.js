"use client";
import { useState, useEffect } from "react";
import { mockPosts } from "../data/mockData";
import PostCard from "../components/PostCard";

export default function AllPage() {
  const [sortBy, setSortBy] = useState("new");
  const [filter, setFilter] = useState("all"); // all, media, text, links
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      let filteredPosts = [...mockPosts];

      // Apply filters
      if (filter === "media") {
        filteredPosts = filteredPosts.filter((post) => post.image);
      } else if (filter === "text") {
        filteredPosts = filteredPosts.filter((post) => !post.image);
      }

      // Apply sorting
      filteredPosts.sort((a, b) => {
        switch (sortBy) {
          case "new":
            return new Date(b.timeAgo) - new Date(a.timeAgo);
          case "top":
            return b.upvotes - a.upvotes;
          case "controversial":
            return b.comments - a.comments;
          default:
            return 0;
        }
      });

      setPosts(filteredPosts);
      setLoading(false);
    }, 500);
  }, [sortBy, filter]);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex space-x-2">
            {["new", "top", "controversial"].map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`px-4 py-2 rounded-full transition-all
                  ${
                    sortBy === option
                      ? "bg-accent-yellow text-white font-medium"
                      : "hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                  }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex space-x-2">
            {["all", "media", "text", "links"].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-full transition-all text-sm
                  ${
                    filter === option
                      ? "bg-gray-200 dark:bg-gray-700 font-medium"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts */}
      {loading ? (
        <div className="text-center py-8">
          <div className="w-8 h-8 border-4 border-accent-yellow border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
