import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';

const TransitionOverlay = () => {
  const { isTransitioning, mode } = usePortfolio();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: mode === 'story' 
                ? 'radial-gradient(circle at center, hsl(0 30% 5%), hsl(0 20% 3%))'
                : mode === 'cloud'
                  ? 'radial-gradient(circle at center, hsl(220 40% 8%), hsl(220 30% 5%))'
                  : 'hsl(0 0% 3%)',
            }}
            initial={{ scale: 0, borderRadius: '100%' }}
            animate={{ scale: 3, borderRadius: '0%' }}
            exit={{ scale: 0, borderRadius: '100%' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Impact flash */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />

          {/* Radial lines */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2] }}
            transition={{ duration: 0.8 }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[50vh] origin-bottom"
                style={{
                  background: mode === 'story'
                    ? 'linear-gradient(to top, hsl(0 70% 50% / 0.5), transparent)'
                    : 'linear-gradient(to top, hsl(187 100% 50% / 0.5), transparent)',
                  transform: `rotate(${i * 30}deg)`,
                }}
              />
            ))}
          </motion.div>

          {/* Distortion rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0.5, 0], scale: [0.5, 2] }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div
                className="w-64 h-64 rounded-full border-2"
                style={{
                  borderColor: mode === 'story'
                    ? 'hsl(0 70% 50% / 0.3)'
                    : 'hsl(187 100% 50% / 0.3)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay;
