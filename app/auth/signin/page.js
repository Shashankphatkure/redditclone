'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const BENEFITS = [
  {
    title: 'Your Reddit Front Page',
    description: 'The best posts from your favorite communities, all in one place.',
    icon: '🏠'
  },
  {
    title: 'Join Communities',
    description: 'Find people who share your interests and passions.',
    icon: '👥'
  },
  {
    title: 'Earn Karma',
    description: 'Get upvoted for your contributions to the community.',
    icon: '⭐'
  }
];

const SOCIAL_PROVIDERS = [
  {
    name: 'Google',
    icon: '/google.svg',
    bgColor: 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700',
    textColor: 'text-gray-700 dark:text-white'
  },
  {
    name: 'GitHub',
    icon: '/github.svg',
    bgColor: 'bg-gray-900 hover:bg-gray-800',
    textColor: 'text-white'
  },
  {
    name: 'Discord',
    icon: '/discord.svg',
    bgColor: 'bg-[#5865F2] hover:bg-[#4752C4]',
    textColor: 'text-white'
  }
];

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Sign in with:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Benefits */}
      <div className="hidden lg:flex lg:flex-1 bg-orange-50 dark:bg-gray-800 p-12 items-center justify-center">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Welcome back to RedditAI
          </h2>
          <div className="space-y-6">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Or{' '}
              <Link href="/auth/signup" className="font-medium text-orange-600 hover:text-orange-500">
                create a new account
              </Link>
            </p>
          </div>

          {/* Social Sign In */}
          <div className="space-y-3">
            {SOCIAL_PROVIDERS.map((provider) => (
              <button
                key={provider.name}
                className={`w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm ${provider.bgColor} ${provider.textColor} font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
              >
                <Image
                  src={provider.icon}
                  alt={provider.name}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Continue with {provider.name}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
