export type Language = 'hokkien' | 'indonesian' | 'english';

export type Category = 
  | 'greetings'
  | 'food'
  | 'family'
  | 'numbers'
  | 'daily'
  | 'business'
  | 'slang'
  | 'verbs';

export interface DictionaryEntry {
  id: string;
  hokkien: {
    word: string;
    poj: string; // Pe̍h-ōe-jī
    ipa: string; // International Phonetic Alphabet
    audioUrl?: string;
  };
  translations: {
    indonesian: string;
    english: string;
  };
  examples: Array<{
    hokkien: string;
    indonesian: string;
    english: string;
  }>;
  category: Category[];
}

export interface SearchResult {
  entry: DictionaryEntry;
  matchType: 'exact' | 'partial' | 'related';
}

export interface ThemeConfig {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
