import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { isDay, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-4 rounded-full glass-card neon-border group overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Japanese text decoration */}
      <span className="absolute -top-1 -left-1 text-[8px] text-primary/50 font-jp">
        {isDay ? '昼' : '夜'}
      </span>
      
      <div className="relative w-6 h-6">
        <AnimatePresence mode="wait">
          {isDay ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Sun className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Moon className="w-6 h-6 text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDay 
            ? ['0 0 20px rgba(250,204,21,0.3)', '0 0 40px rgba(250,204,21,0.5)', '0 0 20px rgba(250,204,21,0.3)']
            : ['0 0 20px hsl(var(--primary) / 0.3)', '0 0 40px hsl(var(--primary) / 0.5)', '0 0 20px hsl(var(--primary) / 0.3)']
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
