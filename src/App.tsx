import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Innenausbau } from './pages/Innenausbau';
import { Galabau } from './pages/Galabau';
import { Entruempelung } from './pages/Entruempelung';
import { Reinigung } from './pages/Reinigung';
import { Anfrage } from './pages/Anfrage';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { ScrollToTop } from './components/ScrollToTop';
import { Phone } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen selection:bg-blue-200 selection:text-blue-900">
        <BackgroundEffects />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/innenausbau" element={<Innenausbau />} />
          <Route path="/galabau" element={<Galabau />} />
          <Route path="/entruempelung" element={<Entruempelung />} />
          <Route path="/reinigung" element={<Reinigung />} />
          <Route path="/anfrage" element={<Anfrage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <Footer />
        
        {/* Global Sticky Quick Call */}
        <a href="tel:+49123456789" className="fixed bottom-6 right-6 z-50 bg-[#1a4a7c] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group">
          <Phone className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[120px] transition-all duration-300 ease-in-out">
            <span className="pl-2">Schnellanruf</span>
          </span>
        </a>
      </div>
    </Router>
  );
}
