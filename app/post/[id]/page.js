"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function PostPage() {
  const { id } = useParams();

  // Mock post data (replace with actual API call)
  const post = {
    id,
    title: "Understanding Advanced Machine Learning Concepts",
    content: "A detailed exploration of machine learning principles...",
    author: "tech_expert",
    date: "2024-02-20",
    upvotes: 1234,
    comments: 89,
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Image
              src={`https://picsum.photos/seed/${post.author}/40`}
              alt={post.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-text-primary-light dark:text-text-primary-dark font-medium">
                u/{post.author}
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                {post.date}
              </p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            {post.title}
          </h1>

          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
            {post.content}
          </p>

          <div className="flex items-center space-x-4 border-t border-background-alt-light dark:border-background-alt-dark pt-4">
            <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-1 rounded-full">
              <span>↑</span>
              <span>{post.upvotes}</span>
              <span>↓</span>
            </button>

            <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-1 rounded-full">
              <span>💬</span>
              <span>{post.comments} Comments</span>
            </button>

            <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-1 rounded-full">
              <span>↗️</span>
              <span>Share</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
