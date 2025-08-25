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
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.1rem'}}>
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-emerald-600" />
          </button>

          {/* Testimonial Card */}
          <div className="relative bg-gradient-to-br from-emerald-50 to-lime-50 rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-emerald-200" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed font-body">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-lg text-gray-800" style={{letterSpacing: '-0.1rem'}}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 font-body">Client fidel</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all rounded-full ${
                    index === currentIndex
                      ? 'w-8 bg-emerald-500'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}