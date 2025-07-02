import React from 'react';

type EmptyStateProps = {
  title: string;
  description: string;
  cta?: React.ReactNode;
};

export default function EmptyState({ title, description, cta }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-6 w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
        {/* Illustration placeholder */}
        <span className="text-5xl text-gray-300">📦</span>
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-4 text-center max-w-xs">{description}</p>
      {cta}
    </div>
  );
} 