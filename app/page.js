"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mockPosts, popularCommunities, trendingTopics } from "./data/mockData";
import PostCard from "./components/PostCard";
import TrendingTopics from "./components/TrendingTopics";

export default function Home() {
  const [postType, setPostType] = useState("text");
  const [sortBy, setSortBy] = useState("hot");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Sidebar - Quick Navigation */}
      <div className="hidden lg:block lg:col-span-2 space-y-4">
        <nav className="space-y-2">
          {["Home", "Popular", "All", "Random"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
            >
              <span className="text-xl">
                {item === "Home"
                  ? "🏠"
                  : item === "Popular"
                  ? "🔥"
                  : item === "All"
                  ? "🌎"
                  : "🎲"}
              </span>
              <span>{item}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-background-alt-light dark:border-background-alt-dark pt-4">
          <h3 className="font-medium mb-2">My Communities</h3>
          {popularCommunities.slice(0, 3).map((community) => (
            <Link
              key={community.name}
              href={`/r/${community.name.toLowerCase()}`}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
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

      {/* Main Content */}
      <div className="col-span-1 lg:col-span-7 space-y-4">
        {/* Create Post Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse shadow-lg ring-4 ring-purple-100 dark:ring-gray-700" />
            <input
              type="text"
              placeholder="Create a post..."
              className="flex-1 bg-gray-50 dark:bg-gray-700/50 rounded-2xl py-4 px-8 focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-gray-700 dark:text-gray-200 text-lg font-medium"
            />
          </div>

          {/* Post Type Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                type: "text",
                icon: "📝",
                label: "Text Post",
                color: "from-blue-500 to-cyan-400",
              },
              {
                type: "image",
                icon: "🖼️",
                label: "Share Image",
                color: "from-green-500 to-emerald-400",
              },
              {
                type: "link",
                icon: "🔗",
                label: "Share Link",
                color: "from-orange-500 to-amber-400",
              },
              {
                type: "poll",
                icon: "📊",
                label: "Create Poll",
                color: "from-purple-500 to-pink-400",
              },
            ].map(({ type, icon, label, color }) => (
              <button
                key={type}
                onClick={() => setPostType(type)}
                className={`p-4 rounded-xl flex flex-col items-center justify-center space-y-2 transition-all duration-300
                  ${
                    postType === type
                      ? `bg-gradient-to-r ${color} text-white shadow-lg scale-105`
                      : "bg-gray-50 dark:bg-gray-700/50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-600 hover:scale-105"
                  }`}
              >
                <span className="text-2xl mb-1">{icon}</span>
                <span className="font-medium text-sm whitespace-nowrap">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
          {["hot", "new", "top", "controversial"].map((option) => (
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

        {/* Posts Feed */}
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block lg:col-span-3 space-y-4">
        {/* Premium Promotion */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-yellow to-accent-green flex items-center justify-center">
              ⭐
            </div>
            <div>
              <h3 className="font-bold">Reddit Premium</h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                The best Reddit experience
              </p>
            </div>
          </div>
          <Link href="/premium" className="button-primary w-full">
            Try Now
          </Link>
        </div>

        {/* Trending Topics */}
        <TrendingTopics />

        {/* Popular Communities */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Popular Communities</h2>
            <Link
              href="/communities"
              className="text-accent-yellow hover:text-accent-yellow-hover text-sm"
            >
              See All
            </Link>
          </div>
          <div className="space-y-4">
            {popularCommunities.map((community) => (
              <Link
                key={community.name}
                href={`/r/${community.name.toLowerCase()}`}
                className="flex items-center space-x-3 hover-effect p-2 rounded-lg"
              >
                <Image
                  src={community.image}
                  alt={community.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium">r/{community.name}</h3>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {community.members} members
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
