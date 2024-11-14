"use client";

import Link from "next/link";

export default function CatchAllPage({ params }) {
  const path = params.slug.join("/");

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
      <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8">
        The page /{path} is coming soon!
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-accent-yellow hover:bg-accent-yellow-hover text-white rounded-full transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
