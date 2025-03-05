// Base URL for Google Cloud Storage bucket
const GCS_BUCKET_URL = 'https://storage.googleapis.com/hokkien-medan-dictionary';

export function getAudioUrl(word: string): string {
  // Convert the word to a URL-safe format
  const safeWord = word.toLowerCase().replace(/\s+/g, '-');
  
  // Return the full GCS URL
  // Note: This is a dummy URL that will need to be updated with the actual GCS bucket
  return `${GCS_BUCKET_URL}/audio/${safeWord}.mp3`;
}
