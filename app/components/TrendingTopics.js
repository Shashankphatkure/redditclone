import Link from "next/link";
import Image from "next/image";
import { trendingTopics } from "../data/mockData";

export default function TrendingTopics() {
  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-4">Trending Today</h2>
      <div className="space-y-4">
        {trendingTopics.map((topic) => (
          <Link
            key={topic.topic}
            href={`/topics/${topic.topic.toLowerCase().replace(/\s+/g, "-")}`}
            className="group block cursor-pointer relative overflow-hidden rounded-lg"
          >
            <div className="relative h-24">
              <Image
                src={topic.image}
                alt={topic.topic}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <h3 className="font-medium text-white group-hover:text-accent-yellow transition-colors">
                  {topic.topic}
                </h3>
                <p className="text-xs text-gray-300">{topic.posts} posts</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
