import React from 'react';

export function Logo({ className = '', theme = 'light' }: { className?: string, theme?: 'light' | 'dark' }) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const blueColor = theme === 'dark' ? 'text-blue-400' : 'text-blue-800';
  const iconBlue = theme === 'dark' ? 'text-blue-400' : 'text-blue-700';

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative w-12 h-12 mb-1">
        {/* Hammer (Black/White) - Top Right to Bottom Left */}
        <svg className={`absolute inset-0 w-full h-full ${textColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)' }}>
          <path d="M15 4h4l-2 6" />
          <path d="M14 10l-8 8a2 2 0 0 1-2.828-2.828l8-8" />
          <path d="M15 4l-3 3" />
        </svg>
        {/* Wrench (Blue) - Top Left to Bottom Right */}
        <svg className={`absolute inset-0 w-full h-full ${iconBlue}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(45deg)' }}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
      <div className={`text-2xl font-bold tracking-tighter ${blueColor} leading-none`}>S&S</div>
      <div className={`text-[0.5rem] font-semibold tracking-widest ${textColor} mt-1`}>HANDWERK & SERVICE</div>
    </div>
  );
}
