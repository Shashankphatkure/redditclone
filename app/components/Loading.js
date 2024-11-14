"use client";

export default function Loading({ variant = "default", text = "Loading..." }) {
  if (variant === "spinner") {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <div className="relative w-12 h-12">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-background-alt-light dark:border-background-alt-dark rounded-full animate-ping" />
          <div className="absolute top-0 left-0 w-full h-full border-4 border-accent-yellow border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-text-secondary-light dark:text-text-secondary-dark animate-pulse">
          {text}
        </p>
      </div>
    );
  }

  if (variant === "skeleton") {
    return (
      <div className="space-y-4 p-4">
        {/* Header Skeleton */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-background-alt-light dark:bg-background-alt-dark rounded-full animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-background-alt-light dark:bg-background-alt-dark rounded w-1/4 animate-pulse" />
            <div className="h-3 bg-background-alt-light dark:bg-background-alt-dark rounded w-1/3 animate-pulse" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-3">
          <div className="h-4 bg-background-alt-light dark:bg-background-alt-dark rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-background-alt-light dark:bg-background-alt-dark rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-background-alt-light dark:bg-background-alt-dark rounded w-2/3 animate-pulse" />
        </div>

        {/* Image Skeleton */}
        <div className="h-48 bg-background-alt-light dark:bg-background-alt-dark rounded animate-pulse" />

        {/* Actions Skeleton */}
        <div className="flex space-x-4">
          <div className="h-8 w-20 bg-background-alt-light dark:bg-background-alt-dark rounded animate-pulse" />
          <div className="h-8 w-24 bg-background-alt-light dark:bg-background-alt-dark rounded animate-pulse" />
          <div className="h-8 w-16 bg-background-alt-light dark:bg-background-alt-dark rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center space-x-2 p-4">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className="w-3 h-3 bg-accent-yellow rounded-full animate-bounce"
            style={{ animationDelay: `${dot * 0.15}s` }}
          />
        ))}
      </div>
    );
  }

  // Default loading indicator
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-background-alt-light dark:border-background-alt-dark rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-4 h-4 bg-accent-yellow rounded-full" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-background-light dark:bg-background-dark rounded-full" />
        </div>
      </div>
    </div>
  );
}
