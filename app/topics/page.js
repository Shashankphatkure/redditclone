"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TOPICS = [
  {
    id: 1,
    name: "Gaming",
    description: "Video games, board games, and everything in between",
    icon: "🎮",
    communities: 1243,
    members: "12.5M",
    trending: true,
    bannerImage: "https://picsum.photos/seed/gaming/800/200",
    popularCommunities: [
      { name: "PCGaming", members: "5.2M" },
      { name: "PlayStation", members: "4.8M" },
      { name: "XboxSeriesX", members: "3.9M" },
    ],
    growth: "+15%",
  },
  {
    id: 2,
    name: "Sports",
    description: "News and discussions about all sports",
    icon: "⚽",
    communities: 892,
    members: "8.9M",
    bannerImage: "https://picsum.photos/seed/sports/800/200",
    popularCommunities: [
      { name: "Soccer", members: "3.8M" },
      { name: "NBA", members: "5.1M" },
      { name: "NFL", members: "4.2M" },
    ],
    growth: "+8%",
  },
  // Add more topics...
];

const CATEGORIES = [
  { id: "all", label: "All Topics" },
  { id: "entertainment", label: "Entertainment" },
  { id: "technology", label: "Technology" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "education", label: "Education" },
];

export default function TopicsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-accent-yellow to-accent-green overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Discover Your Interests</h1>
            <p className="text-lg opacity-90">
              Join communities and connect with people who share your passions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-background-light dark:bg-background-dark border border-background-alt-light dark:border-background-alt-dark rounded-lg focus:ring-2 focus:ring-accent-yellow text-text-primary-light dark:text-text-primary-dark"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
          </div>

          {/* Category Filters and View Toggle */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 overflow-x-auto">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors
                    ${
                      activeCategory === category.id
                        ? "bg-accent-yellow text-text-primary-light font-medium"
                        : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-accent-yellow text-text-primary-light"
                    : "text-text-secondary-light dark:text-text-secondary-dark"
                }`}
              >
                ⊞
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-accent-yellow text-text-primary-light"
                    : "text-text-secondary-light dark:text-text-secondary-dark"
                }`}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Topics Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-6"
          }
        >
          {TOPICS.map((topic) => (
            <Link
              key={topic.id}
              href={`/topics/${topic.name.toLowerCase()}`}
              className={`block bg-background-light dark:bg-background-dark rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden
                ${viewMode === "list" ? "flex items-start space-x-4" : ""}`}
            >
              {/* Banner Image */}
              <div
                className={`relative ${
                  viewMode === "list" ? "w-48 h-32" : "h-40"
                }`}
              >
                <Image
                  src={topic.bannerImage}
                  alt={topic.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
                {topic.trending && (
                  <span className="absolute top-2 right-2 px-2 py-1 bg-accent-yellow text-xs font-medium rounded-full">
                    🔥 Trending
                  </span>
                )}
              </div>

              <div className="p-4 flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{topic.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {topic.members} members • {topic.growth} this month
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  {topic.description}
                </p>

                {/* Popular Communities */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                    Popular Communities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {topic.popularCommunities.map((community) => (
                      <span
                        key={community.name}
                        className="text-xs px-2 py-1 rounded-full bg-background-alt-light dark:bg-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark"
                      >
                        r/{community.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
