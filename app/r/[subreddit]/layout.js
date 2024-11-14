"use client";
import { popularCommunities } from "../../data/mockData";
import Image from "next/image";

export default function SubredditLayout({ children, params }) {
  const subreddit = popularCommunities.find(
    (c) => c.name.toLowerCase() === params.subreddit
  );

  if (!subreddit) return children;

  return (
    <div>
      {/* Subreddit Banner */}
      <div className="h-32 bg-gradient-to-r from-accent-yellow to-accent-green relative mb-4">
        <div className="max-w-[1800px] mx-auto px-4 h-full flex items-end">
          <div className="flex items-end space-x-4 mb-4">
            <Image
              src={subreddit.image}
              alt={subreddit.name}
              width={80}
              height={80}
              className="rounded-full border-4 border-white dark:border-gray-800"
            />
            <div className="mb-2">
              <h1 className="text-2xl font-bold text-white">
                r/{subreddit.name}
              </h1>
              <p className="text-sm text-white/90">
                {subreddit.members} members
              </p>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
