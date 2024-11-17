import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // Set initial volume to 50%
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-black/80 p-2 rounded-lg">
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/rina.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <Button 
        variant="ghost" 
        size="icon"
        onClick={togglePlay}
        className="text-white hover:text-neon-pink"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="text-white hover:text-neon-pink"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default AudioPlayer;