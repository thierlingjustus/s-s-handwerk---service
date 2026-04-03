import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isDarkBg = isHome && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${scrolled ? 'glass-panel shadow-sm' : 'bg-transparent'}`}>
          <Link to="/" className="flex-shrink-0">
            <Logo className="scale-75 origin-left" theme={isDarkBg ? 'dark' : 'light'} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#leistungen" className={`text-sm font-medium transition-colors ${isDarkBg ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}>Leistungen</a>
            <a href="/#ueber-uns" className={`text-sm font-medium transition-colors ${isDarkBg ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}>Über uns</a>
            <a href="/#prozess" className={`text-sm font-medium transition-colors ${isDarkBg ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}>Prozess</a>
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/anfrage" className={`group relative px-5 py-2.5 text-sm font-medium rounded-lg overflow-hidden transition-all ${isDarkBg ? 'text-slate-900 bg-white hover:bg-slate-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'text-white bg-slate-900 hover:bg-slate-800 hover:shadow-[0_0_15px_rgba(15,23,42,0.3)]'}`}>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative">Kontakt</span>
            </Link>
          </div>

          <button 
            className={`md:hidden p-2 ${isDarkBg ? 'text-white' : 'text-slate-600'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full px-6 pt-2 pb-6 bg-white border-b border-slate-100 shadow-lg">
          <div className="flex flex-col gap-4 p-4">
            <a href="/#leistungen" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-900">Leistungen</a>
            <a href="/#ueber-uns" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-900">Über uns</a>
            <a href="/#prozess" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-900">Prozess</a>
            <Link to="/anfrage" onClick={() => setMobileMenuOpen(false)} className="mt-2 w-full px-5 py-3 text-center text-sm font-medium text-white bg-blue-600 rounded-lg">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
