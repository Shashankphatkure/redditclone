"use client";
import { useEffect, useState } from "react";
import { mockPosts, popularCommunities } from "../data/mockData";
import PostCard from "../components/PostCard";
import Image from "next/image";

export default function RandomPage() {
  const [randomPosts, setRandomPosts] = useState([]);
  const [randomCommunity, setRandomCommunity] = useState(null);
  const [loading, setLoading] = useState(true);

  const shufflePosts = () => {
    setLoading(true);
    setTimeout(() => {
      const shuffled = [...mockPosts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      const randomComm =
        popularCommunities[
          Math.floor(Math.random() * popularCommunities.length)
        ];
      setRandomPosts(shuffled);
      setRandomCommunity(randomComm);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    shufflePosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold">Random Posts</h1>
        <button
          onClick={shufflePosts}
          className="button-primary flex items-center space-x-2"
        >
          <span>🎲</span>
          <span>Shuffle Again</span>
        </button>
      </div>

      {/* Featured Community */}
      {randomCommunity && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold mb-4">Featured Community</h2>
          <div className="flex items-center space-x-4">
            <Image
              src={randomCommunity.image}
              alt={randomCommunity.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium">r/{randomCommunity.name}</h3>
              <p className="text-sm text-gray-500">
                {randomCommunity.members} members
              </p>
              <p className="text-sm mt-1">{randomCommunity.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Posts */}
      {loading ? (
        <div className="text-center py-8">
          <div className="w-8 h-8 border-4 border-accent-yellow border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {randomPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
