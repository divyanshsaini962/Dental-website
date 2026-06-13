export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  learnMorePath?: string;
  isCTA?: boolean;
}

export interface CredentialBadgeItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface TestimonialItem {
  id: string;
  rating: number;
  source: 'Google' | 'Yelp';
  quote: string;
  author: string;
  status: string;
}

export interface InsuranceItem {
  name: string;
  row: number;
}

export interface DayHours {
  day: string;
  hours: string;
  isClosed?: boolean;
  isToday?: boolean;
  highlight?: boolean;
}
