"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-lime-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Tomato */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-9xl mb-8"
        >
          🍅
        </motion.div>

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-8xl md:text-9xl font-display font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-6"
        >
          404
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4"
        >
          {t.notFound.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-600 mb-8"
        >
          {t.notFound.subtitle}
        </motion.p>

        {/* Floating Vegetables */}
        <div className="relative mb-12">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-20 top-0 text-4xl"
          >
            🌶️
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -right-20 top-0 text-4xl"
          >
            🥬
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 -top-8 text-3xl"
          >
            🍆
          </motion.div>
        </div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-bold rounded-full hover:shadow-xl transition-all hover:scale-105 hover:shadow-emerald-500/25"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{t.notFound.backHome}</span>
            <Home className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-4 h-4 bg-emerald-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-6 h-6 bg-lime-400 rounded-full opacity-20"
        />
      </div>
    </div>
  );
}