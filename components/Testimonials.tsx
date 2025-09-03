"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = t.testimonials.reviews;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50/30 via-white to-lime-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.1rem'}}>
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Content Area */}
            <div className="relative min-h-[420px] md:min-h-[380px] flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-10 px-4 md:px-20 py-8 text-center"
                >
                  {/* Large Quote Icon */}
                  <div className="flex justify-center mb-8">
                    <Quote className="w-16 h-16 md:w-20 md:h-20 text-emerald-200 fill-emerald-200/30" />
                  </div>
                  
                  {/* Large Testimonial Text */}
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-body leading-relaxed mb-10 font-light">
                    {testimonials[currentIndex].text}
                  </p>

                  {/* Author */}
                  <div className="mb-6">
                    <h4 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2">
                      {testimonials[currentIndex].name}
                    </h4>
                    <div className="flex justify-center gap-1">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows - No Background */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-emerald-600 transition-all hover:scale-125 z-20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-emerald-600 transition-all hover:scale-125 z-20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
              </button>
            </div>

            {/* Minimalist Progress Indicators */}
            <div className="mt-12 max-w-xs mx-auto">
              <div className="flex justify-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="relative h-1.5 rounded-full overflow-hidden bg-gray-200 transition-all duration-300"
                    style={{ width: index === currentIndex ? '48px' : '24px' }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-lime-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: index === currentIndex ? 1 : 0 }}
                      transition={{ duration: index === currentIndex ? 6 : 0.3, ease: "linear" }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}