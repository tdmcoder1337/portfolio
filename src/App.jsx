import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import CodeCard from './components/CodeCard/CodeCard';
import About from './components/MenHaqimda/MenHaqimda';
import Stats from './components/Stats/Stats';
import Skills from './components/Skills/Skills';
import Resume from './components/Rezyume/Rezyume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Aloqa/Aloqa';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PortfolioDetails from './components/PortfolioDetails/PortfolioDetails';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <CodeCard />
      <About />
      <Stats />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const saved = sessionStorage.getItem('homeScrollY');
    if (pathname === '/' && saved) {
      const y = parseInt(saved, 10);
      sessionStorage.removeItem('homeScrollY');
      const scroll = () => { document.documentElement.scrollTop = y; };
      Promise.resolve().then(scroll);
    } else if (pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
    AOS.refresh();
  }, [pathname]);

  return (
    <div className="app-viewport">
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-content">
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio-details" element={<PortfolioDetails />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </main>
        </div>
      </div>
    </div>
  );
}
