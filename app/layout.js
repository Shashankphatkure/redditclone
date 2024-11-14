import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import CreatePost from "./components/CreatePost";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RedditAI Clone",
  description: "A modern Reddit clone with AI features",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
              RedditAI
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/communities" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Communities
              </Link>
              <Link href="/popular" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Popular
              </Link>
              <Link href="/topics" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Topics
              </Link>
            </div>
          </div>
          
          <div className="flex-1 mx-8">
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="w-32">
              <CreatePost />
            </div>
            <Link href="/auth/signin" className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Sign In
            </Link>
            <Link href="/auth/signup" className="hidden md:block px-4 py-2 text-sm font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-20 container mx-auto px-4 pb-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
