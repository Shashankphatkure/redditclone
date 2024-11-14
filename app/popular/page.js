"use client";
import { useState } from "react";
import { mockPosts, popularCommunities } from "../data/mockData";
import PostCard from "../components/PostCard";
import Link from "next/link";
import Image from "next/image";

export default function PopularPage() {
  const [timeFilter, setTimeFilter] = useState("today"); // today, week, month, year, all
  const [sortBy, setSortBy] = useState("hot");

  const sortedPosts = [...mockPosts].sort((a, b) => {
    switch (sortBy) {
      case "hot":
        return b.upvotes / b.comments - a.upvotes / a.comments;
      case "top":
        return b.upvotes - a.upvotes;
      case "new":
        return new Date(b.timeAgo) - new Date(a.timeAgo);
      case "controversial":
        return b.comments - a.comments;
      default:
        return 0;
    }
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Sidebar */}
      <div className="hidden lg:block lg:col-span-2 space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <h2 className="font-bold mb-4">Popular Communities</h2>
          <div className="space-y-2">
            {popularCommunities.map((community) => (
              <Link
                key={community.name}
                href={`/r/${community.name.toLowerCase()}`}
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Image
                  src={community.image}
                  alt={community.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>r/{community.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-7">
        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg mb-4">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {["hot", "new", "top", "controversial"].map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`px-6 py-3 font-medium transition-colors relative
                  ${sortBy === option ? "text-accent-yellow" : ""}
                  hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
                {sortBy === option && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-yellow"></div>
                )}
              </button>
            ))}
          </div>
          {sortBy === "top" && (
            <div className="flex p-2 space-x-2">
              {["today", "week", "month", "year", "all"].map((time) => (
                <button
                  key={time}
                  onClick={() => setTimeFilter(time)}
                  className={`px-3 py-1 rounded-full text-sm
                    ${
                      timeFilter === time
                        ? "bg-accent-yellow text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  {time.charAt(0).toUpperCase() + time.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block lg:col-span-3 space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <h2 className="font-bold mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Technology",
              "Gaming",
              "Science",
              "Art",
              "Music",
              "Sports",
              "News",
              "Politics",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
