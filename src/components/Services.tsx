import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const IconInnenausbau = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Roller */}
    <rect x="2" y="5" width="14" height="6" rx="2" />
    <path d="M16 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4" stroke="#00E5FF" />
    <line x1="14" y1="18" x2="14" y2="18.01" />
  </svg>
);

const IconGalabau = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Geometric Leaf/Plant */}
    <path d="M12 22V12" stroke="#00E5FF" />
    <path d="M12 12c-4 0-7-3-7-7 0-3 3-3 7-3s7 0 7 3c0 4-3 7-7 7z" />
  </svg>
);

const IconEntruempelung = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Geometric Box */}
    <rect x="3" y="8" width="18" height="13" rx="2" />
    <path d="M3 8l9-5 9 5" stroke="#00E5FF" />
    <path d="M12 12v9" />
    <path d="M8 8l4 4 4-4" />
  </svg>
);

const IconReinigung = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Sparkles / Clean */}
    <path d="M12 3v3" stroke="#00E5FF" />
    <path d="M12 18v3" stroke="#00E5FF" />
    <path d="M3 12h3" stroke="#00E5FF" />
    <path d="M18 12h3" stroke="#00E5FF" />
    <rect x="8" y="8" width="8" height="8" rx="2" />
  </svg>
);

const services = [
  {
    title: "Innenausbau & Renovierung",
    description: "Trockenbau, Bodenverlegung, moderne Raumgestaltung.",
    icon: IconInnenausbau,
    path: "/innenausbau"
  },
  {
    title: "Garten- & Landschaftsbau",
    description: "Wege, Zäune (Spezialität: Zaunbau), Grünflächenpflege.",
    icon: IconGalabau,
    path: "/galabau"
  },
  {
    title: "Entrümpelung & Entsorgung",
    description: "Fachgerechte Räumung von Gewerbe- und Privatobjekten.",
    icon: IconEntruempelung,
    path: "/entruempelung"
  },
  {
    title: "Gebäudemanagement & Reinigung",
    description: "Werterhalt für Hausverwaltungen und Eigentümer.",
    icon: IconReinigung,
    path: "/reinigung"
  }
];

export function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.getElementsByClassName('service-card');
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="leistungen" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unsere Kernkompetenzen</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Präzision und Zuverlässigkeit in jedem Gewerk.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={cardsRef}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden transition-shadow duration-500 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <Link to={service.path} className="absolute inset-0 z-20"></Link>
              
              {/* Cursor Proximity Border Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.12), transparent 40%)',
                  zIndex: 0
                }}
              />
              
              {/* Hover Dotted Background Reveal */}
              <div className="absolute inset-0 dotted-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              {/* Border Beam Effect */}
              <div className="absolute inset-0 border-beam opacity-0 group-hover:opacity-100 z-0 pointer-events-none"></div>

              <div className="relative z-10 pointer-events-none flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  <service.icon className="w-8 h-8 text-white transition-all duration-500 ease-in-out" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
