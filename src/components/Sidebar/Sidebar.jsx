import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTheme } from '../../theme/ThemeContext';
import './Sidebar.css';

const languages = [
  { code: 'uz', label: "O'zbekcha", short: 'UZ' },
  { code: 'en', label: 'English', short: 'EN' },
];

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const langRef = useRef(null);

  const navLinks = [
    { href: '/', icon: 'bi-house', label: t('sidebar.nav.home') },
    { href: '/#about', icon: 'bi-person', label: t('sidebar.nav.about') },
    { href: '/#resume', icon: 'bi-file-earmark-text', label: t('sidebar.nav.resume') },
    { href: '/#portfolio', icon: 'bi-images', label: t('sidebar.nav.portfolio') },
    { href: '/#services', icon: 'bi-hdd-stack', label: t('sidebar.nav.services') },
    { href: '/#contact', icon: 'bi-envelope', label: t('sidebar.nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'portfolio', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos <= el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setShow(false);
    }
  };

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/' && !activeSection;
    if (href.startsWith('/#')) return activeSection === href.slice(2);
    return false;
  };

  const currentLang = languages.find((l) => l.code === lang) ?? languages[0];

  return (
    <>
      <button
        className={`sidebar-toggle ${show ? 'open' : ''}`}
        onClick={() => setShow(!show)}
        aria-label={t('sidebar.toggleAria')}
      >
        <i className={`bi ${show ? 'bi-x' : 'bi-list'}`}></i>
      </button>

      <aside className={`sidebar ${show ? 'show' : ''}`}>
        <div className="sidebar-inner">
          <div className="sidebar-profile">
            <div className="sidebar-profile-img">
              <img src="/assets/img/my-profile.png" alt={t('about.imgAlt')} />
            </div>
          </div>

          <h2 className="sidebar-name">Sodiqov<br />Muhammadsodiq</h2>
          <span className="sidebar-role">{t('sidebar.role')}</span>
          <div className="sidebar-social">
            <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
            <a href="https://t.me/tdmcoder" className="social-link"><i className="bi bi-telegram"></i></a>
            <a href="https://github.com/tdmcoder1337" className="social-link"><i className="bi bi-github"></i></a>
          </div>

          <div className="sidebar-controls">
            <div className="sidebar-lang" ref={langRef}>
              <button
                type="button"
                className="sidebar-lang-toggle"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <i className="bi bi-globe2"></i>
                <span>{currentLang.short}</span>
                <i className={`bi bi-chevron-down sidebar-lang-caret ${langOpen ? 'open' : ''}`}></i>
              </button>
              {langOpen && (
                <ul className="sidebar-lang-menu" role="listbox">
                  {languages.map((l) => (
                    <li key={l.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={l.code === lang}
                        className={l.code === lang ? 'active' : ''}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="button"
              className="sidebar-theme-toggle"
              onClick={toggleTheme}
              aria-label={t('sidebar.themeToggleAria')}
              aria-pressed={theme === 'light'}
            >
              <i className={`bi ${theme === 'dark' ? 'bi-moon-stars' : 'bi-sun'}`}></i>
            </button>
          </div>

          <div className="sidebar-divider"></div>

          <nav className="sidebar-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={isActive(link.href) ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <i className={`bi ${link.icon} nav-icon`}></i>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="/rezyume.html" download className="sidebar-cv-btn">
            <i className="bi bi-download"></i>
            {t('sidebar.cvButton')}
          </a>
        </div>
      </aside>

      {show && <div className="sidebar-overlay" onClick={() => setShow(false)} />}
    </>
  );
}
