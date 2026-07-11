import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

function getInitialLang() {
  const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
  return saved === 'en' || saved === 'uz' ? saved : 'uz';
}

function resolve(dict, key) {
  return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dict);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    const value = resolve(translations[lang], key);
    if (value !== undefined) return value;
    const fallback = resolve(translations.uz, key);
    return fallback !== undefined ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
