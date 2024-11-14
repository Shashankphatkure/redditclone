"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MOCK_USER_POSTS = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    content:
      "An analysis of how artificial intelligence is transforming medical diagnosis...",
    community: "Technology",
    upvotes: 1523,
    comments: 89,
    timeAgo: "2 days ago",
    awards: ["helpful", "insightful"],
  },
  // Add more mock posts...
];

const MOCK_USER_COMMENTS = [
  {
    id: 1,
    content: "This is a fascinating perspective on quantum computing...",
    postTitle: "Understanding Quantum Supremacy",
    community: "Science",
    upvotes: 234,
    timeAgo: "1 day ago",
  },
  // Add more mock comments...
];

const MOCK_USER_ACHIEVEMENTS = [
  {
    id: 1,
    title: "Top Contributor",
    description: "Among the top 1% of contributors in r/Technology",
    icon: "🏆",
    date: "2024-01",
  },
  {
    id: 2,
    title: "Verified Expert",
    description: "Recognized expert in Computer Science",
    icon: "✓",
    date: "2023-12",
  },
  // Add more achievements...
];

export default function UserProfilePage() {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");
  const [postSort, setPostSort] = useState("hot");

  // Mock user data (replace with actual API call)
  const userData = {
    username,
    displayName: "John Doe",
    bio: "Tech enthusiast and community moderator | AI Researcher | Open Source Contributor",
    joinDate: "2023-01-15",
    karma: 15234,
    avatarUrl: `https://picsum.photos/seed/${username}/200`,
    bannerUrl: `https://picsum.photos/seed/${username}banner/1000/300`,
    badges: ["Verified", "Top Contributor", "Premium User"],
    stats: {
      posts: 156,
      comments: 892,
      awardsGiven: 45,
      awardsReceived: 78,
    },
    topCommunities: [
      { name: "Technology", role: "Moderator", members: "2.1M" },
      { name: "Programming", role: "Contributor", members: "1.8M" },
      { name: "Science", role: "Member", members: "3.2M" },
    ],
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Banner */}
      <div className="relative h-64">
        <Image
          src={userData.bannerUrl}
          alt="Profile Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
      </div>

      {/* Profile Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
        <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src={userData.avatarUrl}
              alt={userData.displayName}
              width={128}
              height={128}
              className="rounded-full border-4 border-background-light dark:border-background-dark"
            />

            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
                  {userData.displayName}
                </h1>
                {userData.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-1 text-xs rounded-full bg-accent-yellow/10 text-accent-yellow-dark"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                u/{userData.username}
              </p>
              <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">
                {userData.bio}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {Object.entries(userData.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                      {value.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <button className="px-6 py-2 bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark rounded-full font-medium transition-colors">
                Follow
              </button>
              <button className="px-6 py-2 border border-background-alt-light dark:border-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark rounded-full hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm">
              <div className="border-b border-background-alt-light dark:border-background-alt-dark">
                <nav className="flex">
                  {["posts", "comments", "awards", "about"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-sm font-medium transition-colors relative
                        ${
                          activeTab === tab
                            ? "text-text-primary-light dark:text-text-primary-dark"
                            : "text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark"
                        }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-yellow" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-4">
                {activeTab === "posts" && (
                  <div className="space-y-4">
                    {/* Sort Options */}
                    <div className="flex space-x-2 mb-4">
                      {["hot", "new", "top"].map((sort) => (
                        <button
                          key={sort}
                          onClick={() => setPostSort(sort)}
                          className={`px-4 py-2 rounded-full text-sm transition-colors
                            ${
                              postSort === sort
                                ? "bg-accent-yellow text-text-primary-light dark:text-text-primary-dark"
                                : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                            }`}
                        >
                          {sort.charAt(0).toUpperCase() + sort.slice(1)}
                        </button>
                      ))}
                    </div>

                    {/* Posts List */}
                    {MOCK_USER_POSTS.map((post) => (
                      <div
                        key={post.id}
                        className="bg-background-light dark:bg-background-dark rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">
                          {post.content}
                        </p>
                        <div className="flex items-center space-x-4 mt-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          <span>↑ {post.upvotes}</span>
                          <span>💬 {post.comments} comments</span>
                          <span>{post.timeAgo}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trophy Case */}
            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Achievements
              </h2>
              <div className="space-y-4">
                {MOCK_USER_ACHIEVEMENTS.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h3 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Communities */}
            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Top Communities
              </h2>
              <div className="space-y-4">
                {userData.topCommunities.map((community) => (
                  <Link
                    key={community.name}
                    href={`/r/${community.name}`}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
                  >
                    <Image
                      src={`https://picsum.photos/seed/${community.name}/40`}
                      alt={community.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                        r/{community.name}
                      </h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        {community.role} • {community.members} members
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
