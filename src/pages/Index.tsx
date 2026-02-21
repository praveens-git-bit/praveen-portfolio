import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import SplitFaceLanding from '@/components/SplitFaceLanding';
import CloudPortfolio from '@/components/cloud/CloudPortfolio';
import StoryPortfolio from '@/components/story/StoryPortfolio';
import CustomCursor from '@/components/CustomCursor';
import AmbientParticles from '@/components/AmbientParticles';
import TransitionOverlay from '@/components/TransitionOverlay';

const PortfolioContent = () => {
  const { mode } = usePortfolio();

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden cursor-custom">
      <CustomCursor />
      <AmbientParticles />
      <TransitionOverlay />
      
      <AnimatePresence mode="wait">
        {mode === 'landing' && (
          <motion.div
            key="landing"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <SplitFaceLanding />
          </motion.div>
        )}
        
        {mode === 'cloud' && (
          <motion.div
            key="cloud"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <CloudPortfolio />
          </motion.div>
        )}
        
        {mode === 'story' && (
          <motion.div
            key="story"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <StoryPortfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Index = () => {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
};

export default Index;
