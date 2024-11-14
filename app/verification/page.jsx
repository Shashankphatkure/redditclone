'use client';

import VerificationForm from '../components/VerificationForm';
import VerificationBadge from '../components/VerificationBadge';

export default function VerificationPage() {
  // This would normally come from your auth/user state
  const mockUser = {
    name: 'John Doe',
    isVerified: false,
    role: 'student',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Academic Verification</h1>
          <p className="mt-2 text-sm text-gray-600">
            Verify your academic status to unlock additional features
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Current Status</h2>
              <p className="text-sm text-gray-500">Your verification status and role</p>
            </div>
            <VerificationBadge
              role={mockUser.role}
              isVerified={mockUser.isVerified}
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="mt-1 text-sm text-gray-900">{mockUser.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Role</h3>
                <p className="mt-1 text-sm text-gray-900">{mockUser.role}</p>
              </div>
            </div>
          </div>
        </div>

        {!mockUser.isVerified && (
          <div className="mb-8">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Submit Verification Request
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    Please fill out the form below to submit your academic verification request.
                    Make sure to provide accurate information and required documents.
                  </p>
                </div>
                <div className="mt-5">
                  <VerificationForm />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Verification Benefits
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Tutoring Access</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Verified users can participate in tutoring sessions
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Research Collaboration</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Connect with other verified researchers in your field
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Academic Forums</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Access to specialized academic discussion forums
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}