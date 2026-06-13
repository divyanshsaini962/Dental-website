import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Hospital, 
  Sparkles, 
  Award, 
  HeartHandshake, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Check, 
  ArrowRight,
  Shield,
  Moon,
  ChevronRight,
  ExternalLink,
  Map
} from 'lucide-react';

// Data & Helpers
import { 
  BUSINESS_INFO, 
  SERVICES, 
  CREDENTIALS, 
  TESTIMONIALS, 
  INSURANCE_PARTNERS, 
  HOURS_LIST 
} from './data';
import AnimatedCounter from './components/AnimatedCounter';
import ScrollReveal from './components/ScrollReveal';
import DentalIcon from './components/DentalIcon';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import BookingForm from './components/BookingForm';

// Images
import heroImg from './assets/images/luxury_dental_clinic_hero.png';
import whiteningImg from './assets/images/service_whitening.png';
import invisalignImg from './assets/images/service_invisalign.png';
import veneersImg from './assets/images/service_veneers.png';
import aboutImg from './assets/images/section_about.png';
import testimonialsImg from './assets/images/section_testimonials.png';
import insuranceImg from './assets/images/section_insurance.png';
import contactImg from './assets/images/section_contact.png';

export default function App() {
  const [selectedService, setSelectedService] = useState('General Checkup');
  const [currentDayIndex, setCurrentDayIndex] = useState<number | null>(null);

  useEffect(() => {
    // Determine current day of the week to highlight hours row
    // getDay() gives 0 (Sunday) to 6 (Saturday)
    const day = new Date().getDay();
    
    // HOURS_LIST starts at Monday (index 0) to Sunday (index 6)
    let listIndex = 0;
    if (day === 0) {
      listIndex = 6; // Sunday is index 6
    } else {
      listIndex = day - 1; // Monday is index 0, Tuesday index 1, etc.
    }
    setCurrentDayIndex(listIndex);
  }, []);

  const handleBookWithService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFloatingCall = () => {
    window.location.href = `tel:${BUSINESS_INFO.phone.replace(/-/g, '')}`;
  };

  return (
    <div className="min-h-screen bg-white text-body-text antialiased selection:bg-gold/20 selection:text-navy">
      {/* Scroll anchor */}
      <div id="top" className="absolute top-0" />

      {/* 1. STICKY NAVBAR */}
      <Navbar onBookClick={() => handleBookWithService('General Checkup')} />

      {/* Main Container Layout */}
      <main className="pt-[75px]">
        
        {/* 2. HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-24 md:py-32 tooth-pattern border-b border-border-divider/60">
          {/* Background Image with Elegant Dark Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#070A13]">
            <img 
              src={heroImg} 
              alt="Luxury Dental Clinic" 
              className="w-full h-full object-cover opacity-60" 
              referrerPolicy="no-referrer"
            />
            {/* Modern vignette overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070A13] via-[#070A13]/80 to-[#070A13]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-transparent opacity-80" />
          </div>

          <div className="max-w-[1100px] mx-auto px-4 z-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column — Text & Title Card */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <ScrollReveal delayMs={100}>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 text-gold text-[12.5px] font-sans font-semibold uppercase tracking-[1.5px] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                    Elmhurst, Queens · Est. 2018
                  </span>
                </ScrollReveal>

                <ScrollReveal delayMs={200}>
                  <h1 className="font-display font-medium text-[42px] sm:text-[56px] leading-[1.08] text-navy tracking-tight">
                    Exceptional dental care, <br className="hidden sm:inline" />
                    <span className="text-navy">close to home.</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delayMs={300}>
                  <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[1.7] text-muted-text/95 max-w-[500px]">
                    Dr. Emmanuil Ilyayev and his team bring NYU-trained expertise, 
                    genuine warmth, and advanced techniques to every patient in 
                    Queens — from your first cleaning to full smile transformations.
                  </p>
                </ScrollReveal>

                <ScrollReveal delayMs={400} className="pt-2">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => handleBookWithService('General Checkup')}
                      className="h-12 px-7 bg-gold hover:bg-gold-hover text-white text-[14px] font-sans font-semibold tracking-[0.5px] rounded-[6px] shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/40"
                    >
                      Book an appointment
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/-/g, '')}`}
                      className="h-12 px-7 border border-navy/30 hover:border-navy text-navy hover:bg-navy/5 text-[14px] font-sans font-semibold tracking-[0.5px] rounded-[6px] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Call {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </ScrollReveal>
              </div>



            </div>
          </div>
        </section>

        {/* 2.5 STAT BAR */}
        <section className="bg-navy py-12 text-white relative">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <div className="pt-4 md:pt-0">
                <p className="text-[36px] sm:text-[42px] font-display font-medium text-gold leading-none mb-2">
                  <AnimatedCounter target={7} />+
                </p>
                <p className="text-white/80 text-[13px] font-sans font-medium uppercase tracking-[1px]">
                  Years Serving Queens
                </p>
              </div>

              <div className="pt-4 md:pt-0">
                <p className="text-[36px] sm:text-[42px] font-display font-medium text-gold leading-none mb-2">
                  <AnimatedCounter target={243} />
                </p>
                <p className="text-white/80 text-[13px] font-sans font-medium uppercase tracking-[1px]">
                  Five-Star Reviews
                </p>
              </div>

              <div className="pt-4 md:pt-0">
                <p className="text-[36px] sm:text-[42px] font-display font-medium text-gold leading-none mb-2">
                  <AnimatedCounter target={11} />
                </p>
                <p className="text-white/80 text-[13px] font-sans font-medium uppercase tracking-[1px]">
                  Dental Services
                </p>
              </div>

              <div className="pt-4 md:pt-0">
                <p className="text-[36px] sm:text-[42px] font-display font-medium text-gold leading-none mb-2">
                  Open
                </p>
                <p className="text-white/80 text-[13px] font-sans font-medium uppercase tracking-[1px]">
                  Sundays 10AM–5PM
                </p>
              </div>

            </div>
          </div>
        </section>
        {/* 2.75 VISUAL FEATURED SERVICES */}
        <section className="py-24 bg-section scroll-mt-16 border-b border-border-divider/50">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center max-w-[700px] mx-auto mb-16">
              <ScrollReveal>
                <span className="text-[12px] font-sans font-semibold text-gold tracking-[1.5px] uppercase block mb-2">
                  Premium Care
                </span>
                <h2 className="font-display font-medium text-[34px] sm:text-[38px] text-navy leading-[1.2] mb-4">
                  Transforming smiles every day.
                </h2>
                <p className="font-sans text-[15px] sm:text-[16px] leading-[1.7] text-muted-text/90">
                  See the difference exceptional dentistry can make. We specialize in aesthetic and restorative treatments designed to give you a confident, radiant smile.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Service 1: Whitening */}
              <ScrollReveal delayMs={100}>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md group cursor-pointer" onClick={() => handleBookWithService('Teeth Whitening')}>
                  <img src={whiteningImg} alt="Teeth Whitening" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="font-display font-medium text-[24px] text-white mb-2">Teeth Whitening</h3>
                    <p className="font-sans text-white/80 text-[14px] mb-4">Professional grade brightening for a radiant smile.</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-gold group-hover:text-white transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Service 2: Invisalign */}
              <ScrollReveal delayMs={200}>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md group cursor-pointer" onClick={() => handleBookWithService('Invisalign® Orthodontics')}>
                  <img src={invisalignImg} alt="Invisalign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="font-display font-medium text-[24px] text-white mb-2">Invisalign®</h3>
                    <p className="font-sans text-white/80 text-[14px] mb-4">Clear, comfortable aligners for straight teeth.</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-gold group-hover:text-white transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Service 3: Veneers */}
              <ScrollReveal delayMs={300}>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md group cursor-pointer" onClick={() => handleBookWithService('Porcelain Veneers')}>
                  <img src={veneersImg} alt="Porcelain Veneers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="font-display font-medium text-[24px] text-white mb-2">Porcelain Veneers</h3>
                    <p className="font-sans text-white/80 text-[14px] mb-4">Flawless, custom-crafted aesthetic transformations.</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-gold group-hover:text-white transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>


        {/* 3. SERVICES SECTION */}
        <section id="services" className="py-24 bg-white border-b border-border-divider/50 scroll-mt-16">
          <div className="max-w-[1100px] mx-auto px-4">
            
            {/* Header Block */}
            <div className="max-w-[700px] text-left mb-16">
              <ScrollReveal>
                <span className="text-[12px] font-sans font-semibold text-gold tracking-[1.5px] uppercase block mb-2">
                  What we offer
                </span>
                <h2 className="font-display font-medium text-[34px] sm:text-[38px] text-navy leading-[1.2] mb-4">
                  Everything your smile needs, under one roof.
                </h2>
                <p className="font-sans text-[15px] sm:text-[16px] leading-[1.7] text-muted-text/90">
                  From routine cleanings to full cosmetic makeovers, Dr. Ilyayev and his team handle it all — so you never need a referral.
                </p>
              </ScrollReveal>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((srv, index) => (
                <ScrollReveal key={srv.id} delayMs={(index % 3) * 100}>
                  <ServiceCard 
                    service={srv} 
                    onSelect={handleBookWithService} 
                  />
                </ScrollReveal>
              ))}

              {/* 12th Card — Custom Gold CTA */}
              <ScrollReveal delayMs={200}>
                <div className="bg-gold text-white rounded-[12px] p-8 flex flex-col justify-between h-full shadow-md relative overflow-hidden group">
                  {/* Subtle background glow circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div>
                    <h3 className="font-sans font-semibold text-[20px] mb-3 leading-tight">
                      Not sure what you need?
                    </h3>
                    <p className="font-sans text-[14px] leading-[1.6] text-white/95 mb-8">
                      Call us or book a baseline consultation — we'll thoroughly assess your smile and recommend the right treatment plan.
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleBookWithService('General Checkup')}
                      className="w-full py-3.5 px-6 bg-white text-gold hover:text-gold-hover font-sans font-semibold text-[14px] rounded-[6px] transition-all duration-200 text-center shadow-sm cursor-pointer"
                    >
                      Book a free consultation
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>


        {/* 4. ABOUT / DOCTOR SECTION */}
        <section id="about" className="py-24 bg-section/40 border-b border-border-divider/50 scroll-mt-16">
          <div className="max-w-[1100px] mx-auto px-4">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column - Narrated Bio */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <ScrollReveal>
                  <span className="text-[12px] font-sans font-semibold text-gold tracking-[1.5px] uppercase block mb-2">
                    Meet your dentist
                  </span>
                  <h2 className="font-display font-medium text-[34px] sm:text-[38px] text-navy leading-[1.2] mb-6">
                    A third-generation dentist with a passion for exceptional care.
                  </h2>
                </ScrollReveal>

                <ScrollReveal delayMs={50}>
                  <img src={aboutImg} alt="Dr. Ilyayev" className="w-full h-[300px] object-cover rounded-xl shadow-md mb-6" />
                </ScrollReveal>

                <div className="space-y-5 font-sans font-normal text-[15px] sm:text-[16px] leading-[1.7] text-body-text">
                  <ScrollReveal delayMs={50}>
                    <p>
                      Dr. Emmanuil Ilyayev DDS founded Dr. I Dental PC in 2018 with one goal: to bring the kind of honest, skilled, and warm dental care that his grandfather and uncle gave their patients — brought up to date with the latest techniques and technology.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delayMs={100}>
                    <p>
                      Dr. Ilyayev earned his Doctor of Dental Surgery degree from New York University College of Dentistry — one of the country's most respected dental programs — and completed his residency at Woodhull Medical Center. He has been named one of America's Top Dentists by the Consumers Research Council of America and received the 2022 Who's Who Award.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delayMs={150}>
                    <p>
                      Outside the office, Dr. Ilyayev is committed to giving back to the Elmhurst community through volunteer and community service activities. He and his team are active professional members of the American Dental Association, the New York State Dental Association, and the New York State Trooper Surgeons.
                    </p>
                  </ScrollReveal>
                </div>
              </div>

              {/* Right Column - Credential Card Stack */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 pt-4">
                <ScrollReveal delayMs={200}>
                  <p className="text-[11px] font-sans font-bold text-navy uppercase tracking-[2px] mb-2 px-1 text-left">
                    Clinical Credentials
                  </p>
                </ScrollReveal>
                
                {CREDENTIALS.map((cred, i) => {
                  // Resolve icons statically
                  let iconElement = <GraduationCap className="w-5 h-5 text-gold" />;
                  if (cred.icon === 'Hospital') iconElement = <Hospital className="w-5 h-5 text-gold" />;
                  if (cred.icon === 'Sparkles') iconElement = <Sparkles className="w-5 h-5 text-gold" />;
                  if (cred.icon === 'MoonTheme') iconElement = <Moon className="w-5 h-5 text-gold" />;
                  if (cred.icon === 'Award') iconElement = <Award className="w-5 h-5 text-gold" />;
                  if (cred.icon === 'HeartHandshake') iconElement = <HeartHandshake className="w-5 h-5 text-gold" />;

                  return (
                    <ScrollReveal key={cred.id} delayMs={i * 80}>
                      <div className="bg-white border border-navy/15 rounded-[8px] p-[14px_18px] flex items-center gap-4 hover:border-gold transition-colors duration-200">
                        <div className="flex-shrink-0 p-2.5 bg-navy/5 rounded-full">
                          {iconElement}
                        </div>
                        <div className="text-left">
                          <h4 className="font-sans font-semibold text-[14px] text-navy">
                            {cred.title}
                          </h4>
                          <p className="font-sans text-[12px] text-muted-text">
                            {cred.subtitle}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

            </div>

            {/* Warm Quote Block (Below) */}
            <div className="mt-16 sm:mt-24">
              <ScrollReveal>
                <div className="bg-navy text-white rounded-[12px] p-8 sm:p-14 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-20 h-20 text-white/5 font-serif text-[120px] leading-none pointer-events-none -translate-x-4 -translate-y-4">“</div>
                  <blockquote className="max-w-[680px] mx-auto text-center space-y-4">
                    <p className="font-display font-light italic text-[20px] sm:text-[22px] leading-[1.6]">
                      "I grew up watching my grandfather and uncle change people's lives through dentistry. That's the practice I've tried to build — one where patients leave feeling genuinely cared for."
                    </p>
                    <cite className="block font-sans not-italic text-[13px] text-gold font-semibold uppercase tracking-[1.5px] mt-6">
                      — Dr. Emmanuil Ilyayev, DDS
                    </cite>
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>


        {/* 5. TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-24 bg-section scroll-mt-16 border-b border-border-divider/50">
          <div className="max-w-[1100px] mx-auto px-4">
            
            {/* Header Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="text-left">
                <ScrollReveal>
                  <span className="text-[12px] font-sans font-semibold text-gold tracking-[1.5px] uppercase block mb-2">
                    What patients say
                  </span>
                  <h2 className="font-display font-medium text-[34px] sm:text-[38px] text-navy leading-[1.2]">
                    Real patients. Real results.
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal delayMs={100}>
                <img src={testimonialsImg} alt="Happy Patient" className="w-full h-[200px] object-cover rounded-xl shadow-md" />
              </ScrollReveal>
            </div>

            {/* Cards Grid / Slider on Mobile */}
            <div className="relative">
              <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 md:pb-0">
                {TESTIMONIALS.map((review, i) => (
                  <ScrollReveal key={review.id} delayMs={(i % 3) * 100} className="w-full flex-shrink-0 md:flex-shrink-1 snap-start">
                    <TestimonialCard review={review} />
                  </ScrollReveal>
                ))}
              </div>
              
              {/* Slider hints for mobile */}
              <div className="flex justify-center gap-1.5 mt-2 md:hidden">
                {TESTIMONIALS.map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-navy/25"></span>
                ))}
              </div>
            </div>

            {/* Aggregate Trust Bar */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-navy/10">
              <ScrollReveal>
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-between py-4 px-6 bg-white border border-border-divider rounded-xl shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-bold">★</span>
                    <span className="font-sans font-semibold text-[14px] text-navy">
                      4.89 Average Rating
                    </span>
                  </div>
                  <div className="h-px w-8 bg-border-divider hidden sm:block"></div>
                  <div className="font-sans text-[14px] text-muted-text">
                    243 verified dental patient reviews
                  </div>
                  <div className="h-px w-8 bg-border-divider hidden sm:block"></div>
                  <div className="flex items-center gap-2 text-success-green font-semibold font-sans text-[13px] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-success-green"></span>
                    Google · Yelp Verified
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>


        {/* 6. INSURANCE SECTION */}
        <section id="insurance" className="py-24 bg-white scroll-mt-16 border-b border-border-divider/50">
          <div className="max-w-[1100px] mx-auto px-4">
            
            {/* Header Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-left">
                <ScrollReveal>
                  <span className="text-[12px] font-sans font-semibold text-gold tracking-[1.5px] uppercase block mb-2">
                    We accept your insurance
                  </span>
                  <h2 className="font-display font-medium text-[34px] sm:text-[38px] text-navy leading-[1.2] mb-4">
                    Most major PPO plans accepted.
                  </h2>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.7] text-muted-text/90">
                    Don't see your provider? Call us — we work with most major insurers in New York and offer flexible payment plans via CareCredit.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal delayMs={100}>
                <img src={insuranceImg} alt="Clinic Reception" className="w-full h-[250px] object-cover rounded-xl shadow-md" />
              </ScrollReveal>
            </div>

            {/* Insurer Grid Display */}
            <div className="space-y-3.5">
              {/* Row 1 */}
              <ScrollReveal delayMs={50}>
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {INSURANCE_PARTNERS.filter(ip => ip.row === 1).map(p => (
                    <span key={p.name} className="bg-section hover:bg-navy/5 border border-border-divider rounded-md px-[18px] py-2.5 text-[13px] font-sans font-medium text-navy/90 transition-colors shadow-2xs">
                      {p.name}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Row 2 */}
              <ScrollReveal delayMs={100}>
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {INSURANCE_PARTNERS.filter(ip => ip.row === 2).map(p => (
                    <span key={p.name} className="bg-section hover:bg-navy/5 border border-border-divider rounded-md px-[18px] py-2.5 text-[13px] font-sans font-medium text-navy/90 transition-colors shadow-2xs">
                      {p.name}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Row 3 */}
              <ScrollReveal delayMs={150}>
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {INSURANCE_PARTNERS.filter(ip => ip.row === 3).map(p => (
                    <span key={p.name} className="bg-section hover:bg-navy/5 border border-border-divider rounded-md px-[18px] py-2.5 text-[13px] font-sans font-medium text-navy/90 transition-colors shadow-2xs">
                      {p.name}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Row 4 */}
              <ScrollReveal delayMs={200}>
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {INSURANCE_PARTNERS.filter(ip => ip.row === 4).map(p => (
                    <span key={p.name} className="bg-section hover:bg-navy/5 border border-border-divider rounded-md px-[18px] py-2.5 text-[13px] font-sans font-medium text-navy/90 transition-colors shadow-2xs">
                      {p.name}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Row 5 */}
              <ScrollReveal delayMs={250}>
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {INSURANCE_PARTNERS.filter(ip => ip.row === 5).map(p => (
                    <span key={p.name} className="bg-section hover:bg-navy/5 border border-border-divider rounded-md px-[18px] py-2.5 text-[13px] font-sans font-medium text-navy/90 transition-colors shadow-2xs">
                      {p.name}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Row 6 */}
              <ScrollReveal delayMs={300}>
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {INSURANCE_PARTNERS.filter(ip => ip.row === 6).map(p => (
                    <span key={p.name} className="bg-section hover:bg-navy/5 border border-border-divider rounded-md px-[18px] py-2.5 text-[13px] font-sans font-medium text-navy/90 transition-colors shadow-2xs">
                      {p.name}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Row 7 (UMR & United) */}
              <ScrollReveal delayMs={350}>
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {INSURANCE_PARTNERS.filter(ip => ip.row === 7).map(p => (
                    <span key={p.name} className="bg-section hover:bg-navy/5 border border-border-divider rounded-md px-[18px] py-2.5 text-[13px] font-sans font-medium text-navy/90 transition-colors shadow-2xs">
                      {p.name}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* CareCredit CTA Block */}
            <div className="mt-14 border border-gold/30 rounded-[12px] bg-gold/5 p-8 max-w-[850px]">
              <ScrollReveal>
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold text-[12px] font-sans font-semibold rounded-md mb-3">
                      💳 CareCredit Available
                    </span>
                    <p className="font-sans text-[15px] text-navy font-normal">
                      Apply for flexible payment plans — split your treatment cost over time with special financing & no interest options.
                    </p>
                  </div>
                  <a
                    href="https://www.carecredit.com/go/938MTR/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-shrink-0 inline-flex items-center gap-2 h-11 px-6 bg-gold hover:bg-gold-hover text-white text-[13px] font-sans font-semibold rounded-[6px] transition-colors"
                  >
                    Apply for CareCredit
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>


        {/* 7. OFFICE HOURS & LOCATION SECTION */}
        <section className="py-24 bg-section/30 border-b border-border-divider/50">
          <div className="max-w-[1100px] mx-auto px-4 animate-fade-in-up">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              
              {/* Left Column — Hours dynamic table */}
              <div className="lg:col-span-5 space-y-6">
                <ScrollReveal>
                  <h3 className="font-sans font-semibold text-[22px] text-navy pb-3 border-b border-border-divider">
                    Office hours
                  </h3>
                </ScrollReveal>

                <div className="bg-white rounded-xl border border-border-divider overflow-hidden shadow-xs">
                  <table className="w-full text-left border-collapse font-sans">
                    <tbody>
                      {HOURS_LIST.map((entry, index) => {
                        const isToday = index === currentDayIndex;
                        return (
                          <tr 
                            key={entry.day}
                            className={`border-b last:border-b-0 border-border-divider/50 transition-colors ${
                              isToday 
                                ? 'bg-gold/5 font-semibold text-navy border-l-[4px] border-l-gold' 
                                : 'text-body-text border-l-[4px] border-l-transparent'
                            }`}
                          >
                            <td className="py-3.5 px-4 text-[14px]">
                              {entry.day}
                              {isToday && (
                                <span className="ml-2 font-sans text-[10px] uppercase font-bold text-gold px-2 py-0.5 bg-gold/10 rounded-full">
                                  Today
                                </span>
                              )}
                            </td>
                            <td className="py-3.5 px-4 text-[14px] text-right flex items-center justify-end gap-2">
                              {entry.isClosed ? (
                                <span className="text-muted-text line-through">{entry.hours}</span>
                              ) : (
                                <span>{entry.hours}</span>
                              )}
                              
                              {entry.highlight && (
                                <span className="text-[10px] font-sans font-semibold bg-success-green/10 text-success-green px-2 py-0.5 rounded-full uppercase">
                                  Open Sunday
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column — Contact Details Card */}
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal>
                  <h3 className="font-sans font-semibold text-[22px] text-navy pb-3 border-b border-border-divider">
                    Find us in Elmhurst
                  </h3>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-border-divider rounded-xl p-6 shadow-2xs">
                  
                  {/* Text Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-[18px] h-[18px] text-gold mt-1 shrink-0" />
                      <div className="font-sans">
                        <p className="text-[15px] font-semibold text-navy leading-tight">
                          Practice Location
                        </p>
                        <p className="text-[14px] text-muted-text mt-0.5">
                          86-10 Grand Ave, Suite 1B <br />
                          Elmhurst, NY 11373
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-[18px] h-[18px] text-gold mt-1 shrink-0" />
                      <div className="font-sans space-y-0.5">
                        <p className="text-[14px] font-bold text-navy">
                          {BUSINESS_INFO.phone} <span className="text-muted-text font-normal text-[12px]">(Appts)</span>
                        </p>
                        <p className="text-[14px] font-semibold text-navy/80">
                          {BUSINESS_INFO.phoneAlt} <span className="text-muted-text font-normal text-[12px]">(Info)</span>
                        </p>
                        <p className="text-[13px] text-muted-text/90">
                          Fax: {BUSINESS_INFO.fax}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-border-divider/70 pt-3 flex flex-col gap-2 font-sans text-[13px] text-muted-text">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                        🅿️ Street parking available
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                        🚇 Conveniently accessible by subway
                      </div>
                    </div>
                  </div>

                  {/* Responsive Iframe Map */}
                  <div className="overflow-hidden rounded-lg border border-border-divider w-full h-[200px] md:h-full min-h-[200px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5!2d-73.8820633!3d40.7357936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2bd0b20aeea18d2c!2sDr.%20I%20Dental%20PC!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Dr. I Dental PC Map Location"
                    ></iframe>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 8. CONTACT / BOOKING SECTION */}
        <section id="contact" className="py-24 bg-navy text-white scroll-mt-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src={contactImg} alt="Clinic Interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          </div>
          <div className="max-w-[1100px] mx-auto px-4 relative z-10 text-center">
            
            <div className="max-w-[640px] mx-auto mb-12 space-y-4">
              <ScrollReveal>
                <h2 className="font-display font-medium text-[34px] sm:text-[42px] leading-tight text-white mb-3">
                  Ready for a healthier smile?
                </h2>
                <p className="font-sans text-[16px] text-white/70 max-w-[500px] mx-auto leading-[1.6]">
                  Book your appointment online or call us directly. New patients welcome. We'll find a customized treatment time that works for you.
                </p>
              </ScrollReveal>
            </div>

            {/* Injected booking form */}
            <ScrollReveal delayMs={100}>
              <BookingForm selectedService={selectedService} />
            </ScrollReveal>

            {/* Callback Callout */}
            <ScrollReveal delayMs={200}>
              <div className="mt-10 font-sans">
                <p className="text-[15px] text-white">
                  Or call us directly at:{' '}
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/-/g, '')}`}
                    className="text-gold font-bold hover:underline ml-1"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
                <p className="text-[13px] text-white/50 mt-1 uppercase tracking-wider">
                  Available Monday–Friday and Sundays
                </p>
              </div>
            </ScrollReveal>

          </div>
        </section>

      </main>

      {/* 9. FOOTER */}
      <footer className="bg-dark-navy text-white/75 font-sans border-t border-white/5 pt-16">
        <div className="max-w-[1100px] mx-auto px-4 pb-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-left">
            
            {/* Column 1 — Brand with social handles */}
            <div className="space-y-4">
              <div>
                <p className="font-display font-semibold text-[20px] text-white tracking-tight">
                  Dr. I Dental PC
                </p>
                <p className="text-gold text-[13px] font-medium tracking-wide mt-0.5">
                  Queens' Most Trusted Dentist
                </p>
              </div>
              <p className="text-[13px] text-white/60 leading-relaxed max-w-[220px]">
                Providing precision dentistry with a third-generation commitment to patient care in Elmhurst.
              </p>
              {/* Instagram & Facebook */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href={BUSINESS_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white/90 hover:bg-gold hover:text-white transition-all focus:outline-none"
                  aria-label="Instagram Link"
                >
                  <DentalIcon name="instagram" size={18} strokeColor="currentColor" />
                </a>
                <a 
                  href={BUSINESS_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white/90 hover:bg-gold hover:text-white transition-all focus:outline-none"
                  aria-label="Facebook Link"
                >
                  <DentalIcon name="facebook" size={18} strokeColor="currentColor" />
                </a>
              </div>
            </div>

            {/* Column 2 — Dental Care Core Services */}
            <div className="space-y-4">
              <p className="text-white font-semibold text-[14px] uppercase tracking-wider">
                Services
              </p>
              <ul className="space-y-2.5 text-[14px] text-white/75">
                <li>
                  <a href="#services" onClick={() => handleBookWithService('Dental Implants')} className="hover:text-gold transition-colors block">
                    Dental Implants
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => handleBookWithService('Invisalign® Orthodontics')} className="hover:text-gold transition-colors block">
                    Invisalign® Orthodontics
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => handleBookWithService('Porcelain Veneers')} className="hover:text-gold transition-colors block">
                    Porcelain Veneers
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => handleBookWithService('Teeth Whitening')} className="hover:text-gold transition-colors block">
                    Teeth Whitening
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => handleBookWithService('Root Canal Therapy')} className="hover:text-gold transition-colors block">
                    Root Canal Therapy
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => handleBookWithService('Emergency Dentistry')} className="hover:text-gold transition-colors block font-semibold text-gold/90">
                    Emergency Dentist
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 — Physical address & Visit information */}
            <div className="space-y-4 font-sans">
              <p className="text-white font-semibold text-[14px] uppercase tracking-wider">
                Visit Us
              </p>
              <div className="space-y-3.5 text-[14px]">
                <p className="leading-relaxed text-white/80">
                  86-10 Grand Ave, Suite 1B <br />
                  Elmhurst, NY 11373
                </p>
                <p>
                  T: <a href={`tel:${BUSINESS_INFO.phone.replace(/-/g, '')}`} className="text-white hover:text-gold font-semibold">{BUSINESS_INFO.phone}</a>
                </p>
                <div className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-white/5 rounded text-[12px] font-semibold text-gold/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse"></span>
                  Open Sundays 10AM–5PM
                </div>
              </div>
            </div>

            {/* Column 4 — Quick clinic resources */}
            <div className="space-y-4">
              <p className="text-white font-semibold text-[14px] uppercase tracking-wider">
                Information
              </p>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <a href="#about" className="hover:text-gold transition-colors">
                    About Dr. Ilyayev
                  </a>
                </li>
                <li>
                  <a href="#insurance" className="hover:text-gold transition-colors">
                    Insurance Accepted
                  </a>
                </li>
                <li>
                  <a href="https://www.carecredit.com/go/938MTR/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                    CareCredit Financing <ExternalLink className="w-3 H-3" />
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gold transition-colors">
                    Patient Forms
                  </a>
                </li>
                <li>
                  <span className="text-white/40 cursor-not-allowed">
                    Office Blog (Coming Soon)
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-white/50">
            <p>
              © 2026 Dr. I Dental PC · All rights reserved · Privacy Policy · Accessibility
            </p>
            <p className="font-mono text-[11px] text-white/30">
              Dr. Emmanuil Ilyayev, DDS
            </p>
          </div>

        </div>
      </footer>

      {/* FIXED MOBILE FOOTER CALL BAR */}
      <button 
        onClick={handleFloatingCall}
        className="fixed bottom-4 right-4 z-40 bg-navy hover:bg-gold text-white font-semibold font-sans py-3 px-5 rounded-full shadow-lg flex items-center gap-2 text-[13px] md:hidden tracking-wider uppercase transition-colors"
      >
        <Phone className="w-4 h-4 text-gold fill-currentColor" />
        Call Office
      </button>

    </div>
  );
}
