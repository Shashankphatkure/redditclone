"use client";
import Image from "next/image";

export default function PremiumPage() {
  const features = [
    {
      icon: "🎯",
      title: "Ad-Free Browsing",
      description:
        "Enjoy an uninterrupted browsing experience without any advertisements",
    },
    {
      icon: "⭐",
      title: "Exclusive Awards",
      description:
        "Access to premium awards to give to exceptional posts and comments",
    },
    {
      icon: "🎨",
      title: "Custom Themes",
      description: "Personalize your Reddit experience with exclusive themes",
    },
    {
      icon: "💎",
      title: "Premium Lounge",
      description: "Access to exclusive premium-only communities",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Detailed insights about your posts and comments",
    },
    {
      icon: "🏆",
      title: "Monthly Coins",
      description: "700 Reddit Coins every month to reward great content",
    },
  ];

  const plans = [
    {
      name: "Monthly",
      price: "$5.99",
      period: "per month",
      features: ["All Premium Features", "Cancel Anytime", "700 Monthly Coins"],
      recommended: false,
    },
    {
      name: "Annual",
      price: "$49.99",
      period: "per year",
      features: [
        "All Premium Features",
        "Save 30%",
        "8400 Yearly Coins",
        "2 Free Months",
      ],
      recommended: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-yellow to-accent-green flex items-center justify-center text-3xl">
            ⭐
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">EduReddit Premium</h1>
        <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
          Unlock the best of EduReddit with Premium. Ad-free browsing, exclusive
          features, and more.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-3xl mb-4 block">{feature.icon}</span>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm relative ${
              plan.recommended ? "border-2 border-accent-yellow" : ""
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-yellow text-white px-4 py-1 rounded-full text-sm font-medium">
                Recommended
              </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-text-secondary-light dark:text-text-secondary-dark ml-2">
                {plan.period}
              </span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="text-accent-yellow mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full button-primary py-3">
              Get {plan.name} Premium
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-bold mb-2">What is EduReddit Premium?</h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              EduReddit Premium is our subscription program that gives you
              access to exclusive features, an ad-free experience, and monthly
              Coins to reward exceptional content.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-bold mb-2">Can I cancel anytime?</h3>
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
