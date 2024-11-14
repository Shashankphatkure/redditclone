'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock data (replace with API calls later)
const MOCK_POSTS = [
  {
    id: 1,
    title: "What's new in the tech world?",
    content: "Discussing the latest technological advancements and innovations...",
    author: "techie123",
    upvotes: 1542,
    commentCount: 324,
    timeAgo: "5 hours ago",
    tags: ["Discussion", "News"],
  },
  {
    id: 2,
    title: "The future of AI development",
    content: "Exploring the possibilities and challenges in artificial intelligence...",
    author: "ai_enthusiast",
    upvotes: 2103,
    commentCount: 567,
    timeAgo: "8 hours ago",
    tags: ["AI", "Technology"],
  },
];

export default function CommunityPage({ params }) {
  const [sortBy, setSortBy] = useState('hot');
  const [timeFilter, setTimeFilter] = useState('today');
  
  // Mock community data (replace with API call)
  const community = {
    name: params.community,
    description: "A community dedicated to discussing all aspects of technology, from the latest gadgets to programming tips.",
    memberCount: 1234567,
    onlineCount: 4321,
    createdAt: "2020-12-12",
    bannerImage: `https://picsum.photos/seed/${params.community}/1920/400`,
    icon: `https://picsum.photos/seed/${params.community}icon/200/200`,
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="h-48 md:h-64 relative">
        <Image
          src={community.bannerImage}
          alt={`${community.name} banner`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Community Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-20 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start space-x-6">
              <div className="relative w-32 h-32 -mt-16">
                <Image
                  src={community.icon}
                  alt={community.name}
                  fill
                  className="rounded-full border-4 border-white dark:border-gray-800 object-cover"
                />
              </div>
              
              <div className="flex-1 pt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">r/{community.name}</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      {community.memberCount.toLocaleString()} members • {community.onlineCount.toLocaleString()} online
                    </p>
                  </div>
                  <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium">
                    Join Community
                  </button>
                </div>
                
                <p className="mt-4 text-gray-600 dark:text-gray-300">{community.description}</p>
                
                <div className="mt-6 flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Created {new Date(community.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium focus:outline-none"
                >
                  <option value="hot">Hot</option>
                  <option value="new">New</option>
                  <option value="top">Top</option>
                  <option value="controversial">Controversial</option>
                </select>
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium focus:outline-none"
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                  <option value="all">All Time</option>
                </select>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {MOCK_POSTS.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>Posted by u/{post.author}</span>
                    <span>•</span>
                    <span>{post.timeAgo}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                      <span>{post.upvotes}</span>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{post.commentCount} Comments</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-4">About Community</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{community.description}</p>
              <div className="border-t dark:border-gray-700 pt-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">{community.memberCount.toLocaleString()}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{community.onlineCount.toLocaleString()}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Online</div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Create Post
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-4">Community Rules</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Be respectful to others</li>
                <li>No spam or self-promotion</li>
                <li>Follow Reddit's content policy</li>
                <li>Post relevant content only</li>
                <li>Use appropriate post flairs</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
