import { ServiceItem, CredentialBadgeItem, TestimonialItem, InsuranceItem, DayHours } from './types';

export const BUSINESS_INFO = {
  practiceName: "Dr. I Dental PC",
  doctor: "Dr. Emmanuil Ilyayev, DDS",
  tagline: "Queens' Most Trusted Dentist",
  address: "86-10 Grand Ave, Suite 1B, Elmhurst, NY 11373",
  phone: "929-209-2736",
  phoneAlt: "718-301-8484", // general inquiries
  fax: "718-928-2332",
  hours: {
    monday: "10:00 AM – 7:00 PM",
    tuesday: "10:00 AM – 6:00 PM",
    wednesday: "10:00 AM – 7:00 PM",
    thursday: "9:30 AM – 6:00 PM",
    friday: "9:00 AM – 3:00 PM",
    saturday: "Closed",
    sunday: "10:00 AM – 5:00 PM"
  },
  socials: {
    instagram: "https://www.instagram.com/dr.idental",
    facebook: "https://www.facebook.com/people/Dr-Emmanuil-Ilyayev-DDS/100063624838647/"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement. No slipping, no adhesives — just a confident smile.",
    iconName: "implant" // we'll map to specific Lucide icons
  },
  {
    id: "invisalign",
    title: "Invisalign® Orthodontics",
    description: "Certified Invisalign provider. Straighten your teeth discreetly with custom clear aligners.",
    iconName: "aligner"
  },
  {
    id: "veneers",
    title: "Porcelain Veneers",
    description: "Transform chipped, stained, or uneven teeth with custom-crafted porcelain shells.",
    iconName: "shine"
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Professional-grade whitening treatments that deliver results far beyond over-the-counter kits.",
    iconName: "sparkle"
  },
  {
    id: "crowns",
    title: "Crowns & Bridges",
    description: "Restore damaged or missing teeth with durable, lifelike crowns and fixed bridges.",
    iconName: "crown"
  },
  {
    id: "rootcanal",
    title: "Root Canal Therapy",
    description: "Gentle, comfortable root canal treatment to save your natural tooth and eliminate pain.",
    iconName: "crosssection"
  },
  {
    id: "deepcleaning",
    title: "Deep Cleaning",
    description: "Scaling and root planing to treat gum disease and restore the health of your gums.",
    iconName: "waterdrop"
  },
  {
    id: "fillings",
    title: "Cavities & Fillings",
    description: "Tooth-colored composite fillings that blend seamlessly with your natural teeth.",
    iconName: "repair"
  },
  {
    id: "emergency",
    title: "Emergency Dentistry",
    description: "Same-day emergency appointments for toothaches, broken teeth, and dental trauma.",
    iconName: "emergency"
  },
  {
    id: "snoring",
    title: "Snoring & Sleep Apnea",
    description: "Certified by the Academy of Clinical Sleep Disorders. Comfortable oral appliance therapy.",
    iconName: "moon"
  },
  {
    id: "silverremoval",
    title: "Safe Silver Filling Removal",
    description: "Careful, protocol-driven removal of amalgam fillings and replacement with tooth-colored alternatives.",
    iconName: "shield"
  }
];

export const CREDENTIALS: CredentialBadgeItem[] = [
  {
    id: "nyu",
    icon: "GraduationCap",
    title: "New York University",
    subtitle: "College of Dentistry — DDS"
  },
  {
    id: "woodhull",
    icon: "Hospital",
    title: "Woodhull Medical Center",
    subtitle: "Dental Residency"
  },
  {
    id: "invisalign-cert",
    icon: "Sparkles",
    title: "Invisalign® Certified",
    subtitle: "Provider"
  },
  {
    id: "sleep-academy",
    icon: "MoonTheme",
    title: "Academy of Clinical Sleep",
    subtitle: "Disorders — Certified"
  },
  {
    id: "top-dentists",
    icon: "Award",
    title: "America's Top Dentists",
    subtitle: "Consumers Research Council"
  },
  {
    id: "ada",
    icon: "HeartHandshake",
    title: "ADA Member",
    subtitle: "American Dental Association"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev1",
    rating: 5,
    source: "Google",
    quote: "He's very nice, courteous, and efficient.",
    author: "Irene C.",
    status: "verified patient"
  },
  {
    id: "rev2",
    rating: 5,
    source: "Google",
    quote: "Best dentist service! It was truly a pleasure visiting their office.",
    author: "Rezi J.",
    status: "verified patient"
  },
  {
    id: "rev3",
    rating: 5,
    source: "Google",
    quote: "I leave satisfied every time I come here. Dr. Emmanuil and his staff are professional.",
    author: "Kathy G.",
    status: "verified patient"
  },
  {
    id: "rev4",
    rating: 5,
    source: "Google",
    quote: "Highly recommended to everyone who is looking for an honest and great dental service.",
    author: "Qoddoss M.",
    status: "verified patient"
  },
  {
    id: "rev5",
    rating: 5,
    source: "Yelp",
    quote: "He's great! He tells you everything you need to know! He fixed my crown and made sure it looked good and natural looking!",
    author: "Japanova N.",
    status: "verified patient"
  },
  {
    id: "rev6",
    rating: 5,
    source: "Yelp",
    quote: "Dr. I is committed to quality care, lasting solutions and compassionate patient relations.",
    author: "Roberto M.",
    status: "verified patient"
  }
];

export const INSURANCE_PARTNERS: InsuranceItem[] = [
  // Row 1
  { name: "1199", row: 1 },
  { name: "32BJ", row: 1 },
  { name: "Aetna", row: 1 },
  { name: "Blue Cross Blue Shield Empire", row: 1 },
  
  // Row 2
  { name: "CareCredit", row: 2 },
  { name: "Carrington", row: 2 },
  { name: "Cigna", row: 2 },
  { name: "CSEA", row: 2 },
  
  // Row 3
  { name: "DC37", row: 3 },
  { name: "Delta Care", row: 3 },
  { name: "Delta Dental", row: 3 },
  { name: "DentaQuest", row: 3 },
  
  // Row 4
  { name: "Emblem Health", row: 4 },
  { name: "Fidelis", row: 4 },
  { name: "GHI", row: 4 },
  { name: "Guardian", row: 4 },
  
  // Row 5
  { name: "Healthplex", row: 5 },
  { name: "Humana", row: 5 },
  { name: "Lincoln", row: 5 },
  { name: "Medicaid", row: 5 },
  
  // Row 6
  { name: "MetLife", row: 6 },
  { name: "No-Fault", row: 6 },
  { name: "Oxford", row: 6 },
  { name: "UFT", row: 6 },
  
  // Row 7 (centered)
  { name: "UMR", row: 7 },
  { name: "United Healthcare", row: 7 }
];

export const HOURS_LIST: DayHours[] = [
  { day: "Monday", hours: "10:00 AM – 7:00 PM" },
  { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "9:30 AM – 6:00 PM" },
  { day: "Friday", hours: "9:00 AM – 3:00 PM" },
  { day: "Saturday", hours: "Closed", isClosed: true },
  { day: "Sunday", hours: "10:00 AM – 5:00 PM", highlight: true }
];
