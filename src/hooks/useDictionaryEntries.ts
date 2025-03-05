import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { DictionaryEntry, Category } from '../types/dictionary';

export function useDictionaryEntries(selectedCategory?: Category) {
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEntries() {
      try {
        setLoading(true);
        setError(null);
        
        let q = collection(db, 'dictionary');
        
        if (selectedCategory) {
          q = query(
            collection(db, 'dictionary'),
            where('category', 'array-contains', selectedCategory)
          );
        }
        
        const querySnapshot = await getDocs(q);
        const fetchedEntries = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as DictionaryEntry[];
        
        setEntries(fetchedEntries);
      } catch (err) {
        console.error('Error fetching dictionary entries:', err);
        setError('Failed to load dictionary entries');
      } finally {
        setLoading(false);
      }
    }

    fetchEntries();
  }, [selectedCategory]);

  return { entries, loading, error };
}
