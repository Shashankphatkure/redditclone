"use client";
import Link from "next/link";
import Image from "next/image";
import { trendingTopics } from "../data/mockData";

export default function TopicsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Explore Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingTopics.map((topic) => (
          <Link
            key={topic.topic}
            href={`/topics/${topic.topic.toLowerCase().replace(/\s+/g, "-")}`}
            className="group relative overflow-hidden rounded-lg aspect-video"
          >
            <Image
              src={topic.image}
              alt={topic.topic}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white">{topic.topic}</h3>
              <p className="text-sm text-gray-300">{topic.posts} posts</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
