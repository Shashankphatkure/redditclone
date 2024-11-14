"use client";

import CommunityCard from "../components/CommunityCard";

// Mock data for communities (replace with actual API call later)
const MOCK_COMMUNITIES = [
  {
    name: "Technology",
    description:
      "The latest tech news, discussions, and innovations from around the world.",
    memberCount: 12500000,
    bannerImage: "https://picsum.photos/seed/tech/800/200",
    icon: "https://picsum.photos/seed/techicon/200/200",
  },
  {
    name: "Gaming",
    description:
      "A place for gamers to discuss their favorite games, share tips, and stay updated on gaming news.",
    memberCount: 8900000,
    bannerImage: "https://picsum.photos/seed/gaming/800/200",
    icon: "https://picsum.photos/seed/gameicon/200/200",
  },
  {
    name: "Science",
    description:
      "Exploring the wonders of science, from quantum physics to astronomy and everything in between.",
    memberCount: 5600000,
    bannerImage: "https://picsum.photos/seed/science/800/200",
    icon: "https://picsum.photos/seed/scienceicon/200/200",
  },
  {
    name: "Movies",
    description:
      "Discuss the latest films, classic movies, and everything cinema-related.",
    memberCount: 4300000,
    bannerImage: "https://picsum.photos/seed/movies/800/200",
    icon: "https://picsum.photos/seed/movieicon/200/200",
  },
];

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Popular Communities
          </h1>
          <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">
            Discover and join Reddit's most active communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_COMMUNITIES.map((community) => (
            <CommunityCard key={community.name} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
}
