import React from 'react';
import { cn } from "@/lib/utils";

const images = [
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Laptop",
    className: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Circuit",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Tech",
    className: "col-span-1 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    alt: "Matrix",
    className: "col-span-2 row-span-1"
  }
];

const ChaosGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {images.map((img, idx) => (
        <div 
          key={idx} 
          className={cn(
            "relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform",
            img.className
          )}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      ))}
    </div>
  );
};

export default ChaosGrid;