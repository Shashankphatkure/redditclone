import Link from "next/link";
import Image from "next/image";
import { mockPosts, popularCommunities, trendingTopics } from "./data/mockData";
import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8">
        {/* Create Post */}
        <div className="card mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-white/10" />
            <input
              type="text"
              placeholder="Create a post"
              className="flex-1 glass-effect rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <button className="flex items-center space-x-2 hover-effect rounded-full px-3 py-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Image</span>
            </button>
            <button className="flex items-center space-x-2 hover-effect rounded-full px-3 py-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span>Link</span>
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="col-span-4 space-y-6">
        {/* Trending Topics */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Trending Today</h2>
          <div className="space-y-4">
            {trendingTopics.map((topic) => (
              <div key={topic.topic} className="group cursor-pointer">
                <div className="relative h-24 rounded-lg overflow-hidden mb-2">
                  <Image
                    src={topic.image}
                    alt={topic.topic}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-medium text-sm">{topic.topic}</h3>
                    <p className="text-xs text-gray-300">{topic.posts} posts</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Communities */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Popular Communities</h2>
            <Link href="/communities" className="text-sm text-orange-500 hover:text-orange-400">
              See All
            </Link>
          </div>
          <div className="space-y-4">
            {popularCommunities.map((community) => (
              <Link
                key={community.name}
                href={`/r/${community.name}`}
                className="flex items-center space-x-3 hover-effect p-2 rounded-lg"
              >
                <Image
                  src={community.icon}
                  alt={community.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{community.name}</h3>
                  <p className="text-sm text-gray-400">{community.members} members</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-sm text-gray-400">
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="#" className="hover:text-white">About</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Content Policy</Link>
          </div>
          <p> 2024 RedditAI Clone. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
