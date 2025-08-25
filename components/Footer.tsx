"use client";

import { useI18n } from '@/lib/i18n-context';
import { Heart, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🍅</div>
        <div className="absolute top-20 right-20 text-5xl">🌶️</div>
        <div className="absolute bottom-10 left-20 text-4xl">🥬</div>
        <div className="absolute bottom-20 right-10 text-5xl">🍆</div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              <div className="absolute inset-0 bg-lime-400/30 rounded-full blur-2xl animate-pulse"></div>
              <Image
                src="/logo.png"
                alt="Familia Pușcaș"
                width={80}
                height={80}
                className="relative rounded-full border-3 border-white/40 shadow-2xl"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent" style={{letterSpacing: '-0.1rem'}}>
                FAMILIA PUȘCAȘ
              </h3>
              <p className="text-xl text-lime-200 font-body font-medium">
                Legume din Ocolis
              </p>
              <p className="text-white/80 font-body max-w-md leading-relaxed">
                Direct de la producător, cultivate cu dragoste în Maramureș pentru masa ta.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-lg font-heading font-semibold text-lime-200 mb-4" style={{letterSpacing: '-0.05rem'}}>
              Contact Rapid
            </h4>
            <div className="space-y-2 text-white/90 font-body">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-4 h-4" />
                0766.597.844
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-4 h-4" />
                0773.844.621
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="w-4 h-4" />
                Strada Râului nr. 15, Ocolis
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-white/80 font-body text-sm md:text-base">
            © {currentYear} Familia Pușcaș. {t.footer.rights}.
          </p>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-white/70 font-body text-sm md:text-base">
            <span>{t.footer.madeWith}</span>
            <Heart className="w-5 h-5 text-red-400 fill-red-400 animate-pulse drop-shadow-lg" />
            <span>{t.footer.by}</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
