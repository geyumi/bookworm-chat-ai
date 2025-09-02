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
    <div className="bg-book-card border border-book-card-border rounded-lg p-4 shadow-book-card hover:shadow-lg transition-all duration-300 animate-scale-in">
      {/* Header with Title and Score */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-foreground leading-tight flex-1 mr-3">
          {book.title}
        </h3>
        <div className="flex items-center gap-2">
          <Badge variant="score" className="text-xs font-medium">
            {matchPercentage}% match
          </Badge>
        </div>
      </div>
      
      {/* Author */}
      <p className="text-muted-foreground italic text-sm mb-3">
        by {book.author}
      </p>
      
      {/* Category Badge */}
      <div className="mb-3">
        <Badge variant="category" className="text-xs">
          {book.category}
        </Badge>
      </div>
      
      {/* Description */}
      <div className="text-sm text-card-foreground leading-relaxed mb-3">
        <p>{displayDescription}</p>
        
        {shouldTruncate && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 p-0 h-auto text-primary hover:text-primary-muted"
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
  );
};

export default BookCard;