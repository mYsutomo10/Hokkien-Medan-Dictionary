import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Language } from '../types/dictionary';

interface SearchBarProps {
  onSearch: (query: string) => void;
  language: Language;
}

export function SearchBar({ onSearch, language }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const placeholders = {
    hokkien: 'Cari kata Hokkien...',
    indonesian: 'Cari kata dalam Bahasa Indonesia...',
    english: 'Search for words...'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholders[language]}
          className="w-full px-4 py-3 pl-12 text-lg rounded-xl border border-gray-300 
                   dark:border-gray-600 dark:bg-gray-800 dark:text-white
                   focus:border-blue-500 dark:focus:border-blue-400 
                   focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 
                   transition-all duration-200"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
      </div>
    </form>
  );
}