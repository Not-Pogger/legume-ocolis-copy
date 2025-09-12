"use client";

import { useI18n } from '@/lib/i18n-context';
import { Globe } from 'lucide-react';

import { GradientButton } from '@/components/ui/GradientButton';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const greenColors = { start: '#10b981', end: '#84cc16', from: '#84cc16', to: '#10b981' };

  return (
    <div className="relative group">
      <GradientButton
        onClick={() => setLocale(locale === 'ro' ? 'en' : 'ro')}
        colors={greenColors}
        className="flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:scale-110 text-white"
        aria-label={locale === 'ro' ? 'Switch to English' : 'Schimbă în Română'}
      >
        <Globe className="w-5 h-5" />
        <span className="ml-1.5 text-sm font-medium uppercase">
          {locale === 'ro' ? 'EN' : 'RO'}
        </span>
      </GradientButton>
      
      {/* Tooltip */}
      <div className="absolute top-full right-0 mt-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {locale === 'ro' ? 'Switch to English' : 'Schimbă în Română'}
        <div className="absolute bottom-full right-3 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900/90"></div>
      </div>
    </div>
  );
}