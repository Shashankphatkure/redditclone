import Link from "next/link";
import Image from "next/image";
import VoteButtons from "./VoteButtons";

export default function PostCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex p-2">
        {/* Vote Buttons */}
        <div className="px-2">
          <VoteButtons initialUpvotes={post.upvotes} />
        </div>

        {/* Post Content */}
        <div className="flex-1">
          {/* Post Header */}
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <Link href={`/r/${post.subreddit}`} className="hover:underline">
              r/{post.subreddit}
            </Link>
            <span>•</span>
            <span>Posted by</span>
            <Link href={`/u/${post.author}`} className="hover:underline">
              u/{post.author}
            </Link>
            <span>•</span>
            <span>{post.timeAgo}</span>
          </div>

          {/* Post Title */}
          <Link href={`/post/${post.id}`}>
            <h2 className="text-lg font-medium my-2 hover:underline">
              {post.title}
            </h2>
          </Link>

          {/* Post Image (if exists) */}
          {post.image && (
            <div className="relative mt-2 aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
          )}

          {/* Post Content */}
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {post.content}
          </p>

          {/* Post Footer */}
          <div className="flex items-center space-x-4 mt-4 text-gray-500 dark:text-gray-400">
            <button className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
              <span>💬</span>
              <span>{post.comments} comments</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
              <span>↗️</span>
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
              <span>⭐</span>
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
