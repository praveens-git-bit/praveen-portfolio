import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Cloud, Flame } from 'lucide-react';

const SplitFaceLanding = () => {
  const { setMode } = usePortfolio();

  return (
    <div className="split-container cursor-custom">
      {/* Left Side - Calm Cloud Consultant */}
      <motion.div
        className="split-side group"
        onClick={() => setMode('cloud')}
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,50%,8%)] via-[hsl(220,40%,12%)] to-[hsl(200,50%,15%)]" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, hsl(187 100% 50% / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(187 100% 50% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          style={{ bottom: '30%', right: '20%' }}
        />

        {/* Character silhouette - Calm side */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Stylized face representation */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Face container */}
            <div className="relative w-48 h-64 md:w-64 md:h-80">
              {/* Calm eye */}
              <motion.div
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2"
                animate={{ 
                  boxShadow: [
                    '0 0 20px hsl(187 100% 50% / 0.3)',
                    '0 0 40px hsl(187 100% 50% / 0.5)',
                    '0 0 20px hsl(187 100% 50% / 0.3)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-16 h-8 md:w-20 md:h-10 border-2 border-primary/60 rounded-full flex items-center justify-center">
                  <motion.div 
                    className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary"
                    animate={{ scale: [1, 0.9, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Face outline - serene geometric */}
              <svg className="w-full h-full" viewBox="0 0 200 260">
                <motion.path
                  d="M100 20 L160 80 L160 180 L100 240 L40 180 L40 80 Z"
                  fill="none"
                  stroke="hsl(187 100% 50%)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                {/* Inner details */}
                <motion.path
                  d="M100 60 L130 90 L130 160 L100 200 L70 160 L70 90 Z"
                  fill="none"
                  stroke="hsl(187 100% 50%)"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>

              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-xl -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5 text-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-display-cloud">
                Enter World I
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display-cloud neon-text-cloud">
              CLOUD CONSULTANT
            </h2>
            <p className="text-sm text-muted-foreground mt-2 whitespace-nowrap md:whitespace-normal">
              Designing Cloud that Delivers Confidence
            </p>
          </motion.div>

          {/* Hover indicator */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileHover={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Divider */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-[2px] z-20 overflow-hidden"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="h-full w-full bg-gradient-to-b from-primary via-white/50 to-accent" />
        <motion.div
          className="absolute inset-0 bg-white/80"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Right Side - Rage Storyteller */}
      <motion.div
        className="split-side group"
        onClick={() => setMode('story')}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(0,30%,8%)] via-[hsl(0,20%,10%)] to-[hsl(0,10%,5%)]" />
        
        {/* Ink splatter effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[hsl(0,70%,30%)] rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[hsl(25,80%,35%)] rounded-full blur-3xl" />
        </div>

        {/* Grain texture */}
        <div className="grain-overlay opacity-[0.05]" />

        {/* Character silhouette - Rage side */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Face container */}
            <div className="relative w-48 h-64 md:w-64 md:h-80">
              {/* Rage eye with scar */}
              <motion.div
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2"
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(0 70% 50% / 0.4)',
                    '0 0 50px hsl(0 70% 50% / 0.7)',
                    '0 0 20px hsl(0 70% 50% / 0.4)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Scar across eye */}
                <div className="absolute w-24 h-[3px] bg-gradient-to-r from-transparent via-[hsl(0,70%,40%)] to-transparent -rotate-12 -translate-y-4" />
                
                <div className="w-16 h-8 md:w-20 md:h-10 border-2 border-[hsl(0,70%,50%)] rounded-[30%] flex items-center justify-center" style={{ borderRadius: '30% 70% 30% 70%' }}>
                  <motion.div 
                    className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[hsl(0,70%,50%)]"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 10px hsl(0 70% 50%)',
                        '0 0 30px hsl(0 70% 50%)',
                        '0 0 10px hsl(0 70% 50%)',
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Face outline - fierce, angular */}
              <svg className="w-full h-full" viewBox="0 0 200 260">
                <motion.path
                  d="M100 10 L170 60 L180 140 L150 200 L100 250 L50 200 L20 140 L30 60 Z"
                  fill="none"
                  stroke="hsl(0 70% 50%)"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                {/* Blood/paint streaks */}
                <motion.path
                  d="M120 30 L130 100 L125 150"
                  fill="none"
                  stroke="hsl(0 80% 40%)"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path
                  d="M75 50 L70 120"
                  fill="none"
                  stroke="hsl(25 80% 45%)"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </svg>

              {/* Ember glow behind */}
              <motion.div 
                className="absolute inset-0 -z-10"
                animate={{
                  background: [
                    'radial-gradient(circle at center, hsl(0 70% 30% / 0.3), transparent)',
                    'radial-gradient(circle at center, hsl(25 80% 40% / 0.4), transparent)',
                    'radial-gradient(circle at center, hsl(0 70% 30% / 0.3), transparent)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ filter: 'blur(30px)' }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-[hsl(0,70%,50%)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(0,70%,50%)/0.7] font-display-story">
                Enter World II
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display-story ember-text">
              BEYOND WORK
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px] font-body-story italic">
              Thoughts, interests & raw ideas
            </p>
          </motion.div>
        </div>

        {/* Ember particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              background: `hsl(${Math.random() * 30} 80% 50%)`,
              boxShadow: `0 0 10px hsl(25 80% 50%)`,
            }}
            animate={{
              y: [window.innerHeight, -50],
              x: [0, Math.sin(i) * 30],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>

      {/* Center instruction */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 -ml-[33px] z-30 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
{ /*       <p className="text-xs uppercase tracking-[0.4em] text-white/40">
          Choose your path
        </p>*/}
        <motion.div 
          className="mt-2 flex gap-4 justify-center"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-primary">◄</span>
          <span className="text-white/30">|</span>
          <span className="text-[hsl(0,70%,50%)]">►</span>
        </motion.div>
      </motion.div> 
    </div>
  );
};

export default SplitFaceLanding;
