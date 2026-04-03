import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 px-6 flex flex-col items-center text-center min-h-screen justify-center">
      {/* Full-bleed background image with dark overlay to assure text readability */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1541888052131-ab142cecdff1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80" 
          alt="Modernes Handwerk und Planung" 
          className="w-full h-full object-cover opacity-50 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients for smooth fading into the image and towards the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/60"></div>
      </div>

      {/* Fade to white background for the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fafafa] to-transparent z-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center mt-[-4rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-200 text-sm font-medium mb-8 backdrop-blur-md shadow-lg"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"></span>
          Kiel & Schleswig-Holstein
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-6 max-w-5xl leading-[1.1] flex flex-col items-center drop-shadow-xl"
        >
          <span className="text-white block mb-2">Handwerkliche Exzellenz</span>
          <span className="relative inline-block mt-2">
            <span className="superpower-glow"></span>
            <span className="superpower-text relative z-10">trifft auf Kieler Zuverlässigkeit.</span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed drop-shadow-md"
        >
          Ihr Full-Service-Partner für Innenausbau, GaLaBau und professionelle Entrümpelung in Kiel und ganz Schleswig-Holstein.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link to="/anfrage" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-blue-600/90 border border-blue-500/50 rounded-lg overflow-hidden transition-all hover:bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] backdrop-blur-sm">
            <span className="relative">Angebot anfordern</span>
            <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a href="#leistungen" className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-slate-200 bg-white/5 border border-white/10 rounded-lg transition-all hover:bg-white/10 hover:text-white backdrop-blur-sm">
            Unsere Leistungen
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-slate-400 group-hover:text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
