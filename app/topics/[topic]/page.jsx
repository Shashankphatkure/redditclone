"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopicPage() {
  const { topic } = useParams();
  const [activeView, setActiveView] = useState("trending");
  const [sortBy, setSortBy] = useState("popular");

  // Mock topic data
  const topicData = {
    name: topic,
    description: "Explore the latest discussions and content in this topic",
    subscriberCount: 156000,
    activeNow: 1200,
    bannerImage: `https://picsum.photos/seed/${topic}/1000/300`,
    icon: `https://picsum.photos/seed/${topic}icon/200`,
    stats: {
      posts: "2.5M",
      activeUsers: "45.2K",
      dailyGrowth: "+2.3%",
      engagement: "High",
    },
    featuredCommunities: [
      {
        name: "TechNews",
        members: 1250000,
        description: "Latest technology news and updates",
        icon: `https://picsum.photos/seed/technews/100`,
        isVerified: true,
      },
      {
        name: "Programming",
        members: 890000,
        description: "Programming discussions and help",
        icon: `https://picsum.photos/seed/programming/100`,
        isVerified: true,
      },
      // Add more communities...
    ],
    trendingPosts: [
      {
        id: 1,
        title: "Major breakthrough in quantum computing",
        community: "QuantumComputing",
        upvotes: 15200,
        comments: 342,
        timeAgo: "5 hours ago",
        imageUrl: "https://picsum.photos/seed/quantum/800/400",
      },
      // Add more posts...
    ],
  };

  const viewOptions = [
    { id: "trending", label: "Trending", icon: "🔥" },
    { id: "communities", label: "Communities", icon: "👥" },
    { id: "resources", label: "Resources", icon: "📚" },
    { id: "events", label: "Events", icon: "📅" },
  ];

  const sortOptions = [
    { id: "popular", label: "Most Popular" },
    { id: "new", label: "Newest" },
    { id: "active", label: "Most Active" },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative h-64">
        <Image
          src={topicData.bannerImage}
          alt={topicData.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={topicData.icon}
                alt={`${topicData.name} icon`}
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold mb-2">{topicData.name}</h1>
            <p className="text-lg opacity-90">{topicData.description}</p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-background-light dark:bg-background-dark shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(topicData.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                  {value}
                </div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* View Selector */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            {viewOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveView(option.id)}
                className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-colors
                  ${
                    activeView === option.id
                      ? "bg-accent-yellow text-text-primary-light dark:text-text-primary-dark"
                      : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                  }`}
              >
                <span>{option.icon}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-background-light dark:bg-background-dark border border-background-alt-light dark:border-background-alt-dark rounded-lg text-text-primary-light dark:text-text-primary-dark focus:ring-2 focus:ring-accent-yellow"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {activeView === "trending" && (
              <div className="space-y-6">
                {topicData.trendingPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    {post.imageUrl && (
                      <div className="relative h-48">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-4 mt-4 text-text-secondary-light dark:text-text-secondary-dark">
                        <span>↑ {post.upvotes.toLocaleString()}</span>
                        <span>💬 {post.comments} comments</span>
                        <span>{post.timeAgo}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Communities */}
            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Featured Communities
              </h2>
              <div className="space-y-4">
                {topicData.featuredCommunities.map((community) => (
                  <Link
                    key={community.name}
                    href={`/r/${community.name}`}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
                  >
                    <Image
                      src={community.icon}
                      alt={community.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                          r/{community.name}
                        </h3>
                        {community.isVerified && (
                          <span className="text-accent-green">✓</span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        {community.members.toLocaleString()} members
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Topics */}
            {/* Add related topics section here */}
          </div>
        </div>
      </div>
    </div>
  );
}
