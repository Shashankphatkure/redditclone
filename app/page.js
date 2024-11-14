"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mockPosts, popularCommunities, trendingTopics } from "./data/mockData";
import PostCard from "./components/PostCard";

export default function Home() {
  const [postType, setPostType] = useState("text"); // text, image, link, poll
  const [sortBy, setSortBy] = useState("hot"); // hot, new, top, controversial

  return (
    <div className="grid grid-cols-12 gap-6 bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen">
      {/* Left Sidebar - Quick Navigation */}
      <div className="col-span-2 hidden lg:block space-y-4 p-4 sticky top-20 h-fit">
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
          {/* Add your communities list here */}
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-12 lg:col-span-7 px-4">
        {/* Create Post Card */}
        <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm mb-6">
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-yellow-dark to-accent-green-dark animate-pulse" />
              <input
                type="text"
                placeholder="Create Post"
                className="flex-1 bg-background-alt-light dark:bg-background-alt-dark rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition-all"
              />
            </div>
          </div>

          {/* Post Type Selector */}
          <div className="flex border-t border-background-alt-light dark:border-background-alt-dark">
            {[
              { type: "text", icon: "📝", label: "Text" },
              { type: "image", icon: "🖼️", label: "Image" },
              { type: "link", icon: "🔗", label: "Link" },
              { type: "poll", icon: "📊", label: "Poll" },
            ].map(({ type, icon, label }) => (
              <button
                key={type}
                onClick={() => setPostType(type)}
                className={`flex-1 p-3 flex items-center justify-center space-x-2 transition-colors
                  ${
                    postType === type
                      ? "bg-accent-yellow/10 text-accent-yellow-dark"
                      : "hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                  }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-4 mb-6 bg-background-light dark:bg-background-dark p-3 rounded-lg shadow-sm">
          {["hot", "new", "top", "controversial"].map((option) => (
            <button
              key={option}
              onClick={() => setSortBy(option)}
              className={`px-4 py-2 rounded-full transition-all
                ${
                  sortBy === option
                    ? "bg-accent-yellow text-text-primary-light font-medium"
                    : "hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 hidden lg:block space-y-6 p-4">
        {/* Premium Promotion Card */}
        <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
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
          <button className="w-full bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark py-2 rounded-full font-medium transition-colors">
            Try Now
          </button>
        </div>

        {/* Trending Topics */}
        <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-bold mb-4">Trending Today</h2>
          <div className="space-y-4">
            {trendingTopics.map((topic, index) => (
              <div
                key={topic.topic}
                className="group cursor-pointer relative overflow-hidden rounded-lg"
              >
                <div className="relative h-24">
                  <Image
                    src={topic.image}
                    alt={topic.topic}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-medium text-white">{topic.topic}</h3>
                    <p className="text-xs text-gray-300">{topic.posts} posts</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Communities */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Popular Communities</h2>
            <Link
              href="/communities"
              className="text-sm text-orange-500 hover:text-orange-400"
            >
              See All
            </Link>
          </div>
          <div className="space-y-4">
            <Link
              href="http://localhost:3000/r/Technology"
              className="flex items-center space-x-3 hover-effect p-2 rounded-lg"
            >
              <Image
                src="https://picsum.photos/seed/tech/50"
                alt="Technology"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">r/Technology</h3>
                <p className="text-sm text-gray-400">2.1M members</p>
              </div>
            </Link>
            <Link
              href="http://localhost:3000/r/Gaming"
              className="flex items-center space-x-3 hover-effect p-2 rounded-lg"
            >
              <Image
                src="https://picsum.photos/seed/gaming/50"
                alt="Gaming"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">r/Gaming</h3>
                <p className="text-sm text-gray-400">1.8M members</p>
              </div>
            </Link>
            <Link
              href="http://localhost:3000/r/Science"
              className="flex items-center space-x-3 hover-effect p-2 rounded-lg"
            >
              <Image
                src="https://picsum.photos/seed/science/50"
                alt="Science"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">r/Science</h3>
                <p className="text-sm text-gray-400">3.2M members</p>
              </div>
            </Link>
            <Link
              href="http://localhost:3000/r/Movies"
              className="flex items-center space-x-3 hover-effect p-2 rounded-lg"
            >
              <Image
                src="https://picsum.photos/seed/movies/50"
                alt="Movies"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">r/Movies</h3>
                <p className="text-sm text-gray-400">890K members</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="#" className="hover:text-white">
              About
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Content Policy
            </Link>
          </div>
          <p> 2024 RedditAI Clone. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
