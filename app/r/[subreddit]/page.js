"use client";
import { useState } from "react";
import { mockPosts, popularCommunities } from "../../data/mockData";
import PostCard from "../../components/PostCard";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SubredditPage() {
  const { subreddit } = useParams();
  const [activeTab, setActiveTab] = useState("posts");
  const [sortBy, setSortBy] = useState("hot");
  const [showJoinModal, setShowJoinModal] = useState(false);

  // Get community info
  const communityInfo = popularCommunities.find(
    (c) => c.name.toLowerCase() === subreddit
  );

  // Filter and sort posts
  const subredditPosts = mockPosts.filter(
    (post) => post.subreddit.toLowerCase() === subreddit
  );

  const sortedPosts = [...subredditPosts].sort((a, b) => {
    switch (sortBy) {
      case "hot":
        return b.upvotes / b.comments - a.upvotes / a.comments;
      case "new":
        return new Date(b.timeAgo) - new Date(a.timeAgo);
      case "top":
        return b.upvotes - a.upvotes;
      case "controversial":
        return b.comments - a.comments;
      default:
        return 0;
    }
  });

  const rules = [
    "1. Be respectful and constructive",
    "2. No spam or self-promotion",
    "3. Use appropriate tags",
    "4. Follow Reddit's content policy",
    "5. Stay on topic",
  ];

  return (
    <div className="max-w-[1800px] mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {/* Create Post */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-yellow-dark to-accent-green-dark animate-pulse" />
              <input
                type="text"
                placeholder={`Create a post in r/${subreddit}`}
                className="flex-1 bg-background-alt-light dark:bg-background-alt-dark rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition-all"
              />
            </div>
          </div>

          {/* Sort Options */}
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm mb-4">
            <div className="flex space-x-2">
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
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {sortedPosts.length > 0 ? (
              sortedPosts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No posts yet</h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  Be the first to post in r/{subreddit}
                </p>
                <button className="button-primary">Create Post</button>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          {/* About Community */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-bold mb-4">About Community</h2>
            <div className="space-y-4">
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                {communityInfo?.description ||
                  `Welcome to r/${subreddit}, a community dedicated to discussing all things ${subreddit}.`}
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      Members
                    </p>
                    <p className="font-medium">
                      {communityInfo?.members || "0"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      Online
                    </p>
                    <p className="font-medium">
                      {communityInfo?.activeUsers || "0"}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Created {communityInfo?.createdAt || "Unknown"}
                </p>
              </div>
              <button className="w-full button-primary">Join Community</button>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-bold mb-4">r/{subreddit} Rules</h2>
            <ul className="space-y-2 text-sm">
              {rules.map((rule) => (
                <li
                  key={rule}
                  className="text-text-secondary-light dark:text-text-secondary-dark"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Moderators */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-bold mb-4">Moderators</h2>
            <button className="text-accent-yellow hover:text-accent-yellow-hover text-sm">
              Message the mods
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
