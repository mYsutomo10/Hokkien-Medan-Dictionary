import React from 'react';
import { AudioPlayer } from './AudioPlayer';
import type { DictionaryEntry as DictionaryEntryType, Language } from '../types/dictionary';

interface DictionaryEntryProps {
  entry: DictionaryEntryType;
  language: Language;
}

export function DictionaryEntry({ entry, language }: DictionaryEntryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {entry.hokkien.word}
          </h3>
          <div className="mt-1 space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              POJ: {entry.hokkien.poj}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              IPA: {entry.hokkien.ipa}
            </p>
          </div>
        </div>
        <AudioPlayer audioUrl={entry.hokkien.audioUrl} word={entry.hokkien.word} />
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700 dark:text-gray-300">
          {language === 'indonesian' ? 'Terjemahan' :
           language === 'hokkien' ? 'Arti' : 'Translation'}
        </h4>
        <div className="space-y-1">
          <p className="text-gray-900 dark:text-white">
            {language === 'indonesian' ? 'Indonesia: ' :
             language === 'hokkien' ? 'Indonesia: ' : 'Indonesian: '}
            <span className="font-medium">{entry.translations.indonesian}</span>
          </p>
          <p className="text-gray-900 dark:text-white">
            {language === 'indonesian' ? 'Inggris: ' :
             language === 'hokkien' ? 'Inggris: ' : 'English: '}
            <span className="font-medium">{entry.translations.english}</span>
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700 dark:text-gray-300">
          {language === 'indonesian' ? 'Contoh Penggunaan' :
           language === 'hokkien' ? 'Contoh' : 'Examples'}
        </h4>
        <div className="space-y-3">
          {entry.examples.map((example, index) => (
            <div key={index} className="space-y-1">
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {example.hokkien}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {example[language]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <div className="flex flex-wrap gap-2">
          {entry.category.map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}