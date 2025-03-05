import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { getAudioUrl } from '../utils/audio';

interface AudioPlayerProps {
  word: string;
  audioUrl?: string;
}

export function AudioPlayer({ word, audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Get the actual audio URL from GCS or fallback to provided URL
  const actualAudioUrl = audioUrl || getAudioUrl(word);

  const togglePlay = () => {
    if (!actualAudioUrl || !audioRef.current || isError) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Reset error state on new play attempt
      setIsError(false);
      audioRef.current.play().catch(() => {
        setIsError(true);
      });
    }
  };

  React.useEffect(() => {
    if (!actualAudioUrl) return;
    
    const audio = new Audio(actualAudioUrl);
    audioRef.current = audio;
    
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('ended', () => setIsPlaying(false));
    audio.addEventListener('error', () => setIsError(true));
    
    return () => {
      audio.pause();
      audio.remove();
    };
  }, [actualAudioUrl]);

  if (isError) {
    return (
      <button
        className="text-gray-400 dark:text-gray-600 cursor-not-allowed"
        disabled
        title="Audio not available"
      >
        <VolumeX className="h-6 w-6" />
      </button>
    );
  }

  return (
    <button
      onClick={togglePlay}
      className={`transition-colors ${
        isPlaying
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
      }`}
      title={isPlaying ? `Stop pronunciation` : `Play pronunciation of "${word}"`}
      disabled={isError}
    >
      <Volume2 className="h-6 w-6" />
    </button>
  );
}