import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection = () => {
  const { isDay } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const glowVariants = {
    animate: {
      textShadow: [
        '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary)), 0 0 60px hsl(var(--primary))',
        '0 0 30px hsl(var(--primary)), 0 0 60px hsl(var(--primary)), 0 0 90px hsl(var(--primary))',
        '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary)), 0 0 60px hsl(var(--primary))',
      ],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Anime-style corner decorations */}
      <div className="absolute top-24 left-8 text-4xl text-primary/30 font-jp">「</div>
      <div className="absolute bottom-24 right-8 text-4xl text-primary/30 font-jp">」</div>

      {/* Japanese side text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <p className="text-xs text-primary/50 font-jp writing-vertical-rl tracking-widest">
          クラウドアーキテクト · AI ビルダー
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <p className="text-xs text-secondary/50 font-jp writing-vertical-rl tracking-widest">
          未来を創造する
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Episode badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span 
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card neon-border text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-jp">第一章</span>
            <span className="text-foreground/80">Cloud Architect & AI Builder</span>
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </motion.span>
        </motion.div>

        {/* Main headline with glitch effect */}
        <motion.div variants={itemVariants} className="mb-4">
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className={`block ${isDay ? 'text-slate-700' : 'text-foreground'} mb-2`}>I am</span>
            <motion.span 
              className="text-gradient-animated relative inline-block"
              variants={glowVariants}
              animate="animate"
              data-text="PRAVEEN"
            >
              PRAVEEN
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Anime-style subtitle */}
        <motion.div 
          variants={itemVariants}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-4 text-lg sm:text-xl text-muted-foreground">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary"
            >
              ◆
            </motion.span>
            <span>Building the</span>
            <span className="text-primary font-semibold neon-text">Future</span>
            <span>with</span>
            <span className="text-secondary font-semibold neon-text-purple">AI</span>
            <span>&</span>
            <span className="text-accent font-semibold">Cloud</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-secondary"
            >
              ◆
            </motion.span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              asChild
              size="lg" 
              className="relative overflow-hidden neon-glow bg-primary text-primary-foreground hover:bg-primary/90 group px-8"
            >
              <a href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="font-jp text-sm">作品</span>
                  View My Work
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </a>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="neon-border hover:bg-primary/10 px-8"
            >
              <a href="#contact">
                <span className="font-jp text-sm mr-2">連絡</span>
                Get In Touch
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              className="p-4 rounded-full glass-card neon-border text-foreground/70 hover:text-primary transition-colors"
              aria-label={label}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: '0 0 30px hsl(var(--primary) / 0.5)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-colors">
            <span className="text-xs font-jp">スクロール</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-20 w-4 h-4 rounded-full bg-primary/60"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          boxShadow: ['0 0 20px hsl(var(--primary))', '0 0 40px hsl(var(--primary))', '0 0 20px hsl(var(--primary))']
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-32 w-3 h-3 rounded-full bg-secondary/60"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.3, 1],
          boxShadow: ['0 0 20px hsl(var(--secondary))', '0 0 40px hsl(var(--secondary))', '0 0 20px hsl(var(--secondary))']
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-accent/60"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />

      {/* Add CSS for vertical text */}
      <style>{`
        .writing-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
