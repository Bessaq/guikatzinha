import React from 'react';
import { cn } from "@/lib/utils";

const media = [
  {
    type: 'image',
    src: "/friends1.JPEG",
    alt: "Friends having fun",
    className: "col-span-2 row-span-2 animate-edge-bounce-1"
  },
  {
    type: 'image',
    src: "/friends2.JPEG",
    alt: "Friends photo",
    className: "col-span-1 row-span-1 animate-edge-bounce-2"
  },
  {
    type: 'video',
    src: "/video1.mp4",
    alt: "Friends video 1",
    className: "col-span-1 row-span-2 animate-edge-bounce-3"
  },
  {
    type: 'image',
    src: "/friends4.JPG",
    alt: "Friends together",
    className: "col-span-2 row-span-1 animate-edge-bounce-4"
  },
  {
    type: 'video',
    src: "/video2.mp4",
    alt: "Friends video 2",
    className: "col-span-1 row-span-1 animate-edge-bounce-1"
  },
  {
    type: 'image',
    src: "/friends5.JPG",
    alt: "Friends selfie",
    className: "col-span-1 row-span-1 animate-edge-bounce-2"
  },
  {
    type: 'image',
    src: "/friends3.JPG",
    alt: "Friends moment",
    className: "col-span-1 row-span-2 animate-edge-bounce-3"
  }
];

const ChaosGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 relative overflow-hidden h-[600px]">
      {media.map((item, idx) => (
        <div 
          key={idx} 
          className={cn(
            "relative overflow-hidden rounded-lg transform transition-all duration-[3000ms]",
            item.className
          )}
        >
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Error loading image: ${item.src}`);
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          ) : (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Error loading video: ${item.src}`);
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      ))}
    </div>
  );
};

export default ChaosGrid;