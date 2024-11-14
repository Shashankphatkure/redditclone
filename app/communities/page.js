"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "technology", label: "Technology" },
  { id: "gaming", label: "Gaming" },
  { id: "science", label: "Science" },
  { id: "art", label: "Art & Design" },
  { id: "music", label: "Music" },
  { id: "sports", label: "Sports" },
];

const MOCK_COMMUNITIES = [
  {
    name: "Technology",
    description:
      "The latest tech news, discussions, and innovations from around the world.",
    memberCount: 12500000,
    activeNow: 15600,
    bannerImage: "https://picsum.photos/seed/tech/800/200",
    icon: "https://picsum.photos/seed/techicon/200/200",
    category: "technology",
    tags: ["Tech News", "Programming", "Gadgets"],
    trending: true,
    verified: true,
  },
  {
    name: "Gaming",
    description:
      "A place for gamers to discuss their favorite games, share tips, and stay updated on gaming news.",
    memberCount: 8900000,
    activeNow: 42000,
    bannerImage: "https://picsum.photos/seed/gaming/800/200",
    icon: "https://picsum.photos/seed/gameicon/200/200",
    category: "gaming",
    tags: ["Games", "Esports", "Reviews"],
    trending: true,
  },
  // Add more communities...
];

export default function CommunitiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular"); // popular, new, trending

  const filteredCommunities = MOCK_COMMUNITIES.filter(
    (community) =>
      (activeCategory === "all" || community.category === activeCategory) &&
      (searchQuery === "" ||
        community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header Section */}
      <div className="relative h-48 bg-gradient-to-r from-accent-yellow to-accent-green overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">Discover Communities</h1>
            <p className="text-lg opacity-90">
              Find your people in thousands of communities
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search communities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-background-light dark:bg-background-dark border border-background-alt-light dark:border-background-alt-dark rounded-lg focus:ring-2 focus:ring-accent-yellow text-text-primary-light dark:text-text-primary-dark"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors
                  ${
                    activeCategory === category.id
                      ? "bg-accent-yellow text-text-primary-light font-medium"
                      : "bg-background-alt-light dark:bg-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light/80"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-background-light dark:bg-background-dark border border-background-alt-light dark:border-background-alt-dark rounded-lg text-text-primary-light dark:text-text-primary-dark focus:ring-2 focus:ring-accent-yellow"
            >
              <option value="popular">Most Popular</option>
              <option value="new">Newest</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((community) => (
            <Link
              key={community.name}
              href={`/r/${community.name}`}
              className="group bg-background-light dark:bg-background-dark rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* Banner Image */}
              <div className="relative h-32">
                <Image
                  src={community.bannerImage}
                  alt={community.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {community.trending && (
                  <span className="absolute top-2 right-2 px-2 py-1 bg-accent-yellow text-xs font-medium rounded-full">
                    🔥 Trending
                  </span>
                )}
              </div>

              {/* Community Info */}
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  <Image
                    src={community.icon}
                    alt={community.name}
                    width={48}
                    height={48}
                    className="rounded-full border-4 border-background-light dark:border-background-dark -mt-8"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                        r/{community.name}
                      </h3>
                      {community.verified && (
                        <span className="text-accent-green">✓</span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                      {community.memberCount.toLocaleString()} members
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-text-secondary-light dark:text-text-secondary-dark line-clamp-2">
                  {community.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {community.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-background-alt-light dark:bg-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Active Now Indicator */}
                <div className="mt-4 flex items-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse mr-2" />
                  {community.activeNow.toLocaleString()} active now
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
