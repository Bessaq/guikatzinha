import React from 'react';

const messages = [
  "TE AMO CACHORRA, É SÉRIO! 💕",
];

const MessageBubble = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  return (
    <div className="pixel-text text-2xl bg-neon-pink/20 p-6 rounded-xl border-4 border-neon-pink animate-float flex items-center justify-center min-h-[100px]">
      {randomMessage}
    </div>
  );
};

export default MessageBubble;