"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    about: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Safety Center", href: "/safety" },
      { label: "Community Guidelines", href: "/guidelines" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Content Policy", href: "/content-policy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
    apps: [
      { label: "iOS App", href: "#", icon: "🍎" },
      { label: "Android App", href: "#", icon: "🤖" },
    ],
  };

  const socialLinks = [
    { label: "Twitter", href: "#", icon: "𝕏" },
    { label: "Facebook", href: "#", icon: "f" },
    { label: "Instagram", href: "#", icon: "📸" },
    { label: "LinkedIn", href: "#", icon: "in" },
  ];

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-background-alt-light dark:border-background-alt-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
              About RedditAI
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Apps Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
              Get the App
            </h3>
            <div className="space-y-4">
              {footerLinks.apps.map((app) => (
                <Link
                  key={app.label}
                  href={app.href}
                  className="flex items-center space-x-2 px-4 py-2 bg-background-alt-light dark:bg-background-alt-dark rounded-lg hover:bg-accent-yellow/10 transition-colors"
                >
                  <span className="text-2xl">{app.icon}</span>
                  <span className="text-text-primary-light dark:text-text-primary-dark">
                    {app.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-background-alt-light dark:border-background-alt-dark">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.svg"
                alt="RedditAI"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                © {new Date().getFullYear()} RedditAI. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          <div className="mt-6 flex justify-center">
            <select className="px-4 py-2 bg-background-light dark:bg-background-dark border border-background-alt-light dark:border-background-alt-dark rounded-lg text-text-secondary-light dark:text-text-secondary-dark focus:ring-2 focus:ring-accent-yellow">
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
