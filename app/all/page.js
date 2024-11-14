"use client";
import { useState } from "react";
import { mockPosts } from "../data/mockData";
import PostCard from "../components/PostCard";

export default function AllPage() {
  const [sortBy, setSortBy] = useState("new");

  const sortPosts = (posts) => {
    switch (sortBy) {
      case "new":
        return [...posts].sort(
          (a, b) => new Date(b.timeAgo) - new Date(a.timeAgo)
        );
      case "top":
        return [...posts].sort((a, b) => b.upvotes - a.upvotes);
      case "controversial":
        return [...posts].sort((a, b) => b.comments - a.comments);
      default:
        return posts;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Posts</h1>
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
      </div>
      <div className="space-y-4">
        {sortPosts(mockPosts).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
