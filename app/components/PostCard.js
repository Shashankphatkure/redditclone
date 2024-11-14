import Link from "next/link";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

export default function PostCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      {/* Vote buttons */}
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <ArrowUpIcon className="h-6 w-6" />
          </button>
          <span className="my-1 font-medium">{post.upvotes}</span>
          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <ArrowDownIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Post content */}
        <div className="flex-1">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <Link href={`/r/${post.subreddit}`} className="hover:underline">
              r/{post.subreddit}
            </Link>
            <span className="mx-1">•</span>
            Posted by u/{post.author} {post.timeAgo}
          </div>
          <h2 className="text-lg font-medium my-2">{post.title}</h2>
          <p className="text-gray-800 dark:text-gray-200">{post.content}</p>

          {/* Action buttons */}
          <div className="flex items-center space-x-4 mt-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">
              <ChatBubbleLeftIcon className="h-5 w-5" />
              <span>{post.comments} Comments</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">
              <ShareIcon className="h-5 w-5" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">
              <BookmarkIcon className="h-5 w-5" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
