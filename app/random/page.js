"use client";
import { useEffect, useState } from "react";
import { mockPosts } from "../data/mockData";
import PostCard from "../components/PostCard";

export default function RandomPage() {
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    const shuffled = [...mockPosts].sort(() => Math.random() - 0.5).slice(0, 5);
    setRandomPosts(shuffled);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Random Posts</h1>
        <button
          onClick={() => {
            const shuffled = [...mockPosts]
              .sort(() => Math.random() - 0.5)
              .slice(0, 5);
            setRandomPosts(shuffled);
          }}
          className="button-primary"
        >
          Shuffle Posts
        </button>
      </div>
      <div className="space-y-4">
        {randomPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
