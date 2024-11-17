import React from 'react';
import { cn } from "@/lib/utils";

interface BlinkingTextProps {
  text: string;
  className?: string;
}

const BlinkingText = ({ text, className }: BlinkingTextProps) => {
  return (
    <div 
      className={cn(
        "retro-text animate-blink text-center",
        className
      )}
      data-text={text}
    >
      {text}
    </div>
  );
};

export default BlinkingText;