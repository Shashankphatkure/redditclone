import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PostCard({ post }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [voteStatus, setVoteStatus] = useState(null); // null, 'up', or 'down'
  const [saved, setSaved] = useState(false);

  const handleVote = (direction) => {
    setVoteStatus(voteStatus === direction ? null : direction);
  };

  return (
    <article className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Vote Column */}
      <div className="flex">
        <div className="w-12 bg-background-alt-light dark:bg-background-alt-dark flex flex-col items-center py-2">
          <button
            onClick={() => handleVote("up")}
            className={`p-1 rounded transition-colors ${
              voteStatus === "up"
                ? "text-accent-yellow"
                : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
            }`}
          >
            ↑
          </button>
          <span
            className={`text-sm font-medium ${
              voteStatus === "up"
                ? "text-accent-yellow"
                : voteStatus === "down"
                ? "text-interactive-red"
                : "text-text-secondary-light dark:text-text-secondary-dark"
            }`}
          >
            {post.upvotes}
          </span>
          <button
            onClick={() => handleVote("down")}
            className={`p-1 rounded transition-colors ${
              voteStatus === "down"
                ? "text-interactive-red"
                : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
            }`}
          >
            ↓
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {/* Post Header */}
          <div className="flex items-center space-x-2 text-sm">
            {post.communityIcon && (
              <Image
                src={post.communityIcon}
                alt={post.community}
                width={20}
                height={20}
                className="rounded-full"
              />
            )}
            <Link
              href={`/r/${post.community}`}
              className="font-medium text-text-primary-light dark:text-text-primary-dark hover:underline"
            >
              r/{post.community}
            </Link>
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              •
            </span>
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              Posted by{" "}
              <Link href={`/u/${post.author}`} className="hover:underline">
                u/{post.author}
              </Link>
            </span>
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              {post.timeAgo}
            </span>
          </div>

          {/* Post Title */}
          <h2 className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark mt-2">
            <Link href={`/post/${post.id}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>

          {/* Post Content */}
          {post.content && (
            <div
              className={`mt-2 text-text-secondary-light dark:text-text-secondary-dark ${
                !isExpanded && "line-clamp-3"
              }`}
            >
              <p>{post.content}</p>
              {post.content.length > 200 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-interactive-blue hover:underline mt-1"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          )}

          {/* Post Image */}
          {post.imageUrl && (
            <div className="relative mt-3 rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={800}
                height={400}
                className="object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>
          )}

          {/* Awards and Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {post.awards?.map((award) => (
              <span
                key={award}
                className="px-2 py-1 text-xs rounded-full bg-accent-yellow/10 text-accent-yellow-dark"
              >
                {award}
              </span>
            ))}
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-background-alt-light dark:bg-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mt-4">
            <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-2 rounded-full transition-colors">
              <span>💬</span>
              <span>{post.comments} Comments</span>
            </button>
            <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-3 py-2 rounded-full transition-colors">
              <span>↗️</span>
              <span>Share</span>
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors ${
                saved
                  ? "text-accent-yellow bg-accent-yellow/10"
                  : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark"
              }`}
            >
              <span>{saved ? "⭐" : "☆"}</span>
              <span>{saved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
