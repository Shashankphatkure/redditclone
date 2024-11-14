export default function GetAppPage() {
  const platforms = [
    {
      name: "iOS",
      icon: "📱",
      features: ["Real-time notifications", "Dark mode", "Custom feeds"],
      downloadUrl: "#",
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      name: "Android",
      icon: "🤖",
      features: ["Material design", "Voice commands", "Widget support"],
      downloadUrl: "#",
      bgColor: "from-green-500 to-green-600",
    },
    {
      name: "Desktop",
      icon: "💻",
      features: [
        "Enhanced productivity",
        "Multiple windows",
        "Keyboard shortcuts",
      ],
      downloadUrl: "#",
      bgColor: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent-yellow/20 to-transparent rounded-3xl blur-3xl"></div>
        <h1 className="text-5xl font-bold mb-6">Get the EduReddit App</h1>
        <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
          The best way to experience EduReddit on all your devices
        </p>
      </div>

      {/* Platform Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div
              className={`bg-gradient-to-r ${platform.bgColor} p-8 text-center text-white`}
            >
              <div className="text-6xl mb-4">{platform.icon}</div>
              <h2 className="text-2xl font-bold">{platform.name}</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {platform.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-text-secondary-light dark:text-text-secondary-dark"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center mr-3">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-accent-yellow to-accent-green hover:from-accent-yellow-hover hover:to-accent-green-dark text-white rounded-full py-3 font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Download for {platform.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Use Our App?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "⚡",
              title: "Fast & Responsive",
              desc: "Optimized for speed on all devices",
            },
            {
              icon: "🌙",
              title: "Dark Mode",
              desc: "Easy on your eyes, day and night",
            },
            {
              icon: "🔔",
              title: "Instant Notifications",
              desc: "Never miss important updates",
            },
            {
              icon: "🎨",
              title: "Customizable",
              desc: "Personalize your experience",
            },
            {
              icon: "🔒",
              title: "Secure",
              desc: "Your data is always protected",
            },
            {
              icon: "💫",
              title: "Smooth Experience",
              desc: "Seamless navigation and interactions",
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center p-4">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h3 className="font-bold mb-1">{feature.title}</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
