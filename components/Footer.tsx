"use client";

import { useI18n } from '@/lib/i18n-context';
import { Heart, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const { t, locale } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🍅</div>
        <div className="absolute top-20 right-20 text-5xl">🌶️</div>
        <div className="absolute bottom-10 left-20 text-4xl">🥬</div>
        <div className="absolute bottom-20 right-10 text-5xl">🍆</div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
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
                {locale === 'ro' ? 'Familia Pușcaș' : 'Pușcaș Family'}
              </h3>
              <p className="text-xl text-lime-200 font-body font-medium">
                {locale === 'ro' ? 'Legume din Ocolis' : 'Vegetables from Ocolis'}
              </p>
              <p className="text-white/80 font-body max-w-md leading-relaxed">
                {locale === 'ro' ? 'Direct de la producător, cultivate cu dragoste în Maramureș pentru masa ta.' : 'Directly from the producer, grown with love in Maramureș for your table.'}
              </p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-4">
            <h4 className="text-lg font-heading font-semibold text-lime-200 mb-4" style={{letterSpacing: '-0.05rem'}}>
              {t.contact.socialMedia}
            </h4>
            <div className="space-y-2 text-white/90 font-body">
              <a 
                href="https://www.facebook.com/puscaslegumeocolis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 hover:text-lime-200 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a 
                href="https://wa.me/40766597844"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 hover:text-lime-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="text-center md:text-right space-y-4">
            <h4 className="text-lg font-heading font-semibold text-lime-200 mb-4" style={{letterSpacing: '-0.05rem'}}>
              Contact Rapid
            </h4>
            <div className="inline-grid grid-cols-[auto_1fr] gap-x-3 text-left text-white/90 font-body">
              <Phone className="w-4 h-4 mt-1" />
              <span>0766.597.844</span>
              
              <Phone className="w-4 h-4 mt-1" />
              <span>0773.844.621</span>
              
              <MapPin className="w-4 h-4 mt-1" />
              <span>Strada Râului nr. 15, Ocolis</span>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-white/80 font-body text-sm md:text-base">
            © {currentYear} {locale === 'ro' ? 'Familia Pușcaș' : 'Pușcaș Family'}. {t.footer.rights}.
          </p>

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
