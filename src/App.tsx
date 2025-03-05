import React, { useState } from 'react';
import { Book } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { LanguageSelector } from './components/LanguageSelector';
import { CategoryBrowser } from './components/CategoryBrowser';
import { DictionaryEntry } from './components/DictionaryEntry';
import { ThemeToggle } from './components/ThemeToggle';
import { useDarkMode } from './hooks/useDarkMode';
import { useDictionaryEntries } from './hooks/useDictionaryEntries';
import type { Language, Category } from './types/dictionary';

function App() {
  const [language, setLanguage] = useState<Language>('english');
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { entries, loading, error } = useDictionaryEntries(selectedCategory);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // TODO: Implement search functionality
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white 
                    dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hokkien Medan Dictionary
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
              <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              {language === 'indonesian' ? 'Kamus Hokkien Medan' :
               language === 'hokkien' ? 'Medan Hokkien Dictionary' :
               'Hokkien Medan Dictionary'}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {language === 'indonesian' ? 'Cari kata dan ungkapan dalam bahasa Hokkien Medan' :
               language === 'hokkien' ? 'Cari kata-kata Hokkien Medan' :
               'Search for Hokkien Medan words and expressions'}
            </p>
          </div>

          <SearchBar onSearch={handleSearch} language={language} />

          <div className="w-full max-w-3xl">
            <CategoryBrowser
              onSelectCategory={setSelectedCategory}
              language={language}
              selectedCategory={selectedCategory}
            />
          </div>

          <div className="w-full max-w-3xl space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg text-red-600 dark:text-red-200">
                {error}
              </div>
            )}
            
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
              </div>
            ) : (
              entries.map(entry => (
                <DictionaryEntry key={entry.id} entry={entry} language={language} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
