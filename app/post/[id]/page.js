"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostPage() {
  const { id } = useParams();
  const [commentSort, setCommentSort] = useState("best");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Mock post data (replace with actual API call)
  const post = {
    id,
    title: "Understanding Advanced Machine Learning Concepts",
    content:
      "A comprehensive exploration of machine learning principles, including neural networks, deep learning architectures, and practical applications in modern AI systems...",
    author: "tech_expert",
    authorAvatar: "https://picsum.photos/seed/tech_expert/200",
    community: "MachineLearning",
    date: "2024-02-20",
    upvotes: 1234,
    upvoteRatio: 0.95,
    comments: 89,
    awards: ["helpful", "insightful", "mindblowing"],
    tags: ["Education", "Technology", "AI"],
    imageUrl: "https://picsum.photos/seed/ml/1000/500",
  };

  // Mock comments data
  const comments = [
    {
      id: 1,
      author: "ai_researcher",
      authorAvatar: "https://picsum.photos/seed/ai_researcher/100",
      content: "This is a fantastic explanation of complex ML concepts...",
      upvotes: 456,
      timeAgo: "2 hours ago",
      depth: 0,
      replies: [
        {
          id: 2,
          author: "data_scientist",
          authorAvatar: "https://picsum.photos/seed/data_scientist/100",
          content: "Great point! I'd also add that...",
          upvotes: 123,
          timeAgo: "1 hour ago",
          depth: 1,
        },
      ],
    },
    // Add more comments...
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Post Content */}
        <article className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm overflow-hidden">
          {/* Post Header */}
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={post.authorAvatar}
                alt={post.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <Link
                  href={`/r/${post.community}`}
                  className="text-text-primary-light dark:text-text-primary-dark hover:underline font-medium"
                >
                  r/{post.community}
                </Link>
                <div className="flex items-center space-x-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  <span>Posted by u/{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <button
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`ml-auto px-4 py-1 rounded-full text-sm font-medium transition-colors
                  ${
                    isSubscribed
                      ? "bg-accent-green text-white"
                      : "bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark"
                  }`}
              >
                {isSubscribed ? "Joined" : "Join"}
              </button>
            </div>

            <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-background-alt-light dark:bg-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Awards */}
            <div className="flex items-center space-x-2 mb-4">
              {post.awards.map((award) => (
                <span
                  key={award}
                  className="px-2 py-1 text-xs rounded-full bg-accent-yellow/10 text-accent-yellow-dark"
                >
                  {award}
                </span>
              ))}
            </div>

            {/* Post Image */}
            {post.imageUrl && (
              <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Post Content */}
            <p className="text-text-secondary-light dark:text-text-secondary-dark whitespace-pre-line">
              {post.content}
            </p>

            {/* Post Stats and Actions */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-background-alt-light dark:border-background-alt-dark">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <button className="p-2 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded-full transition-colors">
                    ↑
                  </button>
                  <span className="font-medium">
                    {post.upvotes.toLocaleString()}
                  </span>
                  <button className="p-2 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded-full transition-colors">
                    ↓
                  </button>
                </div>
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  {(post.upvoteRatio * 100).toFixed(0)}% Upvoted
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-2 rounded-full transition-colors">
                  <span>💬</span>
                  <span>{post.comments} Comments</span>
                </button>
                <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-2 rounded-full transition-colors">
                  <span>↗️</span>
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-2 rounded-full transition-colors">
                  <span>⭐</span>
                  <span>Award</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-6">
          {/* Comment Sort */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              Sort by
            </span>
            {["best", "top", "new", "controversial"].map((option) => (
              <button
                key={option}
                onClick={() => setCommentSort(option)}
                className={`px-3 py-1 rounded-full text-sm transition-colors
                  ${
                    commentSort === option
                      ? "bg-accent-yellow text-text-primary-light dark:text-text-primary-dark"
                      : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
                  }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>

          {/* Comment Input */}
          <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4 mb-6">
            <textarea
              placeholder="What are your thoughts?"
              className="w-full h-32 p-4 bg-background-alt-light dark:bg-background-alt-dark rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
            <div className="flex justify-end mt-2">
              <button className="px-4 py-2 bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark rounded-full font-medium">
                Comment
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentCard({ comment }) {
  return (
    <div
      className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4"
      style={{ marginLeft: `${comment.depth * 2}rem` }}
    >
      <div className="flex items-start space-x-3">
        <Image
          src={comment.authorAvatar}
          alt={comment.author}
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
              u/{comment.author}
            </span>
            <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {comment.timeAgo}
            </span>
          </div>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            {comment.content}
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-1">
              <button className="p-1 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded transition-colors">
                ↑
              </button>
              <span className="text-sm font-medium">{comment.upvotes}</span>
              <button className="p-1 hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded transition-colors">
                ↓
              </button>
            </div>
            <button className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-2 py-1 rounded transition-colors">
              Reply
            </button>
          </div>
        </div>
      </div>
      {comment.replies?.map((reply) => (
        <CommentCard key={reply.id} comment={reply} />
      ))}
    </div>
  );
}
