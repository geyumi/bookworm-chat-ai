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
        className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-message ${
          isUser
            ? 'bg-user-bubble text-user-bubble-foreground animate-slide-in-right'
            : 'bg-bot-bubble text-bot-bubble-foreground animate-slide-in-left'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
        
        {message.recommendations && message.recommendations.length > 0 && (
          <div className="mt-4 space-y-3">
            {message.recommendations.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        )}
        
        <div className="text-xs opacity-60 mt-2">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;