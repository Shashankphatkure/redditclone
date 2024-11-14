export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-effect p-6 rounded-xl mb-8">
        <h1 className="text-2xl font-bold mb-4">AI-Powered Search</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Ask anything or search for content..."
            className="w-full glass-effect rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 button-primary">
            Search
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          Try: "Find posts about machine learning" or "Show me the most popular gaming communities"
        </div>
      </div>

      <div className="space-y-6">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Popular Searches</h2>
            <button className="text-sm text-orange-500 hover:text-orange-400">View all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "AI and Machine Learning",
              "Web Development",
              "Gaming News",
              "Technology Trends",
            ].map((topic) => (
              <button
                key={topic}
                className="glass-effect p-3 rounded-lg text-left hover:bg-white/5 transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
          <div className="space-y-4">
            {[
              {
                topic: "Artificial Intelligence",
                posts: 1234,
                trending: "+15%",
              },
              {
                topic: "Programming",
                posts: 856,
                trending: "+8%",
              },
              // Add more trending topics
            ].map((item) => (
              <div
                key={item.topic}
                className="flex items-center justify-between hover-effect p-3 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{item.topic}</h3>
                  <p className="text-sm text-gray-400">{item.posts} posts</p>
                </div>
                <span className="text-green-500">{item.trending}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
