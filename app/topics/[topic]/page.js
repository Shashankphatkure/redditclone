"use client";
import { useState } from "react";
import { mockPosts, trendingTopics } from "../../data/mockData";
import PostCard from "../../components/PostCard";
import Image from "next/image";
import Link from "next/link";

export default function TopicPage({ params }) {
  const [sortBy, setSortBy] = useState("hot");
  const [timeFilter, setTimeFilter] = useState("today");
  const [view, setView] = useState("posts"); // posts, resources, discussions

  // Format topic name for display
  const topicName = params.topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Get topic info
  const topicInfo = trendingTopics.find(
    (t) => t.topic.toLowerCase().replace(/\s+/g, "-") === params.topic
  );

  // Filter posts related to this topic
  const topicPosts = mockPosts.filter((post) =>
    post.content.toLowerCase().includes(params.topic.replace("-", " "))
  );

  const relatedTopics = [
    { name: "Frontend Development", members: "234K", icon: "🎨" },
    { name: "JavaScript", members: "456K", icon: "📜" },
    { name: "React", members: "345K", icon: "⚛️" },
    { name: "CSS", members: "123K", icon: "🎯" },
  ];

  const resources = [
    { title: "Getting Started Guide", type: "Guide", icon: "📚" },
    { title: "Best Practices", type: "Documentation", icon: "📖" },
    { title: "Video Tutorials", type: "Video", icon: "🎥" },
    { title: "Community Projects", type: "Projects", icon: "🛠️" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Topic Header */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-6">
        <Image
          src={
            topicInfo?.image ||
            `https://picsum.photos/seed/${params.topic}/1200/400`
          }
          alt={topicName}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {topicName}
              </h1>
              <p className="text-gray-200">
                {topicInfo?.posts || "1000+"} posts
              </p>
            </div>
            <button className="button-primary">Follow Topic</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {/* View Selector */}
          <div className="bg-white dark:bg-gray-800 rounded-lg mb-6">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {["posts", "resources", "discussions"].map((option) => (
                <button
                  key={option}
                  onClick={() => setView(option)}
                  className={`px-6 py-3 font-medium transition-colors relative
                    ${view === option ? "text-accent-yellow" : ""}
                    hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                  {view === option && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-yellow"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Based on View */}
          {view === "posts" && (
            <>
              {/* Sort Options */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {["hot", "new", "top"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setSortBy(option)}
                        className={`px-4 py-2 rounded-full transition-all
                          ${
                            sortBy === option
                              ? "bg-accent-yellow text-white"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </button>
                    ))}
                  </div>
                  {sortBy === "top" && (
                    <select
                      value={timeFilter}
                      onChange={(e) => setTimeFilter(e.target.value)}
                      className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                    >
                      {["today", "week", "month", "year", "all"].map((time) => (
                        <option key={time} value={time}>
                          {time.charAt(0).toUpperCase() + time.slice(1)}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {topicPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}

          {view === "resources" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{resource.icon}</span>
                    <div>
                      <h3 className="font-bold mb-1">{resource.title}</h3>
                      <p className="text-sm text-gray-500">{resource.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {view === "discussions" && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Active Discussions</h3>
              {/* Add discussions content here */}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* About Topic */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">About {topicName}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore the latest trends, tools, and techniques in{" "}
              {topicName.toLowerCase()}. Join discussions, share resources, and
              connect with other developers.
            </p>
            <div className="flex items-center justify-between py-3 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-500">Active Members</span>
              <span className="font-medium">12.5k</span>
            </div>
            <div className="flex items-center justify-between py-3 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-500">Daily Posts</span>
              <span className="font-medium">234</span>
            </div>
          </div>

          {/* Related Topics */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Related Topics</h2>
            <div className="space-y-3">
              {relatedTopics.map((topic) => (
                <Link
                  key={topic.name}
                  href={`/topics/${topic.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <span>{topic.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{topic.members}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Topic Rules */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Topic Guidelines</h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-accent-yellow">•</span>
                <span className="text-sm">
                  Share relevant and helpful content
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-yellow">•</span>
                <span className="text-sm">Be respectful and constructive</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-yellow">•</span>
                <span className="text-sm">No self-promotion or spam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
