"use client";
import { useState } from "react";
import Image from "next/image";

export default function PremiumPage() {
  const [billingPeriod, setBillingPeriod] = useState("annual"); // annual or monthly

  const features = [
    {
      icon: "🎯",
      title: "Ad-Free Browsing",
      description:
        "Enjoy an uninterrupted browsing experience without any advertisements",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "⭐",
      title: "Exclusive Awards",
      description:
        "Access to premium awards to give to exceptional posts and comments",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "🎨",
      title: "Custom Themes",
      description: "Personalize your Reddit experience with exclusive themes",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "💎",
      title: "Premium Lounge",
      description: "Access to exclusive premium-only communities",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Detailed insights about your posts and comments",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "🏆",
      title: "Monthly Coins",
      description: "700 Reddit Coins every month to reward great content",
      color: "from-accent-yellow to-accent-green",
    },
  ];

  const plans = {
    monthly: {
      price: "$5.99",
      period: "per month",
      features: ["All Premium Features", "Cancel Anytime", "700 Monthly Coins"],
    },
    annual: {
      price: "$49.99",
      period: "per year",
      features: [
        "All Premium Features",
        "Save 30%",
        "8400 Yearly Coins",
        "2 Free Months",
      ],
      savings: "$21.89",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent-yellow/20 to-transparent rounded-3xl blur-3xl"></div>
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-yellow to-accent-green flex items-center justify-center text-4xl shadow-lg">
            ⭐
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent-yellow to-accent-green bg-clip-text text-transparent">
          EduReddit Premium
        </h1>
        <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
          Elevate your EduReddit experience with Premium. Enjoy ad-free
          browsing, exclusive features, and more.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-4`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Billing Toggle */}
          <div className="flex justify-center p-6 bg-gradient-to-r from-accent-yellow/10 to-accent-green/10">
            <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full flex">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white dark:bg-gray-600 shadow-md"
                    : "hover:bg-white/50 dark:hover:bg-gray-600/50"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingPeriod === "annual"
                    ? "bg-white dark:bg-gray-600 shadow-md"
                    : "hover:bg-white/50 dark:hover:bg-gray-600/50"
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          {/* Plan Details */}
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center">
                <span className="text-5xl font-bold">
                  {plans[billingPeriod].price}
                </span>
                <span className="text-text-secondary-light dark:text-text-secondary-dark ml-2">
                  {plans[billingPeriod].period}
                </span>
              </div>
              {billingPeriod === "annual" && (
                <div className="mt-2 text-accent-yellow">
                  Save {plans.annual.savings} per year
                </div>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {plans[billingPeriod].features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center mr-3">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-accent-yellow to-accent-green hover:from-accent-yellow-hover hover:to-accent-green-dark text-white rounded-full py-4 font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Get Premium {billingPeriod === "annual" ? "Yearly" : "Monthly"}
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">
              What is EduReddit Premium?
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              EduReddit Premium is our subscription program that gives you
              access to exclusive features, an ad-free experience, and monthly
              Coins to reward exceptional content.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">Can I cancel anytime?</h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Yes, you can cancel your Premium subscription at any time. Your
              benefits will continue until the end of your billing period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
