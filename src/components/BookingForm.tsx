import React, { useState, useEffect } from 'react';
import { Check, Loader2, ArrowRight } from 'lucide-react';

interface BookingFormProps {
  selectedService: string;
}

export default function BookingForm({ selectedService }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Checkup',
    date: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Sync selected service if updated from parent
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    // Simulate reliable form submission delay
    setTimeout(() => {
      setStatus('success');
      // Reset form variables
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'General Checkup',
        date: '',
        message: ''
      });
    }, 1800);
  };

  return (
    <div className="bg-white border border-border-divider/70 rounded-[12px] p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.08)] max-w-[640px] mx-auto text-left relative overflow-hidden">
      {status === 'success' ? (
        <div className="py-12 px-4 text-center animate-fade-in-up">
          <div className="w-16 h-16 bg-success-green/10 text-success-green flex items-center justify-center rounded-full mx-auto mb-6">
            <Check className="w-8 h-8" strokeWidth={3} />
          </div>
          <h3 className="font-display text-[24px] text-navy font-semibold mb-3">
            ✓ Request Sent Successfully!
          </h3>
          <p className="font-sans text-[15px] text-muted-text/90 max-w-[400px] mx-auto leading-[1.6]">
            Thank you for choosing Dr. I Dental PC. Our Elmhurst team will call or email you shortly to confirm your convenient appointment time.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-8 px-6 py-2 bg-navy hover:bg-navy/90 text-white rounded-[6px] font-sans font-semibold text-[13px] tracking-wider uppercase transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Main heading */}
          <div className="border-b border-border-divider/50 pb-4 mb-2">
            <span className="text-[11px] font-sans font-semibold text-gold tracking-[1.5px] uppercase block mb-1">
              Online Appointment Request
            </span>
            <p className="text-[13px] text-muted-text/80 font-sans">
              Complete this quick form and we’ll contact you to secure your desk spot.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[12px] font-sans font-semibold text-navy/90 mb-1.5 uppercase tracking-wide">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. Emmanuil Ilyayev"
                className="w-full px-4 h-11 border border-border-divider rounded-[6px] text-[14px] font-sans bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-[12px] font-sans font-semibold text-navy/90 mb-1.5 uppercase tracking-wide">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., 929-209-2736"
                className="w-full px-4 h-11 border border-border-divider rounded-[6px] text-[14px] font-sans bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[12px] font-sans font-semibold text-navy/90 mb-1.5 uppercase tracking-wide">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="emmanuil@example.com"
                className="w-full px-4 h-11 border border-border-divider rounded-[6px] text-[14px] font-sans bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-colors"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-[12px] font-sans font-semibold text-navy/90 mb-1.5 uppercase tracking-wide">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 h-11 border border-border-divider rounded-[6px] text-[14px] font-sans bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-colors cursor-pointer"
              >
                <option value="General Checkup">General Checkup</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Porcelain Veneers">Veneers</option>
                <option value="Dental Implants">Implants</option>
                <option value="Invisalign® Orthodontics">Invisalign</option>
                <option value="Root Canal Therapy">Root Canal</option>
                <option value="Emergency Dentistry">Emergency</option>
                <option value="Crowns & Bridges">Crowns</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Snoring & Sleep Apnea">Snoring Treatment</option>
                <option value="Safe Silver Filling Removal">Other</option>
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div>
            <label htmlFor="date" className="block text-[12px] font-sans font-semibold text-navy/90 mb-1.5 uppercase tracking-wide">
              Preferred Appointment Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 h-11 border border-border-divider rounded-[6px] text-[14px] font-sans bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-colors cursor-pointer"
            />
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="message" className="block text-[12px] font-sans font-semibold text-navy/90 mb-1.5 uppercase tracking-wide">
              Message or Dental Concerns
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a bit about what you need or any special requests (e.g. wheelchair accessibility, Sunday request, dental anxiety)..."
              className="w-full p-4 border border-border-divider rounded-[6px] text-[14px] font-sans bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-colors resize-none"
            ></textarea>
          </div>

          {status === 'error' && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-[6px] text-red-600 font-sans text-[13px] text-center animate-shake">
              Please enter all requested fields (Name, Phone, and Email address).
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full h-[50px] bg-gold disabled:bg-gold/70 hover:bg-gold-hover text-white rounded-[6px] font-sans font-semibold text-[14px] tracking-[0.5px] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Request My Appointment
                <ArrowRight className="w-4.5 h-4.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
