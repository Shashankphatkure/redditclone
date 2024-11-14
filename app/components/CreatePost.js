"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreatePost({ inHeader = false }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const postTypes = [
    {
      type: "text",
      icon: "📝",
      label: "Text Post",
      description: "Share your thoughts",
    },
    {
      type: "image",
      icon: "🖼️",
      label: "Image Post",
      description: "Share images and photos",
    },
    {
      type: "link",
      icon: "🔗",
      label: "Link Post",
      description: "Share a link",
    },
    {
      type: "poll",
      icon: "📊",
      label: "Poll Post",
      description: "Create a poll",
    },
  ];

  const handleCreatePost = (type) => {
    router.push(`/submit?type=${type}`);
    setIsModalOpen(false);
  };

  return (
    <>
      {inHeader ? (
        <div className="relative">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="w-full bg-background-alt-light dark:bg-background-alt-dark rounded-full py-2 px-4 text-left text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-yellow"
          >
            Create Post
          </button>
          {isModalOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-background-alt-light dark:border-background-alt-dark z-50">
              {postTypes.map(({ type, icon, label, description }) => (
                <button
                  key={type}
                  onClick={() => handleCreatePost(type)}
                  className="w-full px-4 py-3 flex items-start space-x-3 hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors"
                >
                  <span className="text-xl">{icon}</span>
                  <div className="text-left">
                    <div className="font-medium">{label}</div>
                    <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}
