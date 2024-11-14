'use client';

import { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard';
import Link from 'next/link';

export default function TopicPage({ params }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalMembers: 0,
    dailyActiveUsers: 0
  });

  const { topic } = params;

  useEffect(() => {
    // Fetch posts for this topic
    // This is a mock implementation - replace with actual API calls
    const fetchPosts = async () => {
      try {
        // Mock data - replace with actual API call
        const mockPosts = [
          {
            id: 1,
            title: 'Example Post 1',
            content: 'This is an example post content',
            author: 'user1',
            upvotes: 42,
            comments: 15,
            createdAt: new Date().toISOString(),
          },
          // Add more mock posts as needed
        ];

        setPosts(mockPosts);
        setStats({
          totalPosts: 1234,
          totalMembers: 5678,
          dailyActiveUsers: 910
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [topic]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Topic Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold dark:text-white">t/{topic}</h1>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Join Topic
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Welcome to t/{topic}! Join our community to discuss everything about {topic}.
        </p>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-2xl font-bold text-orange-500">{stats.totalPosts.toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-400">Posts</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-2xl font-bold text-orange-500">{stats.totalMembers.toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-400">Members</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-2xl font-bold text-orange-500">{stats.dailyActiveUsers.toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-400">Online</p>
          </div>
        </div>
      </div>

      {/* Topic Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-sm">
        <nav className="flex space-x-4">
          <Link
            href={`/topics/${topic}`}
            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Hot
          </Link>
          <Link
            href={`/topics/${topic}/new`}
            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            New
          </Link>
          <Link
            href={`/topics/${topic}/top`}
            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Top
          </Link>
          <Link
            href={`/topics/${topic}/controversial`}
            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Controversial
          </Link>
        </nav>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading posts...</p>
          </div>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center py-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-gray-600 dark:text-gray-400">No posts yet in this topic.</p>
            <button
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => document.querySelector('[data-create-post]')?.click()}
            >
              Create the first post
            </button>
          </div>
        )}
      </div>

      {/* Topic Rules and Info Sidebar */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Topic Rules</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
          <li>Be respectful and civil</li>
          <li>No spam or self-promotion</li>
          <li>Stay on topic</li>
          <li>Follow Reddit's content policy</li>
          <li>No duplicate posts</li>
        </ol>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Moderators</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">u/moderator1</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">u/moderator2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
