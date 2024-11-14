"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle initial mount to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-accent-yellow dark:bg-accent-yellow-dark z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Back to Top Button */}
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <Footer />

      {/* Toast Container (for notifications) */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {/* Toasts will be rendered here dynamically */}
      </div>
    </div>
  );
}

// Optional: Toast component for notifications
function Toast({ message, type = "info", onClose }) {
  const bgColors = {
    info: "bg-interactive-blue",
    success: "bg-accent-green",
    error: "bg-interactive-red",
    warning: "bg-accent-yellow",
  };

  return (
    <div
      className={`${bgColors[type]} text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-between`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 transition-colors"
      >
        ×
      </button>
    </div>
  );
}
