'use client';

import { useState } from 'react';

export default function VerificationForm() {
  const [formData, setFormData] = useState({
    role: '',
    institution: '',
    department: '',
    academicId: '',
    researchArea: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission will be handled later
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-support-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-primary-navy">Academic Verification</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-primary-gray mb-2">
            Academic Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-support-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-interactive-blue bg-support-white text-primary-gray"
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
            <option value="researcher">Researcher</option>
            <option value="tutor">Tutor</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-gray mb-2">
            Institution Name
          </label>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-support-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-interactive-blue bg-support-white text-primary-gray"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-gray mb-2">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-support-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-interactive-blue bg-support-white text-primary-gray"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-gray mb-2">
            Academic ID
          </label>
          <input
            type="text"
            name="academicId"
            value={formData.academicId}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-support-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-interactive-blue bg-support-white text-primary-gray"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-gray mb-2">
            Research Areas
          </label>
          <input
            type="text"
            name="researchArea"
            value={formData.researchArea}
            onChange={handleChange}
            placeholder="Separate multiple areas with commas"
            className="w-full px-3 py-2 border border-support-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-interactive-blue bg-support-white text-primary-gray"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-gray mb-2">
            Verification Documents
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-support-lightgray border-dashed rounded-md bg-support-lightgray">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-primary-gray"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-primary-gray">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-support-white rounded-md font-medium text-interactive-blue hover:text-accent-yellow focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-interactive-blue"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-primary-gray">
                PDF, PNG, JPG up to 10MB
              </p>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-support-white bg-accent-yellow hover:bg-primary-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-interactive-blue transition-colors duration-200"
          >
            Submit Verification Request
          </button>
        </div>
      </form>
    </div>
  );
}
