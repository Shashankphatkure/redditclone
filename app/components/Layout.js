"use client";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <main className="max-w-[1800px] mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
