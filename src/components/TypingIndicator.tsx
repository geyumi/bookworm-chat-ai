import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start animate-fade-in-up">
      <div className="bg-bot-bubble text-bot-bubble-foreground rounded-2xl px-5 py-4 shadow-message animate-slide-in-left border border-bot-bubble-border/30 glass-effect">
        <div className="flex items-center space-x-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-typing-dots"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full animate-typing-dots" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gradient-to-r from-accent to-tertiary rounded-full animate-typing-dots" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-sm text-muted-foreground font-medium">BookWorm is thinking</span>
          <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;