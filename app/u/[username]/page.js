import Image from "next/image";
import Link from "next/link";
import { mockUser, mockPosts } from "../../data/mockData";
import PostCard from "../../components/PostCard";

export default function UserProfile({ params }) {
  const userPosts = mockPosts.filter(post => post.author === params.username);

  return (
    <div>
      {/* Banner */}
      <div className="relative h-48 md:h-64 -mx-4 sm:-mx-6 lg:-mx-8">
        <Image
          src={mockUser.banner}
          alt="User banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative">
        <div className="glass-effect rounded-lg p-6">
          <div className="flex items-start space-x-6">
            <div className="relative">
              <Image
                src={mockUser.avatar}
                alt={mockUser.displayName}
                width={128}
                height={128}
                className="rounded-full ring-4 ring-white/10"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-effect px-3 py-1 rounded-full text-sm">
                {mockUser.karma} karma
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{mockUser.displayName}</h1>
                  <p className="text-gray-400">u/{mockUser.username}</p>
                </div>
                <button className="button-primary">Follow</button>
              </div>

              <p className="mt-4 text-gray-300">{mockUser.bio}</p>

              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-400">
                <span>Cake day: {mockUser.cakeDay}</span>
                <span>•</span>
                <span>{userPosts.length} posts</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {mockUser.badges.map((badge) => (
                  <span
                    key={badge}
                    className="glass-effect px-3 py-1 rounded-full text-sm text-orange-500"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mt-8">
          <div className="flex space-x-4 border-b border-white/10 mb-6">
            <button className="px-4 py-2 text-orange-500 border-b-2 border-orange-500">
              Posts
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white">
              Comments
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white">
              About
            </button>
          </div>

          {/* User Posts */}
          <div className="space-y-4">
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Moderated Communities */}
        <div className="mt-8">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Moderator of</h2>
            <div className="space-y-4">
              {mockUser.moderatedCommunities.map((community) => (
                <Link
                  key={community}
                  href={`/r/${community}`}
                  className="flex items-center space-x-3 hover-effect p-2 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    r/
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{community}</h3>
                    <p className="text-sm text-gray-400">Moderator</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
