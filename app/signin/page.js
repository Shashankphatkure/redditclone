"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Sign In Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-yellow to-accent-green flex items-center justify-center text-3xl">
                🎯
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Sign in to continue to EduReddit
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Username or Email
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-background-alt-light dark:bg-background-alt-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all"
                placeholder="Enter your username or email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-background-alt-light dark:bg-background-alt-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded text-accent-yellow focus:ring-accent-yellow mr-2"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-accent-yellow hover:text-accent-yellow-hover"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-accent-yellow to-accent-green hover:from-accent-yellow-hover hover:to-accent-green-dark text-white rounded-xl py-3 font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              New to EduReddit?{" "}
              <Link
                href="/signup"
                className="text-accent-yellow hover:text-accent-yellow-hover font-medium"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* Social Sign In */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <div className="text-center mb-4 text-text-secondary-light dark:text-text-secondary-dark">
            Or continue with
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Google", icon: "🔍" },
              { name: "GitHub", icon: "🐱" },
            ].map((provider) => (
              <button
                key={provider.name}
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span>{provider.icon}</span>
                <span>{provider.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
