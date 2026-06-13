import React from 'react';

interface DentalIconProps {
  name: string;
  className?: string;
  size?: number;
  strokeColor?: string;
}

export default function DentalIcon({ 
  name, 
  className = '', 
  size = 24, 
  strokeColor = '#C89B4E' 
}: DentalIconProps) {
  const commonProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    stroke: strokeColor,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: `inline-block ${className}`
  };

  switch (name.toLowerCase()) {
    case 'implant':
      return (
        <svg {...commonProps}>
          {/* Porcelain Crown top */}
          <path d="M7 6C7 4.5 9 3 12 3C15 3 17 4.5 17 6C17 9 15.5 10 12 10C8.5 10 7 9 7 6Z" />
          {/* Abutment connector */}
          <path d="M10 10H14V13H10V10Z" />
          {/* Threaded Screw Base */}
          <path d="M12 13V21" />
          <path d="M9.5 15H14.5" />
          <path d="M10 17.5H14" />
          <path d="M10.5 20H13.5" />
        </svg>
      );
    
    case 'aligner': // Invisalign
      return (
        <svg {...commonProps}>
          {/* Arch of aligner tray detailing teeth pouches */}
          <path d="M3 17C4.5 12 7.5 7 12 7C16.5 7 19.5 12 21 17" />
          <path d="M4 15.5C5.5 11 8.5 8.5 12 8.5C15.5 8.5 18.5 11 20 15.5" />
          {/* Orthodontic bracket grid separators */}
          <path d="M6 14.5V11" />
          <path d="M9 12.5V8.5" />
          <path d="M12 12V7" />
          <path d="M15 12.5V8.5" />
          <path d="M18 14.5V11" />
        </svg>
      );

    case 'shine': // Veneers
      return (
        <svg {...commonProps}>
          {/* Tooth contour */}
          <path d="M6 5C6.5 9 5.5 15 8 18C10 20.5 11.5 18.5 12 18C12.5 18.5 14 20.5 16 18C18.5 15 17.5 9 18 5C14.5 5.5 13 4 12 4C11 4 9.5 5.5 6 5Z" />
          {/* Shine Star */}
          <path d="M18.5 10.5L19 12L20.5 12.5L19 13L18.5 14.5L18 13L16.5 12.5L18 12Z" />
          <path d="M4.5 8L4.8 9L5.8 9.3L4.8 9.6L4.5 10.6L4.2 9.6L3.2 9.3L4.2 9Z" />
        </svg>
      );

    case 'sparkle': // Whitening
      return (
        <svg {...commonProps}>
          {/* Primary Sparkle */}
          <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5Z" />
          {/* Secondary Sparkle */}
          <path d="M18 14L18.8 16.8L21.6 17.6L18.8 18.4L18 21.2L17.2 18.4L14.4 17.6L17.2 16.8Z" />
        </svg>
      );

    case 'crown': // Crowns & Bridges
      return (
        <svg {...commonProps}>
          {/* Classic 3-pointed crown with bottom support ring */}
          <path d="M4 18V9L8 13L12 7L16 13L20 9V18H4Z" />
          <path d="M4 18C4 19.5 7.5 21 12 21C16.5 21 20 19.5 20 18" />
          <circle cx="12" cy="7" r="1" fill="#C89B4E" />
          <circle cx="4" cy="9" r="1" fill="#C89B4E" />
          <circle cx="20" cy="9" r="1" fill="#C89B4E" />
        </svg>
      );

    case 'crosssection': // Root canal representation
      return (
        <svg {...commonProps}>
          {/* Outer Tooth Shape */}
          <path d="M6 4C6 8.5 5.5 14 7.5 17C9 19.5 11 18.5 12 18C13 18.5 15 19.5 16.5 17C18.5 14 18 8.5 18 4C14.5 4.5 13 3 12 3C11 3 9.5 4.5 6 4Z" />
          {/* Inner Root Canal Pulp Cavity */}
          <path d="M12 7C11.5 8.5 10.5 11 9.5 14.5C9.3 15.5 9.5 16.5 10 16.5" />
          <path d="M12 7C12.5 8.5 13.5 11 14.5 14.5C14.7 15.5 14.5 16.5 14 16.5" fill="none" />
          <path d="M12 4.5V7" />
        </svg>
      );

    case 'waterdrop': // Deep Cleaning
      return (
        <svg {...commonProps}>
          {/* Water Droplet contours with cleaning ripples */}
          <path d="M12 3C12 3 5 10.5 5 15C5 18.86 8.14 22 12 22C15.86 22 19 18.86 19 15C19 10.5 12 3 12 3Z" />
          {/* Inner shine */}
          <path d="M9 15C9 13 10.5 11 11.5 10" />
        </svg>
      );

    case 'repair': // Cavities & Fillings
      return (
        <svg {...commonProps}>
          {/* Tooth structure with an highlighted filled cavity patch */}
          <path d="M6 5C6.5 9 5.5 15 8 18C10 20.5 11.5 18.5 12 18C12.5 18.5 14 20.5 16 18C18.5 15 17.5 9 18 5C14.5 5.5 13 4 12 4C11 4 9.5 5.5 6 5Z" />
          {/* Inlay filling patch at the crown crown center */}
          <path d="M9.5 7.5H14.5V11H9.5V7.5ZD" fill="#C89B4E" fillOpacity="0.2" className="stroke-gold" />
          <path d="M12 6.5V12" />
          <path d="M8.5 9.25H15.5" />
        </svg>
      );

    case 'emergency': // Dental emergency (Tooth + Emergency Cross)
      return (
        <svg {...commonProps}>
          {/* Outline block shield */}
          <rect x="3" y="3" width="18" height="18" rx="4" />
          {/* Thick emergency cross */}
          <path d="M12 7V17M7 12H17" strokeWidth="2.5" />
        </svg>
      );

    case 'moon': // Snoring / Sleep apnea
      return (
        <svg {...commonProps}>
          {/* Crescent Moon for sleep along with tiny stars */}
          <path d="M12 3C10.16 5.34 9.5 8.44 10.15 11.35C10.79 14.25 12.64 16.66 15.11 17.85C13.2 19.2 10.85 19.63 8.6 19.04C6.35 18.45 4.54 16.92 3.6 14.8C2.66 12.68 2.72 10.27 3.76 8.2C4.81 6.13 6.7 4.7 8.95 4.25C9.9 4.05 10.98 3.5 12 3Z" />
          <circle cx="18" cy="6" r="0.75" fill="#C89B4E" />
          <circle cx="21" cy="10" r="0.75" fill="#C89B4E" />
          <circle cx="16" cy="12" r="0.75" fill="#C89B4E" />
        </svg>
      );

    case 'shield': // Silver filling removal protection
      return (
        <svg {...commonProps}>
          {/* Protective dental security shield */}
          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      );

    case 'location':
      return (
        <svg {...commonProps}>
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
          <circle cx="12" cy="9" r="3" />
        </svg>
      );

    case 'phone':
      return (
        <svg {...commonProps}>
          <path d="M22 16.92V19.92C22 20.47 21.53 20.94 20.97 20.92C18.17 20.72 15.54 19.82 13.2 18.3C11.02 16.89 9.17 15.04 7.76 12.86C6.23 10.51 5.34 7.84 5.15 5C5.13 4.43 5.6 4 6.15 4H9.15C9.64 4 10.05 4.34 10.12 4.82C10.25 5.75 10.49 6.66 10.82 7.53C10.95 7.89 10.87 8.3 10.58 8.59L9.31 9.86C10.61 12.14 12.49 14.02 14.77 15.32L16.04 14.05C16.33 13.76 16.74 13.68 17.1 13.81C17.97 14.14 18.88 14.38 19.81 14.51C20.29 14.58 20.63 14.99 20.63 15.48V16.92Z" />
        </svg>
      );

    case 'envelope':
      return (
        <svg {...commonProps}>
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
          <path d="M22 6L12 13L2 6" />
        </svg>
      );

    case 'fax':
      return (
        <svg {...commonProps}>
          <path d="M4 18H20V14H4V18ZM4 10H20V6H4V10ZM6 22H18M12 2H12.01" />
          <rect x="4" y="6" width="16" height="12" rx="1" />
          <line x1="8" y1="10" x2="16" y2="10" />
        </svg>
      );

    case 'clock':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );

    case 'instagram':
      return (
        <svg {...commonProps}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );

    case 'facebook':
      return (
        <svg {...commonProps}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );

    default: // Tooth icon fallback
      return (
        <svg {...commonProps}>
          <path d="M7 5C7.5 9 6.5 15 9 18C11 20.5 12.5 18.5 13 18C13.5 18.5 15 20.5 17 18C19.5 15 18.5 9 19 5C15.5 5.5 14 4 13 4C12 4 10.5 5.5 7 5Z" />
        </svg>
      );
  }
}
