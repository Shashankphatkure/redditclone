"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock data for the community
const MOCK_POSTS = [
  {
    id: 1,
    title: "Breakthrough in Quantum Computing",
    content:
      "Scientists have achieved a major milestone in quantum computing...",
    author: "quantumResearcher",
    upvotes: 3421,
    commentCount: 342,
    timeAgo: "3 hours ago",
    awards: ["groundbreaking", "mindblowing"],
    imageUrl: "https://picsum.photos/seed/quantum/800/400",
  },
  // Add more mock posts...
];

const COMMUNITY_RULES = [
  {
    id: 1,
    title: "Be respectful and constructive",
    description:
      "Treat others with respect. No personal attacks or harassment.",
    icon: "🤝",
  },
  {
    id: 2,
    title: "No spam or self-promotion",
    description:
      "Keep discussions relevant and avoid excessive self-promotion.",
    icon: "🚫",
  },
  // Add more rules...
];

export default function SubredditPage({ params: { subreddit } }) {
  const [activeTab, setActiveTab] = useState("posts");
  const [sortBy, setSortBy] = useState("hot");
  const [showJoinModal, setShowJoinModal] = useState(false);

  // Mock community data
  const communityData = {
    name: subreddit,
    description:
      "A vibrant community dedicated to sharing knowledge and fostering discussions about technology and innovation.",
    memberCount: 125000,
    onlineCount: 1200,
    createdDate: "2020-01-15",
    bannerImage: `https://picsum.photos/seed/${subreddit}/1000/200`,
    icon: `https://picsum.photos/seed/${subreddit}icon/100`,
    moderators: ["mod1", "mod2", "mod3"],
    tags: ["Technology", "Innovation", "Discussion"],
    flairs: ["Discussion", "News", "Tutorial", "Question"],
    isVerified: true,
    isPremium: true,
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Community Banner */}
      <div className="relative h-48 lg:h-64">
        <Image
          src={communityData.bannerImage}
          alt={communityData.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
      </div>

      {/* Community Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-end space-y-4 lg:space-y-0 lg:space-x-6">
          <Image
            src={communityData.icon}
            alt={communityData.name}
            width={128}
            height={128}
            className="rounded-full border-4 border-background-light dark:border-background-dark shadow-lg"
          />

          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
                r/{communityData.name}
              </h1>
              {communityData.isVerified && (
                <span className="text-accent-green" title="Verified Community">
                  ✓
                </span>
              )}
              {communityData.isPremium && (
                <span className="text-accent-yellow" title="Premium Community">
                  ⭐
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4 text-text-secondary-light dark:text-text-secondary-dark mt-2">
              <span>{communityData.memberCount.toLocaleString()} members</span>
              <span>•</span>
              <span>{communityData.onlineCount.toLocaleString()} online</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setShowJoinModal(true)}
              className="px-6 py-2 bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark rounded-full font-medium transition-colors"
            >
              Join
            </button>
            <button className="p-2 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded-full transition-colors">
              ⋮
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 border-b border-background-alt-light dark:border-background-alt-dark">
          <nav className="flex space-x-1">
            {["posts", "about", "wiki", "rules"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative
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

        {/* Main Content */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Posts/Content Area */}
          <div className="lg:col-span-2">
            {activeTab === "posts" && (
              <div className="space-y-4">
                {/* Sort Options */}
                <div className="flex space-x-2 mb-4">
                  {["hot", "new", "top", "rising"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors
                        ${
                          sortBy === option
                            ? "bg-accent-yellow text-text-primary-light dark:text-text-primary-dark"
                            : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                        }`}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Create Post Card */}
                <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-background-alt-light dark:bg-background-alt-dark" />
                    <input
                      type="text"
                      placeholder="Create a post"
                      className="flex-1 bg-background-alt-light dark:bg-background-alt-dark rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                    />
                  </div>
                </div>

                {/* Posts List */}
                {MOCK_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Post content here */}
                  </article>
                ))}
              </div>
            )}

            {activeTab === "about" && (
              <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  About Community
                </h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {communityData.description}
                </p>
                {/* Add more about content */}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Info Card */}
            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                About r/{communityData.name}
              </h2>
              <div className="space-y-4">
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {communityData.description}
                </p>
                <div className="border-t border-background-alt-light dark:border-background-alt-dark pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">
                      Created
                    </span>
                    <span className="text-text-primary-light dark:text-text-primary-dark">
                      {new Date(communityData.createdDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">
                      Members
                    </span>
                    <span className="text-text-primary-light dark:text-text-primary-dark">
                      {communityData.memberCount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark rounded-full font-medium transition-colors">
                Join Community
              </button>
            </div>

            {/* Rules Card */}
            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                r/{communityData.name} Rules
              </h2>
              <div className="space-y-4">
                {COMMUNITY_RULES.map((rule) => (
                  <div key={rule.id} className="flex items-start space-x-3">
                    <span className="text-xl">{rule.icon}</span>
                    <div>
                      <h3 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                        {rule.title}
                      </h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Moderators Card */}
            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Moderators
              </h2>
              <div className="space-y-2">
                {communityData.moderators.map((mod) => (
                  <Link
                    key={mod}
                    href={`/u/${mod}`}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
                  >
                    <Image
                      src={`https://picsum.photos/seed/${mod}/32`}
                      alt={mod}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-text-primary-light dark:text-text-primary-dark">
                      u/{mod}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-background-dark/50 flex items-center justify-center z-50">
          {/* Modal content */}
        </div>
      )}
    </div>
  );
}
