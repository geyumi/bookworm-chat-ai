import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

const AppHeader: React.FC = () => {
  return (
    <header className="text-center py-8 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="relative">
            <BookOpen className="w-10 h-10 text-primary" />
            <Sparkles className="w-4 h-4 text-accent absolute -top-1 -right-1" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-muted bg-clip-text text-transparent">
            BookWorm AI
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Tell me what you feel like reading, and I'll find your next favorite book.
        </p>
        
        {/* Decorative Elements */}
        <div className="mt-6 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-60"></div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;