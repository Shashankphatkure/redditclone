"use client";
import { useState } from "react";

export default function VoteButtons({ initialUpvotes = 0 }) {
  const [voteCount, setVoteCount] = useState(initialUpvotes);
  const [userVote, setUserVote] = useState(null); // null, 'up', or 'down'

  const handleVote = (voteType) => {
    if (userVote === voteType) {
      // User is un-voting
      setVoteCount(voteCount + (voteType === "up" ? -1 : 1));
      setUserVote(null);
    } else {
      // User is changing vote or voting for first time
      setVoteCount(
        voteCount +
          (voteType === "up"
            ? userVote === "down"
              ? 2
              : 1
            : userVote === "up"
            ? -2
            : -1)
      );
      setUserVote(voteType);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-1">
      <button
        onClick={() => handleVote("up")}
        className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
          ${
            userVote === "up"
              ? "text-accent-yellow"
              : "text-gray-400 dark:text-gray-500"
          }`}
        aria-label="Upvote"
      >
        ⬆️
      </button>

      <span
        className={`text-sm font-medium
        ${
          userVote === "up"
            ? "text-accent-yellow"
            : userVote === "down"
            ? "text-accent-blue"
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        {voteCount}
      </span>

      <button
        onClick={() => handleVote("down")}
        className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
          ${
            userVote === "down"
              ? "text-accent-blue"
              : "text-gray-400 dark:text-gray-500"
          }`}
        aria-label="Downvote"
      >
        ⬇️
      </button>
    </div>
  );
}
