import React from 'react';
import AppHeader from '@/components/AppHeader';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <AppHeader />
        
        <main className="container mx-auto px-4 pb-6">
          <div className="bg-card/60 backdrop-blur-xl rounded-3xl shadow-chat border border-border/50 h-full max-h-[calc(100vh-280px)] relative overflow-hidden">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl"></div>
            <div className="relative z-10 h-full">
              <ChatInterface />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
