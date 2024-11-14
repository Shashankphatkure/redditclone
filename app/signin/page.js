"use client";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Username or Email
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-background-alt-light dark:bg-background-alt-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-background-alt-light dark:bg-background-alt-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow"
          />
        </div>
        <button className="w-full button-primary py-2">Sign In</button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          New to RedditClone?{" "}
          <Link
            href="/signup"
            className="text-accent-yellow hover:text-accent-yellow-hover"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
