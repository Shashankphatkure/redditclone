"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MOCK_POPULAR_POSTS = [
  {
    id: 1,
    title: "Scientists discover new potential treatment for cancer",
    content:
      "Researchers have identified a novel therapeutic approach that shows promising results in early clinical trials...",
    author: "sciencenews",
    authorAvatar: "https://picsum.photos/seed/sciencenews/100",
    community: "Science",
    upvotes: 45200,
    commentCount: 2891,
    timeAgo: "5 hours ago",
    tags: ["Research", "Medicine"],
    awards: ["helpful", "insightful", "wholesome"],
    imageUrl: "https://picsum.photos/seed/science1/800/400",
  },
  {
    id: 2,
    title: "Breaking: Major tech company announces revolutionary AI model",
    content:
      "The new AI model shows unprecedented capabilities in natural language processing and image generation...",
    author: "tech_daily",
    authorAvatar: "https://picsum.photos/seed/techdaily/100",
    community: "Technology",
    upvotes: 38100,
    commentCount: 4523,
    timeAgo: "8 hours ago",
    tags: ["AI", "Technology"],
    awards: ["mindblown", "platinum"],
    imageUrl: "https://picsum.photos/seed/tech1/800/400",
  },
  // Add more mock posts...
];

const REGIONS = [
  { id: "worldwide", label: "Worldwide", icon: "🌎" },
  { id: "united_states", label: "United States", icon: "🇺🇸" },
  { id: "europe", label: "Europe", icon: "🇪🇺" },
  { id: "asia", label: "Asia", icon: "🌏" },
];

const TIME_FILTERS = [
  { id: "today", label: "Today", icon: "📅" },
  { id: "week", label: "This Week", icon: "📆" },
  { id: "month", label: "This Month", icon: "📊" },
  { id: "year", label: "This Year", icon: "📈" },
  { id: "all", label: "All Time", icon: "🏆" },
];

export default function PopularPage() {
  const [timeFilter, setTimeFilter] = useState("today");
  const [location, setLocation] = useState("worldwide");
  const [viewMode, setViewMode] = useState("card"); // card or compact

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-background-light dark:bg-background-dark shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
              Popular Posts
            </h1>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-background-alt-light dark:bg-background-alt-dark rounded-lg p-1">
                <button
                  onClick={() => setViewMode("card")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === "card"
                      ? "bg-accent-yellow text-text-primary-light"
                      : "text-text-secondary-light dark:text-text-secondary-dark"
                  }`}
                >
                  <span className="sr-only">Card View</span>
                  📱
                </button>
                <button
                  onClick={() => setViewMode("compact")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === "compact"
                      ? "bg-accent-yellow text-text-primary-light"
                      : "text-text-secondary-light dark:text-text-secondary-dark"
                  }`}
                >
                  <span className="sr-only">Compact View</span>
                  📑
                </button>
              </div>

              {/* Filters */}
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-2 bg-background-light dark:bg-background-dark border border-background-alt-light dark:border-background-alt-dark rounded-lg text-text-primary-light dark:text-text-primary-dark focus:ring-2 focus:ring-accent-yellow"
              >
                {TIME_FILTERS.map((filter) => (
                  <option key={filter.id} value={filter.id}>
                    {filter.icon} {filter.label}
                  </option>
                ))}
              </select>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-2 bg-background-light dark:bg-background-dark border border-background-alt-light dark:border-background-alt-dark rounded-lg text-text-primary-light dark:text-text-primary-dark focus:ring-2 focus:ring-accent-yellow"
              >
                {REGIONS.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.icon} {region.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {MOCK_POPULAR_POSTS.map((post) => (
            <article
              key={post.id}
              className={`bg-background-light dark:bg-background-dark rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden
                ${viewMode === "compact" ? "p-4" : ""}`}
            >
              {viewMode === "card" ? (
                // Card View
                <div>
                  {/* Post Header */}
                  <div className="p-4 pb-0">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={post.authorAvatar}
                        alt={post.author}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <Link
                        href={`/r/${post.community}`}
                        className="text-text-primary-light dark:text-text-primary-dark hover:underline font-medium"
                      >
                        r/{post.community}
                      </Link>
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">
                        •
                      </span>
                      <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        Posted by u/{post.author} {post.timeAgo}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mt-2">
                      {post.title}
                    </h2>
                  </div>

                  {/* Post Image */}
                  {post.imageUrl && (
                    <div className="relative h-64 mt-4">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="p-4">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">
                      {post.content}
                    </p>

                    {/* Awards */}
                    {post.awards && (
                      <div className="flex items-center space-x-2 mt-4">
                        {post.awards.map((award) => (
                          <span
                            key={award}
                            className="px-2 py-1 text-xs rounded-full bg-accent-yellow/10 text-accent-yellow-dark"
                          >
                            {award}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Interaction Buttons */}
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-1">
                        <button className="p-2 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded-full">
                          ↑
                        </button>
                        <span className="font-medium">
                          {post.upvotes.toLocaleString()}
                        </span>
                        <button className="p-2 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded-full">
                          ↓
                        </button>
                      </div>
                      <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-2 rounded-full">
                        <span>💬</span>
                        <span>
                          {post.commentCount.toLocaleString()} Comments
                        </span>
                      </button>
                      <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-2 rounded-full">
                        <span>↗️</span>
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Compact View
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center space-y-1">
                    <button className="p-1 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded">
                      ↑
                    </button>
                    <span className="text-sm font-medium">
                      {post.upvotes.toLocaleString()}
                    </span>
                    <button className="p-1 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded">
                      ↓
                    </button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      <Link
                        href={`/r/${post.community}`}
                        className="text-text-primary-light dark:text-text-primary-dark hover:underline font-medium"
                      >
                        r/{post.community}
                      </Link>
                      <span>•</span>
                      <span>Posted by u/{post.author}</span>
                      <span>•</span>
                      <span>{post.timeAgo}</span>
                    </div>
                    <h2 className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark mt-1">
                      {post.title}
                    </h2>
                    <div className="flex items-center space-x-4 mt-2">
                      <button className="flex items-center space-x-1 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-2 py-1 rounded">
                        <span>💬</span>
                        <span>{post.commentCount} Comments</span>
                      </button>
                      <button className="flex items-center space-x-1 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-2 py-1 rounded">
                        <span>↗️</span>
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
