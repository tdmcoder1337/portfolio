import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import VisualMebell from './components/VisualMebell/VisualMebell';
import RahimovShokir from './components/RahimovShokir/RahimovShokir';
import TdmDashboard from './components/TdmDashboard/TdmDashboard';
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
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="app-viewport">
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-content">
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio-details" element={<PortfolioDetails />} />
              <Route path="/visual-mebell" element={<VisualMebell />} />
              <Route path="/rahimov-shokir" element={<RahimovShokir />} />
              <Route path="/tdm-dashboard" element={<TdmDashboard />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </main>
        </div>
      </div>
    </div>
  );
}
