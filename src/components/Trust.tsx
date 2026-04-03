import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const IconShield = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" stroke="#00E5FF" />
  </svg>
);

const IconClock = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" stroke="#00E5FF" />
  </svg>
);

const IconCheck = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" stroke="#00E5FF" />
  </svg>
);

const IconMapPin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" stroke="#00E5FF" />
  </svg>
);

export function Trust() {
  return (
    <section id="ueber-uns" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract shapes for dark section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Regionale Stärke. <br/><span className="text-blue-400">Persönlicher Einsatz.</span></h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Geführt von Sascha Schneede – Wir stehen für persönliche Beratung, transparente Festpreise und termingerechte Umsetzung. Ihr Projekt ist bei uns Chefsache.
            </p>
            
            <div className="flex items-start gap-4 mb-10">
              <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400">
                <IconMapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Einsatzgebiete</h4>
                <p className="text-slate-400">Von der Kieler Wik bis nach Dätgen und Noer sind wir für Sie im Einsatz.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: IconShield, title: "Festpreisgarantie", desc: "Keine versteckten Kosten." },
                { icon: IconClock, title: "Termintreue", desc: "Wir halten uns an Absprachen." },
                { icon: IconCheck, title: "Qualitätsarbeit", desc: "Fachgerechte Ausführung." },
                { icon: IconMapPin, title: "Lokal vernetzt", desc: "Schnell bei Ihnen vor Ort." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800 transition-colors">
                  <item.icon className="w-8 h-8 text-white mb-4" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
          >
            <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Modernes Handwerk und Architektur" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay gradient for text readability if needed, or just aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
