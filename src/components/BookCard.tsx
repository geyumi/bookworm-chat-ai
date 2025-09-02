import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface BookRecommendation {
  title: string;
  author: string;
  description: string;
  category: string;
  similarity_score: number;
}

interface BookCardProps {
  book: BookRecommendation;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldTruncate = book.description.length > 150;
  const displayDescription = isExpanded || !shouldTruncate 
    ? book.description 
    : book.description.slice(0, 150) + '...';

  const matchPercentage = Math.round(book.similarity_score * 100);

  return (
    <div className="group bg-book-card border border-book-card-border rounded-xl p-5 shadow-book-card hover:shadow-glow/20 hover:bg-book-card-hover transition-all duration-500 animate-scale-in relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      {/* Header with Title and Score */}
      <div className="relative flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-foreground leading-tight flex-1 mr-4 group-hover:text-primary-glow transition-colors duration-300">
          {book.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          <Badge variant="score" className="text-xs font-bold shadow-sm group-hover:shadow-accent-glow/30 transition-all duration-300">
            {matchPercentage}% match
          </Badge>
        </div>
      </div>
      
      {/* Author with Enhanced Styling */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full opacity-60"></div>
        <p className="text-muted-foreground italic text-sm font-medium">
          by {book.author}
        </p>
      </div>
      
      {/* Category Badge with Glow Effect */}
      <div className="mb-4">
        <Badge variant="category" className="text-xs shadow-sm group-hover:shadow-lg transition-all duration-300 border border-book-category/20">
          {book.category}
        </Badge>
      </div>
      
      {/* Enhanced Description */}
      <div className="text-sm text-card-foreground leading-relaxed mb-4 relative">
        <div className="relative z-10">
          <p className="text-foreground/90">{displayDescription}</p>
          
          {shouldTruncate && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 p-0 h-auto text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Read more
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      
      {/* Hover Effect Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default BookCard;