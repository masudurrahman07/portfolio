import React from 'react';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-1 flex items-center justify-center"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="material-icons-outlined">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;