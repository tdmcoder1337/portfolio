import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const navLinks = [
  { href: '/', icon: 'bi-house', label: 'Bosh sahifa' },
  { href: '/#about', icon: 'bi-person', label: 'Men haqimda' },
  { href: '/#resume', icon: 'bi-file-earmark-text', label: 'Rezyume' },
  { href: '/#portfolio', icon: 'bi-images', label: 'Portfolio' },
  { href: '/#services', icon: 'bi-hdd-stack', label: 'Xizmatlar' },
  { href: '/#contact', icon: 'bi-envelope', label: 'Aloqa' },
];

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

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

  return (
    <>
      <button
        className={`sidebar-toggle ${show ? 'open' : ''}`}
        onClick={() => setShow(!show)}
        aria-label="Navigatsiyani ochish/yopish"
      >
        <i className={`bi ${show ? 'bi-x' : 'bi-list'}`}></i>
      </button>

      <aside className={`sidebar ${show ? 'show' : ''}`}>
        <div className="sidebar-inner">
          <div className="sidebar-profile">
            <div className="sidebar-profile-img">
              <img src="/assets/img/my-profile.png" alt="Profil" />
            </div>
          </div>

          <h2 className="sidebar-name">Sodiqov<br />Muhammadsodiq</h2>
          <span className="sidebar-role">Dasturchi</span>
          <div className="sidebar-social">
            <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
            <a href="https://t.me/tdmcoder" className="social-link"><i className="bi bi-telegram"></i></a>
            <a href="https://github.com/tdmcoder1337" className="social-link"><i className="bi bi-github"></i></a>
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
            Yuklab olish CV
          </a>
        </div>
      </aside>

      {show && <div className="sidebar-overlay" onClick={() => setShow(false)} />}
    </>
  );
}
