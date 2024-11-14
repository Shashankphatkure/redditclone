'use client';

export default function VerificationBadge({ role, isVerified }) {
  const getBadgeColor = () => {
    if (!isVerified) return 'bg-interactive-red bg-opacity-10 text-interactive-red';
    
    switch (role) {
      case 'student':
        return 'bg-accent-green bg-opacity-10 text-accent-green';
      case 'professor':
        return 'bg-primary-navy bg-opacity-10 text-primary-navy';
      case 'researcher':
        return 'bg-interactive-blue bg-opacity-10 text-interactive-blue';
      case 'tutor':
        return 'bg-accent-yellow bg-opacity-10 text-accent-yellow';
      default:
        return 'bg-primary-gray bg-opacity-10 text-primary-gray';
    }
  };

  const getVerificationIcon = () => {
    if (!isVerified) {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor()} shadow-sm`}>
      <span className="mr-1.5">{getVerificationIcon()}</span>
      {isVerified ? `Verified ${role}` : 'Unverified'}
    </span>
  );
}
