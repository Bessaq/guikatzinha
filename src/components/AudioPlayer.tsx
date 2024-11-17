import React, { useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Try to play audio when component mounts
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.log("Autoplay prevented - user interaction required");
      }
    };
    
    playAudio();
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      controls
      className="fixed bottom-4 right-4 z-50"
    >
      <source src="/rina.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;