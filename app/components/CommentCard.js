import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CommentCard({ comment, onReply, isChild = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [voteStatus, setVoteStatus] = useState(null); // null, 'up', or 'down'
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const handleVote = (direction) => {
    setVoteStatus(voteStatus === direction ? null : direction);
  };

  const handleReply = () => {
    if (replyContent.trim()) {
      onReply?.(replyContent);
      setReplyContent("");
      setShowReplyForm(false);
    }
  };

  return (
    <div
      className={`bg-background-light dark:bg-background-dark rounded-lg shadow-sm 
      ${
        isChild
          ? "border-l-2 border-background-alt-light dark:border-background-alt-dark ml-4"
          : ""
      }`}
    >
      <div className="p-4">
        {/* Comment Header */}
        <div className="flex items-start space-x-3">
          <Link href={`/u/${comment.author}`} className="flex-shrink-0">
            <Image
              src={comment.authorAvatar}
              alt={comment.author}
              width={32}
              height={32}
              className="rounded-full hover:ring-2 hover:ring-accent-yellow transition-all"
            />
          </Link>

          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <Link
                href={`/u/${comment.author}`}
                className="font-medium text-text-primary-light dark:text-text-primary-dark hover:underline"
              >
                u/{comment.author}
              </Link>
              {comment.isOP && (
                <span className="px-1.5 py-0.5 text-xs bg-accent-yellow/10 text-accent-yellow-dark rounded-full">
                  OP
                </span>
              )}
              {comment.isMod && (
                <span className="px-1.5 py-0.5 text-xs bg-accent-green/10 text-accent-green rounded-full">
                  MOD
                </span>
              )}
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {comment.timeAgo}
              </span>
              {comment.edited && (
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  (edited)
                </span>
              )}
            </div>

            {/* Comment Content */}
            <div
              className={`mt-2 text-text-secondary-light dark:text-text-secondary-dark
              ${
                !isExpanded && comment.content.length > 300
                  ? "line-clamp-3"
                  : ""
              }`}
            >
              <p>{comment.content}</p>
              {comment.content.length > 300 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-interactive-blue hover:text-interactive-blue-hover dark:text-interactive-blue-dark mt-1 text-sm"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}
            </div>

            {/* Comment Actions */}
            <div className="flex items-center space-x-4 mt-3">
              {/* Vote Buttons */}
              <div className="flex items-center space-x-1">
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
                  {comment.upvotes}
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

              {/* Reply Button */}
              <button
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-2 py-1 rounded transition-colors text-sm"
              >
                <span>↩️</span>
                <span>Reply</span>
              </button>

              {/* Share Button */}
              <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-2 py-1 rounded transition-colors text-sm">
                <span>↗️</span>
                <span>Share</span>
              </button>

              {/* Report Button */}
              <button className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark px-2 py-1 rounded transition-colors text-sm">
                <span>⚠️</span>
                <span>Report</span>
              </button>
            </div>

            {/* Reply Form */}
            {showReplyForm && (
              <div className="mt-4 space-y-2">
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="What are your thoughts?"
                  className="w-full p-3 bg-background-alt-light dark:bg-background-alt-dark rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent-yellow min-h-[100px]"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setShowReplyForm(false)}
                    className="px-4 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark rounded-full transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleReply}
                    disabled={!replyContent.trim()}
                    className="px-4 py-2 bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nested Comments */}
      {comment.replies?.length > 0 && (
        <div className="pl-4 border-l-2 border-background-alt-light dark:border-background-alt-dark">
          {comment.replies.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              onReply={onReply}
              isChild={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
