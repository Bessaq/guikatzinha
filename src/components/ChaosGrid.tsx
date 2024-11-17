import React from 'react';
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/friends1.jpg",
    alt: "Friends having fun",
    className: "col-span-2 row-span-2 animate-edge-bounce-1"
  },
  {
    src: "/friends2.jpg",
    alt: "Friends photo",
    className: "col-span-1 row-span-1 animate-edge-bounce-2"
  },
  {
    src: "/friends3.jpg",
    alt: "Friends moment",
    className: "col-span-1 row-span-2 animate-edge-bounce-3"
  },
  {
    src: "/friends4.jpg",
    alt: "Friends together",
    className: "col-span-2 row-span-1 animate-edge-bounce-4"
  },
  {
    src: "/friends5.jpg",
    alt: "Friends selfie",
    className: "col-span-1 row-span-1 animate-edge-bounce-1"
  }
];

const ChaosGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 relative overflow-hidden h-[600px]">
      {images.map((img, idx) => (
        <div 
          key={idx} 
          className={cn(
            "relative overflow-hidden rounded-lg transform transition-all duration-[3000ms]",
            img.className
          )}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Error loading image: ${img.src}`);
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      ))}
    </div>
  );
};

export default ChaosGrid;