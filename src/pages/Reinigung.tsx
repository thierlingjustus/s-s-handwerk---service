import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  "Bauendreinigung",
  "Grund- & Endreinigung",
  "Treppenhausreinigung",
  "Winterdienst (Schneeräumung)",
  "Regelmäßige Objektkontrollen",
  "Facility Management"
];

export function Reinigung() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#1a4a7c] mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zurück zur Übersicht
      </Link>

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Gebäudemanagement & Reinigung</h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Werterhalt für Hausverwaltungen und Eigentümer. Wir sorgen für Sauberkeit, Sicherheit und Pflege Ihrer Immobilien – vom Treppenhaus bis zum Winterdienst.
          </p>
          <Link to="/anfrage" className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-[#1a4a7c] rounded-lg overflow-hidden transition-all hover:bg-[#123860] shadow-lg shadow-[#1a4a7c]/20 hover:shadow-[#1a4a7c]/40">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative">Direktanfrage stellen</span>
            <ArrowRight className="relative w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end group h-full"
        >
          <div className="relative w-full max-w-[360px] md:max-w-md aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white transition-all duration-700 ease-out group-hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
            <div className="absolute inset-0 bg-slate-900/10 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=90&w=1600&auto=format&fit=crop" 
              alt="Reinigungs-Service und Sauberkeit" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>

      {/* Sub-services Grid */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Unsere Leistungen im Detail</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {subServices.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="group relative p-6 bg-white rounded-2xl border border-slate-200 overflow-hidden card-hover-effect will-change-transform"
            >
              <div className="absolute inset-0 dotted-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-medium text-slate-800">{service}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trust Signals */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-50 rounded-3xl p-10 border border-slate-200 mb-12 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-30 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Warum S&S für Ihr Gebäudemanagement?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-[#1a4a7c] mb-2">Werterhalt garantiert</h4>
              <p className="text-slate-600 text-sm">Durch regelmäßige Pflege und Wartung sichern wir den langfristigen Wert Ihrer Immobilie.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1a4a7c] mb-2">Zuverlässige Intervalle</h4>
              <p className="text-slate-600 text-sm">Wir halten uns strikt an vereinbarte Reinigungs- und Kontrollpläne.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1a4a7c] mb-2">Auge fürs Detail</h4>
              <p className="text-slate-600 text-sm">Unsere Qualitätskontrollen stellen sicher, dass auch versteckte Ecken makellos bleiben.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
