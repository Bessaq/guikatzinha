import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Autoplay failed:', error);
          setIsPlaying(false);
          toast({
            title: "🎵 Clique para tocar a música!",
            description: "Os navegadores precisam de uma interação do usuário para tocar áudio.",
          });
        }
      };

      playAudio();
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

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