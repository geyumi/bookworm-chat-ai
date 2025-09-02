import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Book } from 'lucide-react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  recommendations?: BookRecommendation[];
}

interface BookRecommendation {
  title: string;
  author: string;
  description: string;
  category: string;
  similarity_score: number;
}

interface ChatResponse {
  query: string;
  recommendations: BookRecommendation[];
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // TODO: Replace with actual API endpoint
      const apiUrl = 'http://127.0.0.1:8000/recommend';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }

      const data: ChatResponse = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `Here are some book recommendations based on your request:`,
        recommendations: data.recommendations,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "Sorry, I'm having trouble connecting to my book database right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto relative">
      {/* Chat Messages Area */}
      <ScrollArea className="flex-1 relative">
        <div className="p-6 space-y-6 min-h-full">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-30 bg-grid-pattern pointer-events-none"></div>
          
          {messages.length === 0 && (
            <div className="relative text-center py-16 animate-fade-in-up">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
                <Book className="relative w-20 h-20 mx-auto mb-6 text-primary glow-primary" />
              </div>
              <h2 className="text-2xl font-bold gradient-text mb-4">
                Ready to discover your next favorite book?
              </h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                Tell me what you're in the mood to read, and I'll find the perfect recommendations just for you!
              </p>
            </div>
          )}
          
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Enhanced Input Area */}
      <div className="p-6 border-t border-border/50 glass-effect relative">
        <div className="flex gap-4 relative">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="E.g., 'I'm looking for a thrilling sci-fi adventure set in space...'"
              className="pr-12 h-12 bg-input/50 border-border/50 focus:border-primary focus:shadow-input transition-all duration-300 text-base backdrop-blur-sm"
              disabled={isLoading}
            />
            {/* Input Glow Effect */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            variant="literary"
            size="icon"
            className="h-12 w-12 shrink-0"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Status Indicator */}
        <div className="flex items-center justify-center mt-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
            <span>Powered by AI • Instant recommendations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;