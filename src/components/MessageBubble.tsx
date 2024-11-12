import React from 'react';

const messages = [
  "FELIZ ANIVERSÁRIO GUI! 🎂",
  "PARABÉNS KATZINHA! 🐱",
  "MUITOS ANOS DE VIDA! 🎉",
  "FELICIDADES SEMPRE! ✨",
];

const MessageBubble = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  return (
    <div className="pixel-text text-2xl bg-neon-pink/20 p-6 rounded-xl border-4 border-neon-pink animate-float">
      {randomMessage}
    </div>
  );
};

export default MessageBubble;