'use client';

import { useState } from 'react';

const MOCK_POPULAR_POSTS = [
  {
    id: 1,
    title: "Scientists discover new potential treatment for cancer",
    content: "Researchers have identified a novel therapeutic approach...",
    author: "sciencenews",
    community: "Science",
    upvotes: 45200,
    commentCount: 2891,
    timeAgo: "5 hours ago",
    tags: ["Research", "Medicine"],
  },
  {
    id: 2,
    title: "Breaking: Major tech company announces revolutionary AI model",
    content: "The new AI model shows unprecedented capabilities in...",
    author: "tech_daily",
    community: "Technology",
    upvotes: 38100,
    commentCount: 4523,
    timeAgo: "8 hours ago",
    tags: ["AI", "Technology"],
  },
  // Add more mock posts as needed
];

export default function PopularPage() {
  const [timeFilter, setTimeFilter] = useState('today');
  const [location, setLocation] = useState('worldwide');

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Popular Posts</h1>
          <div className="flex space-x-4">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
              <option value="all">All Time</option>
            </select>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="worldwide">Worldwide</option>
              <option value="united_states">United States</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {MOCK_POPULAR_POSTS.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Posted by u/{post.author}</span>
                <span>•</span>
                <span>in r/{post.community}</span>
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
                  <span>{post.upvotes.toLocaleString()}</span>
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
                  <span>{post.commentCount.toLocaleString()} Comments</span>
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
    </div>
  );
}
