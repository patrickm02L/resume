'use client';

import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="fixed top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-200 shadow-sm"
        aria-label="Theme toggle"
        disabled
      >
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-gray-700 dark:text-gray-300"
        >
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1 transition-all duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        // Sun icon (outlined)
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
        >
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ) : (
        // Moon icon (outlined)
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      )}
    </button>
  );
}
