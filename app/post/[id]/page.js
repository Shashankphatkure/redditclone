export default function PostPage({ params }) {
  // Mock post data
  const post = {
    id: params.id,
    title: "Introducing our new AI-powered recommendation system",
    author: "tech_enthusiast",
    community: "r/Technology",
    upvotes: 1542,
    comments: 324,
    timeAgo: "5 hours ago",
    content: "We've been working on this for months and finally ready to share our new AI-powered recommendation system. This system uses state-of-the-art machine learning algorithms to provide personalized content recommendations based on user behavior and preferences.",
    comments: [
      {
        id: 1,
        author: "ai_researcher",
        content: "This is fascinating! What kind of model architecture are you using?",
        upvotes: 245,
        timeAgo: "4 hours ago",
        replies: [
          {
            id: 2,
            author: "tech_enthusiast",
            content: "We're using a transformer-based architecture with some custom modifications for better performance.",
            upvotes: 123,
            timeAgo: "3 hours ago",
          },
        ],
      },
      {
        id: 3,
        author: "curious_dev",
        content: "How does this compare to existing recommendation systems?",
        upvotes: 189,
        timeAgo: "4 hours ago",
      },
    ],
  };

  function Comment({ comment, isReply = false }) {
    return (
      <div className={`${isReply ? "ml-8" : ""}`}>
        <div className="card">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span className="text-orange-500">u/{comment.author}</span>
            <span>•</span>
            <span>{comment.timeAgo}</span>
          </div>
          
          <p className="mt-2">{comment.content}</p>
          
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <button className="hover:text-orange-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <span>{comment.upvotes}</span>
              <button className="hover:text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <button className="flex items-center space-x-2 hover-effect rounded-full px-3 py-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Reply</span>
            </button>
          </div>
        </div>
        
        {comment.replies?.map((reply) => (
          <Comment key={reply.id} comment={reply} isReply={true} />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
          <span className="text-orange-500">{post.community}</span>
          <span>•</span>
          <span>Posted by u/{post.author}</span>
          <span>•</span>
          <span>{post.timeAgo}</span>
        </div>

        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-300">{post.content}</p>

        <div className="flex items-center space-x-4 mt-6">
          <div className="flex items-center space-x-2">
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

      <div className="mb-6">
        <div className="card">
          <textarea
            placeholder="What are your thoughts?"
            className="w-full glass-effect rounded-lg p-4 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="flex justify-end mt-4">
            <button className="button-primary">Comment</button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
