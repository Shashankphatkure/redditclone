"use client";
import Link from "next/link";
import { headerMenuItems } from "../data/mockData";

const resourceItems = headerMenuItems.find(
  (menu) => menu.label === "Resources"
).items;

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resourceItems.map((item) => (
          <Link
            key={item.name}
            href={`/resources/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Learn more about {item.name.toLowerCase()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
