import { motion } from 'motion/react';
import { Reviews } from '../components/Reviews';
import { Send } from 'lucide-react';

export function Anfrage() {
  return (
    <div className="pt-24 relative z-10">
      {/* Reviews Section first as requested */}
      <Reviews />

      {/* Contact Form Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Ihre Projektanfrage</h1>
            <p className="text-lg text-slate-600">
              Beschreiben Sie uns kurz Ihr Vorhaben. Wir melden uns schnellstmöglich mit einem passenden Angebot bei Ihnen.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name / Firma</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1a4a7c] focus:border-transparent outline-none transition-all" placeholder="Max Mustermann" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-Mail Adresse</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1a4a7c] focus:border-transparent outline-none transition-all" placeholder="max@beispiel.de" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefonnummer</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1a4a7c] focus:border-transparent outline-none transition-all" placeholder="+49 123 456789" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Gewünschte Leistung</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1a4a7c] focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Bitte wählen...</option>
                    <option value="innenausbau">Innenausbau & Renovierung</option>
                    <option value="galabau">Garten- & Landschaftsbau</option>
                    <option value="entruempelung">Entrümpelung & Entsorgung</option>
                    <option value="reinigung">Gebäudemanagement & Reinigung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Ihre Nachricht</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1a4a7c] focus:border-transparent outline-none transition-all resize-none" placeholder="Beschreiben Sie hier Ihr Projekt..."></textarea>
              </div>

              <button type="button" className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#1a4a7c] rounded-lg overflow-hidden transition-all hover:bg-[#123860] shadow-lg shadow-[#1a4a7c]/20 hover:shadow-[#1a4a7c]/40">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2">
                  Anfrage absenden
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
