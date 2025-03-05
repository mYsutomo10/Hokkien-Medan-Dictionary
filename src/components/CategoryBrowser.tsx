import React from 'react';
import { Hash } from 'lucide-react';
import type { Category, Language } from '../types/dictionary';

interface CategoryBrowserProps {
  onSelectCategory: (category: Category) => void;
  language: Language;
  selectedCategory?: Category;
}

const categories: { id: Category; labels: Record<Language, string> }[] = [
  { id: 'greetings', labels: { english: 'Greetings', indonesian: 'Salam', hokkien: 'Salam' } },
  { id: 'food', labels: { english: 'Food & Drinks', indonesian: 'Makanan & Minuman', hokkien: 'Makanan' } },
  { id: 'family', labels: { english: 'Family', indonesian: 'Keluarga', hokkien: 'Keluarga' } },
  { id: 'numbers', labels: { english: 'Numbers', indonesian: 'Angka', hokkien: 'Angka' } },
  { id: 'daily', labels: { english: 'Daily Life', indonesian: 'Kehidupan Sehari-hari', hokkien: 'Sehari-hari' } },
  { id: 'business', labels: { english: 'Business', indonesian: 'Bisnis', hokkien: 'Bisnis' } },
  { id: 'slang', labels: { english: 'Slang', indonesian: 'Bahasa Gaul', hokkien: 'Bahasa Gaul' } },
  { id: 'verbs', labels: { english: 'Verbs', indonesian: 'Kata Kerja', hokkien: 'Kata Kerja' } },
];

export function CategoryBrowser({ onSelectCategory, language, selectedCategory }: CategoryBrowserProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
            transition-colors duration-200
            ${selectedCategory === category.id
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}
          `}
        >
          <Hash className="h-4 w-4" />
          {category.labels[language]}
        </button>
      ))}
    </div>
  );
}