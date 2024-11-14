"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function TopicPage() {
  const { topic } = useParams();

  // Mock topic data (replace with actual API call)
  const topicData = {
    name: topic,
    description: "Explore the latest discussions and content in this topic",
    subscriberCount: 156000,
    activeNow: 1200,
    bannerImage: `https://picsum.photos/seed/${topic}/1000/300`,
    communities: [
      {
        name: "Community 1",
        members: 12500,
        icon: `https://picsum.photos/seed/com1/100`,
      },
      {
        name: "Community 2",
        members: 8900,
        icon: `https://picsum.photos/seed/com2/100`,
      },
      // Add more communities...
    ],
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="relative h-48">
        <Image
          src={topicData.bannerImage}
          alt={topicData.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
            {topicData.name}
          </h1>
          <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">
            {topicData.description}
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              {topicData.subscriberCount.toLocaleString()} subscribers
            </span>
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              {topicData.activeNow.toLocaleString()} online
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicData.communities.map((community) => (
            <div
              key={community.name}
              className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm p-4"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={community.icon}
                  alt={community.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                    {community.name}
                  </h3>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {community.members.toLocaleString()} members
                  </p>
                </div>
                <button className="ml-auto bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark px-4 py-1 rounded-full text-sm">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
