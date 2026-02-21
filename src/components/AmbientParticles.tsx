import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const AmbientParticles = () => {
  const { mode } = usePortfolio();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = mode === 'story' ? 30 : mode === 'cloud' ? 20 : 15;
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 8,
    }));
    setParticles(newParticles);
  }, [mode]);

  if (mode === 'landing') {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            background: mode === 'story'
              ? `radial-gradient(circle, hsl(25 80% 55%), hsl(0 70% 45%))`
              : `radial-gradient(circle, hsl(187 100% 60%), hsl(200 80% 50%))`,
            boxShadow: mode === 'story'
              ? `0 0 ${particle.size * 3}px hsl(25 80% 50% / 0.5)`
              : `0 0 ${particle.size * 3}px hsl(187 100% 50% / 0.5)`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: [window.innerHeight, -50],
            opacity: [0, 1, 1, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Floating dust particles */}
      {mode === 'cloud' && (
        <>
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute w-1 h-1 rounded-full bg-primary/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
                repeat: Infinity,
              }}
            />
          ))}
        </>
      )}

      {/* Embers for story mode */}
      {mode === 'story' && (
        <div className="grain-overlay" />
      )}
    </div>
  );
};

export default AmbientParticles;
