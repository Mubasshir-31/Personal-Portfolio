import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        aria-hidden="true"
      >
        <path
          d="M12 8C9.79086 8 8 9.79086 8 12V24H20C22.2091 24 24 22.2091 24 20V12C24 9.79086 22.2091 8 20 8H12Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-headline font-bold text-xl">Mohd Mubasshir Khan</span>
    </div>
  );
}
