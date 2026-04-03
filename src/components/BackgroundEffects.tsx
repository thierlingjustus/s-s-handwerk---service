import { motion } from 'motion/react';
import { useEffect, useRef, useMemo } from 'react';

export function BackgroundEffects() {
  const glowRef = useRef<HTMLDivElement>(null);

  // Avoid state updates on mousemove to prevent re-renders (fixes scroll/animation lag)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59, 130, 246, 0.06), transparent 40%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Compute random values once to avoid hydration mismatch and re-calculation
  const particles = useMemo(() => {
    const isBrowser = typeof window !== 'undefined';
    const width = isBrowser ? window.innerWidth : 1000;
    const height = isBrowser ? window.innerHeight : 1000;
    
    return [...Array(15)].map((_, i) => ({
      id: i,
      initialX: Math.random() * width,
      initialY: Math.random() * height,
      targetY: Math.random() * height,
      opacity1: Math.random() * 0.4 + 0.1,
      opacity2: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 15 + 15
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#fafafa]">
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply z-50 pointer-events-none"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      ></div>

      {/* Grid Shimmer */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>
      
      {/* Cursor Proximity Glow */}
      <div 
        ref={glowRef}
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
      />

      {/* Soft animated gradient blobs */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none will-change-transform"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none will-change-transform"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particle Drift */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-blue-600 rounded-full will-change-transform"
            initial={{
              x: p.initialX,
              y: p.initialY,
              opacity: p.opacity1
            }}
            animate={{
              y: [null, p.targetY],
              opacity: [null, p.opacity2, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
}
