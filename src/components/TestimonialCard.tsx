import { Star } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialCardProps {
  review: TestimonialItem;
}

export default function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <div 
      id={`testimonial-${review.id}`}
      className="bg-white border border-border-divider rounded-[12px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] relative flex flex-col justify-between h-full min-w-[280px] sm:min-w-0 snap-start"
    >
      {/* Top Section */}
      <div className="mb-4">
        {/* Rating and Source Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4.5 h-4.5 fill-gold stroke-gold" 
              />
            ))}
          </div>
          <span className={`text-[12px] font-sans font-bold px-2 py-0.5 rounded-full ${
            review.source === 'Google' 
              ? 'bg-blue-50 text-blue-700 border border-blue-100' 
              : 'bg-red-50 text-red-700 border border-red-100'
          }`}>
            {review.source}
          </span>
        </div>

        {/* Quote text */}
        <p className="font-sans font-normal text-[15px] leading-[1.6] text-body-text italic">
          "{review.quote}"
        </p>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border-divider/50 pt-4 mt-auto">
        <h4 className="font-sans font-semibold text-[14px] text-navy">
          {review.author}
        </h4>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-success-green"></span>
          <span className="font-sans text-[12px] text-muted-text font-medium uppercase tracking-wider">
            {review.status}
          </span>
        </div>
      </div>
    </div>
  );
}
