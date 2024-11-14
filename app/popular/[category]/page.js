"use client";
import { mockPosts } from "../../data/mockData";
import PostCard from "../../components/PostCard";
import { notFound } from "next/navigation";

const VALID_CATEGORIES = [
  "gaming",
  "sports",
  "business",
  "crypto",
  "television",
  "celebrity",
];

export default function CategoryPage({ params }) {
  const { category } = params;

  if (!VALID_CATEGORIES.includes(category.toLowerCase())) {
    notFound();
  }

  const categoryPosts = mockPosts.filter(
    (post) => post.subreddit.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-2xl">
          {category === "gaming"
            ? "🎮"
            : category === "sports"
            ? "⚽"
            : category === "business"
            ? "💼"
            : category === "crypto"
            ? "💰"
            : category === "television"
            ? "📺"
            : "🌟"}
        </span>
        <h1 className="text-2xl font-bold capitalize">{category}</h1>
      </div>

      {categoryPosts.length > 0 ? (
        <div className="space-y-4">
          {categoryPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">
            No posts in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
