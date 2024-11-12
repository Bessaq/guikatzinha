import React from 'react';
import BlinkingText from '@/components/BlinkingText';
import ChaosGrid from '@/components/ChaosGrid';
import MessageBubble from '@/components/MessageBubble';

const Index = () => {
  return (
    <div className="min-h-screen bg-retro-grid bg-black">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <BlinkingText 
            text="✨ FELIZ ANIVERSÁRIO GUI! ✨" 
            className="text-4xl md:text-6xl mb-4"
          />
          <div className="pixel-text text-neon-green text-xl animate-pulse">
            ~* Katzinha, muitas felicidades! *~
          </div>
        </header>

        <div className="max-w-4xl mx-auto mb-12">
          <MessageBubble />
        </div>

        <ChaosGrid />

        <footer className="text-center mt-12">
          <BlinkingText 
            text="COM MUITO CARINHO! ❤️" 
            className="text-2xl text-neon-pink"
          />
          <div className="pixel-text text-neon-blue mt-4">
            Que seu dia seja cheio de alegria e amor! 🎂✨
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;