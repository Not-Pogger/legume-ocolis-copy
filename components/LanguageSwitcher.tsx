"use client";

import { useI18n } from '@/lib/i18n-context';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <button
          onClick={() => setLocale(locale === 'ro' ? 'en' : 'ro')}
          className="flex items-center justify-center w-16 h-16 bg-white/25 backdrop-blur-md hover:bg-white/35 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
        >
          <span className="text-2xl drop-shadow-sm">
            {locale === 'ro' ? '🇬🇧' : '🇷🇴'}
          </span>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          {locale === 'ro' ? 'Switch to English' : 'Schimbă în Română'}
          <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
        </div>
      </div>
    </div>
  );
}