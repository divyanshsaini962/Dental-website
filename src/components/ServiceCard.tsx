import React from 'react';
import DentalIcon from './DentalIcon';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (serviceTitle: string) => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onSelect(service.title);
  };

  return (
    <div 
      id={`service-${service.id}`}
      className="bg-white border border-border-divider border-l-[4px] border-l-transparent hover:border-l-gold rounded-[12px] p-7 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col justify-between group h-full"
    >
      <div>
        {/* SVG Icon top */}
        <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-section/80 text-gold group-hover:scale-105 transition-transform duration-300">
          <DentalIcon name={service.iconName} size={24} />
        </div>

        {/* Title */}
        <h3 className="font-sans font-semibold text-[18px] text-navy mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-sans font-normal text-[14px] leading-[1.6] text-muted-text/95 mb-6 line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Learn More link */}
      <div>
        <a
          href="#contact"
          onClick={handleLearnMoreClick}
          className="inline-flex items-center gap-1 text-[13px] font-sans font-semibold text-gold hover:text-gold-hover transition-colors duration-200"
        >
          Book Consultation &rarr;
        </a>
      </div>
    </div>
  );
}
