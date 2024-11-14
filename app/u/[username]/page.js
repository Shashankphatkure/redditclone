"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function UserProfilePage() {
  const { username } = useParams();

  // Mock user data (replace with actual API call)
  const userData = {
    username,
    displayName: "John Doe",
    bio: "Tech enthusiast and community moderator",
    joinDate: "2023-01-15",
    karma: 15234,
    avatarUrl: `https://picsum.photos/seed/${username}/200`,
    bannerUrl: `https://picsum.photos/seed/${username}banner/1000/300`,
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="relative h-48">
        <Image
          src={userData.bannerUrl}
          alt={userData.displayName}
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative">
        <div className="flex items-start space-x-6">
          <Image
            src={userData.avatarUrl}
            alt={userData.displayName}
            width={128}
            height={128}
            className="rounded-full border-4 border-background-light dark:border-background-dark"
          />

          <div>
            <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
              {userData.displayName}
            </h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              u/{userData.username}
            </p>
            <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">
              {userData.bio}
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                {userData.karma.toLocaleString()} karma
              </span>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                Joined {new Date(userData.joinDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          <button className="ml-auto bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark px-6 py-2 rounded-full">
            Follow
          </button>
        </div>

        <div className="mt-8">
          <div className="border-b border-background-alt-light dark:border-background-alt-dark">
            <nav className="flex space-x-8">
              <button className="px-4 py-2 text-text-primary-light dark:text-text-primary-dark border-b-2 border-accent-yellow">
                Posts
              </button>
              <button className="px-4 py-2 text-text-secondary-light dark:text-text-secondary-dark">
                Comments
              </button>
              <button className="px-4 py-2 text-text-secondary-light dark:text-text-secondary-dark">
                About
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
