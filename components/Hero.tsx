"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { ChevronDown, Phone, ShoppingBasket } from 'lucide-react';

export default function Hero() {
  const { t } = useI18n();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Fresh Vegetables"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-900/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-6xl"
        >
          🍅
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 text-5xl"
        >
          🌶️
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 text-4xl"
        >
          🥬
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-60 right-10 text-5xl"
        >
          🍆
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-b from-white to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(163,230,53,0.8)]" style={{ fontWeight: 800, letterSpacing: '-0.1rem' }}>
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
            <a
              href="#products"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(163,230,53,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <ShoppingBasket className="relative z-10 w-5 h-5" />
              <span className="relative z-10">{t.hero.cta1}</span>
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-lg text-white font-bold rounded-full border-2 border-white/40 transition-all hover:bg-white/25 hover:scale-105 hover:border-white/60 shadow-xl hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              <span>{t.hero.cta2}</span>
            </a>
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