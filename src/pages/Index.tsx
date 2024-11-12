import React from 'react';
import BlinkingText from '@/components/BlinkingText';
import ChaosGrid from '@/components/ChaosGrid';
import MessageBubble from '@/components/MessageBubble';

const Index = () => {
  return (
    <div className="min-h-screen bg-retro-grid bg-black">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center text-center mb-12">
          <BlinkingText 
            text="✨ FELIZ ANIVERSÁRIO ✨" 
            className="text-4xl md:text-6xl mb-4"
          />
          <BlinkingText 
            text="GUI (KATZINHA)" 
            className="text-3xl md:text-5xl mb-8"
          />
          <div className="pixel-text text-neon-green text-2xl animate-pulse my-12">
            🎉 MUITOS ANOS DE VIDA! 🎉
            <div className="text-xl mt-4">
              🎂 ✨ 🎈 🎊 🎁 ⭐️ 🌟 💫
            </div>
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