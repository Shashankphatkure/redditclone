import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <article className="card mb-4">
      <div className="flex items-start space-x-4">
        <div className="flex flex-col items-center space-y-2">
          <button className="hover:text-orange-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <span className="font-medium">{post.upvotes}</span>
          <button className="hover:text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href={`/r/${post.community}`} className="hover:text-white">
              <div className="flex items-center space-x-2">
                {post.communityIcon && (
                  <Image
                    src={post.communityIcon}
                    alt={post.community}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                )}
                <span>{post.community}</span>
              </div>
            </Link>
            <span>•</span>
            <Link href={`/u/${post.author}`} className="hover:text-white">
              Posted by u/{post.author}
            </Link>
            <span>•</span>
            <span>{post.timeAgo}</span>
          </div>
          
          <Link href={`/post/${post.id}`} className="block mt-2">
            <h2 className="text-xl font-semibold hover:text-orange-500">{post.title}</h2>
            {post.image && (
              <div className="mt-4 relative rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="object-cover"
                />
              </div>
            )}
            <p className="mt-2 text-gray-300">{post.content}</p>
          </Link>
          
          <div className="flex items-center space-x-4 mt-4">
            <button className="flex items-center space-x-2 hover-effect rounded-full px-3 py-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{post.comments} Comments</span>
            </button>
            
            <button className="flex items-center space-x-2 hover-effect rounded-full px-3 py-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Share</span>
            </button>
            
            <button className="flex items-center space-x-2 hover-effect rounded-full px-3 py-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
