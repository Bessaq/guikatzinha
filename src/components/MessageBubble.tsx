import React from 'react';

const messages = [
  "BOM DIA GRUPO!!! 🌞",
  "DEUS ABENÇOE SEU DIA 🙏",
  "FELIZ QUINTA-FEIRA DA PROSPERIDADE 💰",
  "CAFÉ QUENTINHO PRA TODOS ☕",
];

const MessageBubble = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  return (
    <div className="pixel-text text-2xl bg-neon-yellow/20 p-6 rounded-xl border-4 border-neon-yellow animate-float">
      {randomMessage}
    </div>
  );
};

export default MessageBubble;