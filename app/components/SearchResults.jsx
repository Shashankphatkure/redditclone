'use client';

import Link from 'next/link';
import { useState } from 'react';

const ITEMS_PER_PAGE = 10;

export default function SearchResults({ results, query }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterResults = (items) => {
    if (activeFilter === 'all') return items;
    return items.filter(item => item.type === activeFilter);
  };

  const paginateResults = (items) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const filteredResults = filterResults(results);
  const paginatedResults = paginateResults(filteredResults);
  const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);

  const getResultIcon = (type) => {
    switch (type) {
      case 'post':
        return (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
          </svg>
        );
      case 'user':
        return (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'community':
        return (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {results.length > 0 ? (
        <>
          <div className="mb-6 flex items-center space-x-4">
            <span className="text-sm text-primary-gray">
              {filteredResults.length} results for "{query}"
            </span>
            <div className="flex items-center space-x-2">
              {['all', 'post', 'user', 'community'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                    activeFilter === filter
                      ? 'bg-primary-navy text-support-white'
                      : 'bg-support-lightgray text-primary-gray hover:bg-primary-navy/10'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {paginatedResults.map((result, index) => (
              <Link
                key={result.id}
                href={result.url}
                className="block p-4 bg-support-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    result.type === 'post'
                      ? 'bg-interactive-blue/10 text-interactive-blue'
                      : result.type === 'user'
                      ? 'bg-accent-green/10 text-accent-green'
                      : 'bg-accent-yellow/10 text-accent-yellow'
                  }`}>
                    {getResultIcon(result.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-primary-navy">
                      {result.title}
                    </h3>
                    <p className="mt-1 text-sm text-primary-gray">
                      {result.description}
                    </p>
                    <div className="mt-2 flex items-center space-x-4 text-xs text-primary-gray/60">
                      <span>{result.type}</span>
                      <span>•</span>
                      <span>{result.date}</span>
                      {result.type === 'post' && (
                        <>
                          <span>•</span>
                          <span>{result.comments} comments</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-md ${
                  currentPage === 1
                    ? 'text-primary-gray/40 cursor-not-allowed'
                    : 'text-primary-navy hover:bg-primary-navy/10'
                }`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === i + 1
                      ? 'bg-primary-navy text-support-white'
                      : 'text-primary-navy hover:bg-primary-navy/10'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-md ${
                  currentPage === totalPages
                    ? 'text-primary-gray/40 cursor-not-allowed'
                    : 'text-primary-navy hover:bg-primary-navy/10'
                }`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-primary-gray/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-primary-gray">No results found</h3>
          <p className="mt-2 text-sm text-primary-gray/60">
            Try adjusting your search or filter to find what you're looking for
          </p>
        </div>
      )}
    </div>
  );
}
