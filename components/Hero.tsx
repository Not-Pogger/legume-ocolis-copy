"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { ChevronDown, Phone, ShoppingBasket } from 'lucide-react';
import { GradientButton } from '@/components/ui/GradientButton';

export default function Hero() {
  const { t } = useI18n();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const greenColors = { start: '#10b981', end: '#84cc16', from: '#84cc16', to: '#10b981' };
  const transparentColors = { start: 'rgba(255, 255, 255, 0.2)', end: 'rgba(255, 255, 255, 0.3)', from: '#10b981', to: 'transparent' };

  return (
    <section id="home" className="relative h-screen w-screen max-w-none overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Fresh Vegetables"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-6xl md:text-8xl font-extrabold mb-4 leading-relaxed py-4 bg-gradient-to-b from-white to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(163,230,53,0.8)]" style={{ fontWeight: 800, letterSpacing: '-0.1rem' }}>
              {t.hero.title}
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-2xl md:text-3xl mb-2 text-lime-100 font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] opacity-90">
              {t.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl mb-8 text-lime-50 font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] opacity-85">
              {t.hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <GradientButton
              href="#products"
              colors={greenColors}
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(163,230,53,0.5)]"
            >
              <ShoppingBasket className="relative z-10 w-5 h-5" />
              <span className="relative z-10">{t.hero.cta1}</span>
            </GradientButton>
            
            <GradientButton
              href="#contact"
              colors={transparentColors}
              className="group relative inline-flex items-center gap-2 px-8 py-4 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/40 transition-all hover:scale-105 hover:border-white/60 shadow-xl hover:shadow-2xl backdrop-blur-custom"
            >
              <Phone className="w-5 h-5" />
              <span>{t.hero.cta2}</span>
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </motion.div>
    </section>
  );
}
