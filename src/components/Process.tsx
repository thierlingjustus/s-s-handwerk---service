import { motion } from 'motion/react';

const steps = [
  { num: "01", title: "Erstberatung vor Ort", desc: "Wir besprechen Ihr Vorhaben direkt am Objekt." },
  { num: "02", title: "Transparentes Festpreisangebot", desc: "Detaillierte Kostenaufstellung ohne Überraschungen." },
  { num: "03", title: "Fachgerechte Umsetzung", desc: "Professionelle und saubere Ausführung aller Arbeiten." },
  { num: "04", title: "Saubere Übergabe", desc: "Endabnahme und besenreine Übergabe Ihres Projekts." }
];

export function Process() {
  return (
    <section id="prozess" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unser Prozess</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Strukturiert, transparent und effizient zum Ziel.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-xl font-bold text-white shadow-sm mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-500 ease-out border border-slate-800">
                  <span className="text-[#00E5FF] font-mono">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
