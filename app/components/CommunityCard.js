'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CommunityCard({ community }) {
  const {
    name,
    description,
    memberCount = 0,
    bannerImage = '/images/default-banner.jpg',
    icon = '/images/default-community.png',
  } = community;

  return (
    <Link href={`/r/${name}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="h-24 relative">
          <Image
            src={bannerImage}
            alt={`${name} banner`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 -mt-10 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
              <Image
                src={icon}
                alt={`${name} icon`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">r/{name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{memberCount.toLocaleString()} members</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
          <button className="mt-4 w-full py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-sm font-medium">
            Join Community
          </button>
        </div>
      </div>
    </Link>
  );
}
