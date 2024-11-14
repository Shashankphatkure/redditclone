'use client';

const TOPICS = [
  {
    id: 1,
    name: 'Gaming',
    description: 'Video games, board games, and everything in between',
    icon: '🎮',
    communities: 1243,
    members: '12.5M',
  },
  {
    id: 2,
    name: 'Sports',
    description: 'News and discussions about all sports',
    icon: '⚽',
    communities: 892,
    members: '8.9M',
  },
  {
    id: 3,
    name: 'Technology',
    description: 'Latest in tech, programming, and digital innovation',
    icon: '💻',
    communities: 1567,
    members: '15.2M',
  },
  {
    id: 4,
    name: 'Science',
    description: 'Scientific discoveries, research, and discussions',
    icon: '🔬',
    communities: 743,
    members: '9.1M',
  },
  // Add more topics as needed
];

export default function TopicsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Topics</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Explore communities by topic</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic) => (
            <div
              key={topic.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{topic.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{topic.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{topic.members} members</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{topic.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">{topic.communities} communities</span>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
