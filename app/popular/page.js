"use client";
import { mockPosts } from "../data/mockData";
import PostCard from "../components/PostCard";

export default function PopularPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-6">Popular Posts</h1>
      <div className="space-y-4">
        {mockPosts
          .sort((a, b) => b.upvotes - a.upvotes)
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
}
