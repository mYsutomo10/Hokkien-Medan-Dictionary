import React from 'react';
import { Sun, Moon } from 'lucide-react';
import type { ThemeConfig } from '../types/dictionary';

export function ThemeToggle({ isDarkMode, toggleDarkMode }: ThemeConfig) {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                transition-colors duration-200"
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-gray-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  );
}