import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start animate-fade-in-up">
      <div className="bg-bot-bubble text-bot-bubble-foreground rounded-2xl px-4 py-3 shadow-message animate-slide-in-left">
        <div className="flex items-center space-x-1">
          <span className="text-sm text-muted-foreground">BookWorm is thinking</span>
          <div className="flex space-x-1 ml-2">
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-typing-dots"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-typing-dots" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-typing-dots" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;