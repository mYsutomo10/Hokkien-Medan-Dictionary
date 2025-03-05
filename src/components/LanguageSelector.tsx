import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types/dictionary';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200
                 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
      >
        <option value="hokkien">Hokkien</option>
        <option value="indonesian">Bahasa Indonesia</option>
        <option value="english">English</option>
      </select>
    </div>
  );
}