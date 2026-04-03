import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-10 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo className="scale-75 origin-left" />
          
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/impressum" className="hover:text-[#1a4a7c] transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-[#1a4a7c] transition-colors">Datenschutz</Link>
            <Link to="/anfrage" className="hover:text-[#1a4a7c] transition-colors">Kontakt</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} S&S Handwerk & Service. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
