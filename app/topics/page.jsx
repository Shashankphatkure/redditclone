'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock topics data - replace with API call
  const allTopics = [
    {
      name: 'Technology',
      description: 'Discuss the latest in tech, gadgets, and digital trends',
      members: 125000,
      postsToday: 342,
      icon: '💻'
    },
    {
      name: 'Gaming',
      description: 'Gaming news, reviews, and discussions',
      members: 98000,
      postsToday: 567,
      icon: '🎮'
    },
    {
      name: 'Sports',
      description: 'All things sports - news, highlights, and discussions',
      members: 85000,
      postsToday: 234,
      icon: '⚽'
    },
    {
      name: 'Science',
      description: 'Scientific discoveries, research, and discussions',
      members: 75000,
      postsToday: 123,
      icon: '🔬'
    },
    {
      name: 'Art',
      description: 'Share and discuss art in all its forms',
      members: 65000,
      postsToday: 189,
      icon: '🎨'
    },
    {
      name: 'Music',
      description: 'Music news, discussions, and recommendations',
      members: 92000,
      postsToday: 445,
      icon: '🎵'
    },
    {
      name: 'Food',
      description: 'Recipes, cooking tips, and food culture',
      members: 88000,
      postsToday: 278,
      icon: '🍳'
    },
    {
      name: 'Travel',
      description: 'Travel tips, destinations, and experiences',
      members: 72000,
      postsToday: 156,
      icon: '✈️'
    },
    {
      name: 'Photography',
      description: 'Share and discuss photography',
      members: 68000,
      postsToday: 234,
      icon: '📷'
    },
    {
      name: 'Movies',
      description: 'Movie discussions, reviews, and news',
      members: 95000,
      postsToday: 321,
      icon: '🎬'
    }
  ];

  const filteredTopics = allTopics.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Topics</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Discover and join topics that interest you
        </p>
        
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <svg
            className="absolute right-3 top-3 h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic) => (
          <Link
            key={topic.name}
            href={`/topics/${topic.name.toLowerCase()}`}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{topic.icon}</div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">
                  t/{topic.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {topic.members.toLocaleString()} members
                  </span>
                  <span className="text-orange-500">
                    {topic.postsToday} posts today
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredTopics.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            No topics found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search terms
          </p>
        </div>
      )}

      {/* Create Topic Button (if you want to allow users to create topics) */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
