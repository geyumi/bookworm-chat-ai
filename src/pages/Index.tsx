import React from 'react';
import AppHeader from '@/components/AppHeader';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-surface flex flex-col">
      <AppHeader />
      
      <main className="flex-1 container mx-auto px-4 pb-4">
        <div className="bg-card rounded-2xl shadow-chat border border-border h-full max-h-[calc(100vh-200px)]">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default Index;
