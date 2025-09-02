import React from 'react';
import BookCard from './BookCard';

interface BookRecommendation {
  title: string;
  author: string;
  description: string;
  category: string;
  similarity_score: number;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  recommendations?: BookRecommendation[];
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 shadow-message transition-all duration-300 hover:shadow-lg ${
          isUser
            ? 'bg-user-bubble text-user-bubble-foreground animate-slide-in-right border border-user-bubble-glow/20 shadow-glow/50'
            : 'bg-bot-bubble text-bot-bubble-foreground animate-slide-in-left border border-bot-bubble-border/30 glass-effect'
        }`}
      >
        {/* Message Content */}
        <div className="relative">
          <p className="text-sm leading-relaxed font-medium">{message.content}</p>
          
          {/* Glowing Accent Line for User Messages */}
          {isUser && (
            <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-user-bubble-glow to-transparent opacity-60"></div>
          )}
        </div>
        
        {message.recommendations && message.recommendations.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border/30 pt-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Found {message.recommendations.length} perfect matches</span>
            </div>
            {message.recommendations.map((book, index) => (
              <div 
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BookCard book={book} />
              </div>
            ))}
          </div>
        )}
        
        {/* Enhanced Timestamp */}
        <div className="flex items-center gap-2 text-xs opacity-60 mt-3">
          <div className="w-1 h-1 bg-current rounded-full"></div>
          <span>
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;