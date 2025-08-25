"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from './translations';

interface I18nContextType {
  locale: Language;
  setLocale: (locale: Language) => void;
  t: typeof translations.ro;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Language>('ro');

  useEffect(() => {
    // Get saved language from localStorage
    const savedLocale = localStorage.getItem('locale') as Language;
    if (savedLocale && (savedLocale === 'ro' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  const handleSetLocale = (newLocale: Language) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const value = {
    locale,
    setLocale: handleSetLocale,
    t: translations[locale],
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}