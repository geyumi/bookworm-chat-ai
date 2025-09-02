import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

const AppHeader: React.FC = () => {
  return (
    <header className="relative text-center py-12 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Main Title with Enhanced Effects */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
            <div className="relative p-3 bg-card/50 rounded-full border border-primary/20 backdrop-blur-sm">
              <BookOpen className="w-12 h-12 text-primary" />
              <Sparkles className="w-5 h-5 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
            BookWorm AI
          </h1>
        </div>
        
        {/* Enhanced Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Tell me what you feel like reading, and I'll find your next favorite book using 
          <span className="text-primary font-semibold"> AI-powered recommendations</span>.
        </p>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow backdrop-blur-sm">
            🤖 AI-Powered
          </div>
          <div className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm text-secondary-glow backdrop-blur-sm">
            📚 Vast Library
          </div>
          <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent-glow backdrop-blur-sm">
            ⚡ Instant Results
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-sm opacity-50"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;