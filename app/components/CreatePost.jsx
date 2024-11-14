'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState('text');
  const [imageUrl, setImageUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [academicLevel, setAcademicLevel] = useState('');
  const [isResearchPaper, setIsResearchPaper] = useState(false);
  const [citations, setCitations] = useState('');
  const router = useRouter();

  const topics = [
    'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'Engineering', 'Medicine', 'Psychology', 'Economics', 'Literature',
    'History', 'Philosophy', 'Sociology', 'Political Science', 'Education'
  ];

  const academicLevels = [
    'Undergraduate', 'Graduate', 'Doctoral', 'Post-Doctoral', 'Professional'
  ];

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = {
      title,
      content,
      postType,
      topic: selectedTopic,
      tags,
      academicLevel,
      isResearchPaper,
      citations: isResearchPaper ? citations : undefined,
      ...(postType === 'image' && { imageUrl }),
      ...(postType === 'link' && { linkUrl }),
    };
    
    // Here you would typically make an API call to create the post
    console.log(postData);
    
    // Reset form and close modal
    setTitle('');
    setContent('');
    setPostType('text');
    setImageUrl('');
    setLinkUrl('');
    setSelectedTopic('');
    setTags([]);
    setAcademicLevel('');
    setIsResearchPaper(false);
    setCitations('');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full px-4 py-2 bg-accent-yellow text-primary-navy rounded-lg hover:bg-primary-navy hover:text-support-white transition-colors font-medium shadow-sm"
      >
        Create Academic Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-primary-navy/50 flex items-center justify-center p-4 z-50">
          <div className="bg-support-white rounded-lg w-full max-w-3xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary-navy">Create an Academic Post</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-gray hover:text-interactive-red transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Post Type Selection */}
              <div className="flex gap-4 border-b border-support-lightgray pb-4">
                <button
                  type="button"
                  onClick={() => setPostType('text')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    postType === 'text'
                      ? 'bg-accent-yellow text-primary-navy'
                      : 'bg-support-lightgray text-primary-gray hover:bg-primary-navy/10'
                  }`}
                >
                  Text Post
                </button>
                <button
                  type="button"
                  onClick={() => setPostType('image')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    postType === 'image'
                      ? 'bg-accent-yellow text-primary-navy'
                      : 'bg-support-lightgray text-primary-gray hover:bg-primary-navy/10'
                  }`}
                >
                  Image Post
                </button>
                <button
                  type="button"
                  onClick={() => setPostType('link')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    postType === 'link'
                      ? 'bg-accent-yellow text-primary-navy'
                      : 'bg-support-lightgray text-primary-gray hover:bg-primary-navy/10'
                  }`}
                >
                  Link Post
                </button>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-primary-gray mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-support-lightgray bg-support-white focus:outline-none focus:ring-2 focus:ring-interactive-blue focus:border-interactive-blue"
                  placeholder="Give your academic post a title"
                  required
                />
              </div>

              {/* Academic Level */}
              <div>
                <label className="block text-sm font-medium text-primary-gray mb-2">
                  Academic Level
                </label>
                <select
                  value={academicLevel}
                  onChange={(e) => setAcademicLevel(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-support-lightgray bg-support-white focus:outline-none focus:ring-2 focus:ring-interactive-blue focus:border-interactive-blue"
                  required
                >
                  <option value="">Select academic level</option>
                  {academicLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Topic Selection */}
              <div>
                <label className="block text-sm font-medium text-primary-gray mb-2">
                  Academic Field
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-support-lightgray bg-support-white focus:outline-none focus:ring-2 focus:ring-interactive-blue focus:border-interactive-blue"
                  required
                >
                  <option value="">Select an academic field</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>

              {/* Research Paper Toggle */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="researchPaper"
                  checked={isResearchPaper}
                  onChange={(e) => setIsResearchPaper(e.target.checked)}
                  className="w-4 h-4 text-interactive-blue focus:ring-interactive-blue border-support-lightgray rounded"
                />
                <label htmlFor="researchPaper" className="text-sm font-medium text-primary-gray">
                  This is a research paper
                </label>
              </div>

              {/* Content based on post type */}
              {postType === 'text' && (
                <div>
                  <label className="block text-sm font-medium text-primary-gray mb-2">
                    Content
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-support-lightgray bg-support-white focus:outline-none focus:ring-2 focus:ring-interactive-blue focus:border-interactive-blue h-40"
                    placeholder={isResearchPaper ? "Enter your research paper abstract or summary..." : "Share your academic insights..."}
                    required
                  />
                </div>
              )}

              {postType === 'image' && (
                <div>
                  <label className="block text-sm font-medium text-primary-gray mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-support-lightgray bg-support-white focus:outline-none focus:ring-2 focus:ring-interactive-blue focus:border-interactive-blue"
                    placeholder="Enter image URL (diagrams, charts, etc.)"
                    required
                  />
                </div>
              )}

              {postType === 'link' && (
                <div>
                  <label className="block text-sm font-medium text-primary-gray mb-2">
                    Link URL
                  </label>
                  <input
                    type="url"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-support-lightgray bg-support-white focus:outline-none focus:ring-2 focus:ring-interactive-blue focus:border-interactive-blue"
                    placeholder="Enter academic resource URL"
                    required
                  />
                </div>
              )}

              {isResearchPaper && (
                <div>
                  <label className="block text-sm font-medium text-primary-gray mb-2">
                    Citations
                  </label>
                  <textarea
                    value={citations}
                    onChange={(e) => setCitations(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-support-lightgray bg-support-white focus:outline-none focus:ring-2 focus:ring-interactive-blue focus:border-interactive-blue h-24"
                    placeholder="Enter your paper's citations..."
                  />
                </div>
              )}

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-primary-gray mb-2">
                  Academic Tags
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border border-support-lightgray bg-support-white focus:outline-none focus:ring-2 focus:ring-interactive-blue focus:border-interactive-blue"
                    placeholder="Add relevant academic tags"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="px-4 py-2 bg-interactive-blue text-support-white rounded-lg hover:bg-primary-navy transition-colors"
                  >
                    Add Tag
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-navy/10 text-primary-navy"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-2 text-primary-navy hover:text-interactive-red"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-primary-gray hover:text-primary-navy transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent-yellow text-primary-navy rounded-lg hover:bg-primary-navy hover:text-support-white transition-colors font-medium"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
