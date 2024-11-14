"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function CommunityPage() {
  const { community } = useParams();

  // Mock community data (replace with actual API call)
  const communityData = {
    name: community,
    description: "A vibrant community for discussion and sharing knowledge",
    memberCount: 125000,
    onlineCount: 1200,
    bannerImage: `https://picsum.photos/seed/${community}/1000/200`,
    icon: `https://picsum.photos/seed/${community}icon/100`,
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="relative h-48 bg-background-alt-light dark:bg-background-alt-dark">
        <Image
          src={communityData.bannerImage}
          alt={communityData.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="flex items-end space-x-4">
          <Image
            src={communityData.icon}
            alt={communityData.name}
            width={128}
            height={128}
            className="rounded-full border-4 border-background-light dark:border-background-dark"
          />

          <div className="pb-4">
            <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
              r/{communityData.name}
            </h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              {communityData.memberCount.toLocaleString()} members •
              {communityData.onlineCount.toLocaleString()} online
            </p>
          </div>

          <button className="ml-auto bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark px-6 py-2 rounded-full font-medium">
            Join
          </button>
        </div>

        <div className="mt-6">
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            {communityData.description}
          </p>
        </div>
      </div>
    </div>
  );
}
