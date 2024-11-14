export const mockPosts = [
  {
    id: 1,
    title: "Introducing our new AI-powered recommendation system",
    author: "tech_enthusiast",
    community: "r/Technology",
    communityIcon: "https://picsum.photos/seed/tech/50",
    upvotes: 1542,
    comments: 324,
    timeAgo: "5 hours ago",
    content: "We've been working on this for months and finally ready to share our new AI-powered recommendation system. This system uses state-of-the-art machine learning algorithms to provide personalized content recommendations.",
    image: "https://picsum.photos/seed/ai/800/400",
  },
  {
    id: 2,
    title: "The future of web development: A deep dive into new frameworks",
    author: "webdev_pro",
    community: "r/programming",
    communityIcon: "https://picsum.photos/seed/prog/50",
    upvotes: 892,
    comments: 156,
    timeAgo: "2 hours ago",
    content: "As we move into 2024, here are the frameworks that are changing the game...",
    image: "https://picsum.photos/seed/web/800/400",
  },
  {
    id: 3,
    title: "Just captured this stunning sunset in Norway",
    author: "nature_photographer",
    community: "r/EarthPorn",
    communityIcon: "https://picsum.photos/seed/earth/50",
    upvotes: 2341,
    comments: 89,
    timeAgo: "8 hours ago",
    image: "https://picsum.photos/seed/norway/800/400",
  },
  {
    id: 4,
    title: "My first attempt at digital art - Cyberpunk City",
    author: "digital_artist",
    community: "r/DigitalArt",
    communityIcon: "https://picsum.photos/seed/art/50",
    upvotes: 567,
    comments: 45,
    timeAgo: "3 hours ago",
    image: "https://picsum.photos/seed/cyber/800/400",
  },
];

export const popularCommunities = [
  {
    name: "r/Technology",
    icon: "https://picsum.photos/seed/tech/50",
    members: "2.1M",
    description: "The latest news and discussions about technology",
  },
  {
    name: "r/programming",
    icon: "https://picsum.photos/seed/prog/50",
    members: "1.8M",
    description: "Programming discussions and news",
  },
  {
    name: "r/EarthPorn",
    icon: "https://picsum.photos/seed/earth/50",
    members: "3.2M",
    description: "Beautiful images of our planet",
  },
  {
    name: "r/DigitalArt",
    icon: "https://picsum.photos/seed/art/50",
    members: "890K",
    description: "A community for digital artists",
  },
];

export const trendingTopics = [
  {
    topic: "Artificial Intelligence",
    posts: 1234,
    trending: "+15%",
    image: "https://picsum.photos/seed/ai2/400",
  },
  {
    topic: "Web Development",
    posts: 856,
    trending: "+8%",
    image: "https://picsum.photos/seed/web2/400",
  },
  {
    topic: "Digital Art",
    posts: 654,
    trending: "+12%",
    image: "https://picsum.photos/seed/art2/400",
  },
];

export const mockUser = {
  username: "tech_enthusiast",
  displayName: "Tech Enthusiast",
  avatar: "https://picsum.photos/seed/user/200",
  banner: "https://picsum.photos/seed/banner/1200/300",
  karma: 12543,
  cakeDay: "December 12, 2020",
  bio: "AI researcher and technology enthusiast. Love to share and discuss the latest tech trends.",
  badges: ["Top Contributor", "Pro Developer", "AI Specialist"],
  moderatedCommunities: ["r/Technology", "r/ArtificialIntelligence"],
};
