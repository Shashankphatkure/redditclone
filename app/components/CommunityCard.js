"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CommunityCard({ community, variant = "default" }) {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault(); // Prevent link navigation when clicking the button
    setIsJoined(!isJoined);
  };

  if (variant === "compact") {
    return (
      <Link
        href={`/r/${community.name}`}
        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
      >
        <Image
          src={community.icon}
          alt={community.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-text-primary-light dark:text-text-primary-dark truncate">
              r/{community.name}
            </h3>
            {community.isVerified && (
              <span
                className="text-accent-green flex-shrink-0"
                title="Verified"
              >
                ✓
              </span>
            )}
          </div>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            {community.members.toLocaleString()} members
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/r/${community.name}`}
      className="block bg-background-light dark:bg-background-dark rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
    >
      {/* Banner Image */}
      <div className="relative h-32">
        <Image
          src={community.bannerImage}
          alt={community.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
        {community.trending && (
          <span className="absolute top-2 right-2 px-2 py-1 bg-accent-yellow text-xs font-medium rounded-full">
            🔥 Trending
          </span>
        )}
      </div>

      {/* Community Info */}
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <Image
            src={community.icon}
            alt={community.name}
            width={48}
            height={48}
            className="rounded-full border-4 border-background-light dark:border-background-dark -mt-8"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark truncate">
                r/{community.name}
              </h3>
              {community.isVerified && (
                <span
                  className="text-accent-green flex-shrink-0"
                  title="Verified"
                >
                  ✓
                </span>
              )}
            </div>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {community.memberCount.toLocaleString()} members
            </p>
          </div>
          <button
            onClick={handleJoin}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors
              ${
                isJoined
                  ? "bg-accent-green text-white"
                  : "bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark"
              }`}
          >
            {isJoined ? "Joined" : "Join"}
          </button>
        </div>

        <p className="mt-4 text-text-secondary-light dark:text-text-secondary-dark line-clamp-2">
          {community.description}
        </p>

        {/* Tags */}
        {community.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {community.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-background-alt-light dark:bg-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Active Now Indicator */}
        {community.activeNow && (
          <div className="mt-4 flex items-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
            <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse mr-2" />
            {community.activeNow.toLocaleString()} active now
          </div>
        )}

        {/* Growth Indicator */}
        {community.growth && (
          <div className="mt-2 text-sm">
            <span className="text-accent-green">↑ {community.growth}</span>
            <span className="text-text-secondary-light dark:text-text-secondary-dark ml-1">
              growth this month
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
