import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedBackground = () => {
  const { isDay } = useTheme();
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const [sakura, setSakura] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
    }));
    setStars(newStars);

    const newSakura = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
    }));
    setSakura(newSakura);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Day Sky */}
      <AnimatePresence>
        {isDay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, 
                #7dd3fc 0%, 
                #bae6fd 20%,
                #f0f9ff 40%,
                #fef3c7 70%,
                #fde68a 90%,
                #fbbf24 100%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Night Sky */}
      <AnimatePresence>
        {!isDay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, 
                #030014 0%, 
                #0a0520 20%,
                #150a30 40%,
                #1a0a40 60%,
                #0f0525 80%,
                #030014 100%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Anime Sun (Day) */}
      <AnimatePresence>
        {isDay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-20 right-20 w-32 h-32"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-400 shadow-[0_0_60px_rgba(251,191,36,0.6)]" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-80" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Anime Moon (Night) */}
      <AnimatePresence>
        {!isDay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-16 right-16 w-28 h-28"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-[0_0_80px_rgba(226,232,240,0.4)]" />
            <div className="absolute top-4 left-6 w-4 h-4 rounded-full bg-slate-300/50" />
            <div className="absolute top-8 right-6 w-3 h-3 rounded-full bg-slate-300/40" />
            <div className="absolute bottom-6 left-8 w-5 h-5 rounded-full bg-slate-300/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stars (Night) */}
      <AnimatePresence>
        {!isDay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  background: star.size > 2 
                    ? 'radial-gradient(circle, #fff 0%, #00ffff 50%, transparent 100%)' 
                    : '#fff',
                  boxShadow: star.size > 2 ? '0 0 10px #00ffff' : 'none',
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + star.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sakura Petals (Day) */}
      <AnimatePresence>
        {isDay && (
          <div className="absolute inset-0 overflow-hidden">
            {sakura.map((petal) => (
              <motion.div
                key={petal.id}
                className="absolute w-3 h-3"
                style={{ left: `${petal.x}%` }}
                initial={{ y: -20, rotate: 0, opacity: 0 }}
                animate={{
                  y: '110vh',
                  rotate: 360,
                  opacity: [0, 1, 1, 0],
                  x: [0, 30, -20, 40, 0],
                }}
                transition={{
                  duration: petal.duration,
                  repeat: Infinity,
                  delay: petal.delay,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full fill-pink-300/80">
                  <path d="M12 2C12 2 8 6 8 10C8 14 12 14 12 14C12 14 16 14 16 10C16 6 12 2 12 2Z" />
                </svg>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Floating Particles (Night) */}
      <AnimatePresence>
        {!isDay && (
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  background: i % 2 === 0 ? '#00ffff' : '#ff00ff',
                  boxShadow: `0 0 10px ${i % 2 === 0 ? '#00ffff' : '#ff00ff'}`,
                }}
                initial={{ y: '100vh', opacity: 0 }}
                animate={{
                  y: '-10vh',
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Cyberpunk City (Night) */}
      <AnimatePresence>
        {!isDay && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-0 left-0 right-0 h-80"
          >
            <svg viewBox="0 0 1400 250" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
              <defs>
                <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a3a" />
                  <stop offset="100%" stopColor="#0a0a15" />
                </linearGradient>
                <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ffff" />
                  <stop offset="50%" stopColor="#ff00ff" />
                  <stop offset="100%" stopColor="#00ffff" />
                </linearGradient>
              </defs>
              
              {/* Buildings */}
              <rect x="20" y="100" width="50" height="150" fill="url(#buildingGrad)" />
              <rect x="80" y="60" width="70" height="190" fill="url(#buildingGrad)" />
              <rect x="160" y="120" width="45" height="130" fill="url(#buildingGrad)" />
              <rect x="220" y="30" width="90" height="220" fill="url(#buildingGrad)" />
              <rect x="320" y="80" width="60" height="170" fill="url(#buildingGrad)" />
              <rect x="400" y="50" width="80" height="200" fill="url(#buildingGrad)" />
              <rect x="500" y="90" width="55" height="160" fill="url(#buildingGrad)" />
              <rect x="570" y="40" width="100" height="210" fill="url(#buildingGrad)" />
              <rect x="690" y="70" width="65" height="180" fill="url(#buildingGrad)" />
              <rect x="770" y="25" width="85" height="225" fill="url(#buildingGrad)" />
              <rect x="870" y="95" width="50" height="155" fill="url(#buildingGrad)" />
              <rect x="940" y="55" width="75" height="195" fill="url(#buildingGrad)" />
              <rect x="1030" y="85" width="60" height="165" fill="url(#buildingGrad)" />
              <rect x="1110" y="45" width="90" height="205" fill="url(#buildingGrad)" />
              <rect x="1220" y="75" width="70" height="175" fill="url(#buildingGrad)" />
              <rect x="1310" y="110" width="80" height="140" fill="url(#buildingGrad)" />

              {/* Neon Signs */}
              <rect x="230" y="50" width="70" height="3" fill="#00ffff" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="410" y="70" width="60" height="3" fill="#ff00ff" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.5s" repeatCount="indefinite" />
              </rect>
              <rect x="580" y="60" width="80" height="3" fill="#00ffff" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.5s" repeatCount="indefinite" />
              </rect>
              <rect x="780" y="45" width="75" height="3" fill="#ff00ff" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.6;0.9" dur="1.8s" repeatCount="indefinite" />
              </rect>
              <rect x="1120" y="65" width="70" height="3" fill="#00ffff" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.2s" repeatCount="indefinite" />
              </rect>

              {/* Window Lights */}
              {[...Array(40)].map((_, i) => {
                const buildings = [
                  { x: 95, yMin: 80, yMax: 200 },
                  { x: 250, yMin: 50, yMax: 200 },
                  { x: 420, yMin: 70, yMax: 200 },
                  { x: 600, yMin: 60, yMax: 200 },
                  { x: 800, yMin: 45, yMax: 200 },
                  { x: 1140, yMin: 65, yMax: 200 },
                ];
                const building = buildings[i % buildings.length];
                const y = building.yMin + Math.random() * (building.yMax - building.yMin);
                const xOffset = Math.random() * 40;
                return (
                  <rect
                    key={i}
                    x={building.x + xOffset}
                    y={y}
                    width="4"
                    height="6"
                    fill={Math.random() > 0.5 ? "#00ffff" : "#ff00ff"}
                    opacity="0.7"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.7;0.2;0.7"
                      dur={`${1 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                );
              })}
            </svg>

            {/* Ground Neon Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Anime Clouds (Day) */}
      <AnimatePresence>
        {isDay && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${10 + i * 8}%`,
                }}
                initial={{ x: '-20%' }}
                animate={{ x: '120%' }}
                transition={{
                  duration: 40 + i * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 5,
                }}
              >
                <svg 
                  viewBox="0 0 200 80" 
                  className="fill-white/90"
                  style={{ 
                    width: `${150 + i * 30}px`,
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                  }}
                >
                  <ellipse cx="50" cy="50" rx="40" ry="25" />
                  <ellipse cx="90" cy="40" rx="50" ry="35" />
                  <ellipse cx="140" cy="50" rx="45" ry="28" />
                  <ellipse cx="70" cy="55" rx="35" ry="20" />
                  <ellipse cx="120" cy="55" rx="40" ry="22" />
                </svg>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Scan Line Effect (Night) */}
      <AnimatePresence>
        {!isDay && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan"
              style={{ boxShadow: '0 0 20px hsl(var(--primary))' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Neon Glow Orbs (Night) */}
      <AnimatePresence>
        {!isDay && (
          <>
            <motion.div
              className="absolute bottom-20 left-1/4 w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(187 100% 50% / 0.15) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(280 80% 65% / 0.15) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBackground;
