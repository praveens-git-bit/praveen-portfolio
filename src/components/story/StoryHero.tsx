import { motion } from 'framer-motion';
import { Flame, Scroll, PenTool, Sparkles, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StoryHeroProps {
  onArchiveClick: () => void;
}

const StoryHero = ({ onArchiveClick }: StoryHeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="story-hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-primary/60 font-display-story"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Flame className="w-4 h-4" />
            Beyond the Professional
            <Flame className="w-4 h-4" />
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display-story mb-8 leading-tight"
        >
          <span className="block text-foreground/80 italic font-body-story text-2xl md:text-3xl mb-4">
            "Not everything worth saying
          </span>
          <span className="text-gradient-story ember-text">
            Fits in a Resume"
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {[
            { label: 'Thoughts', icon: PenTool },
            { label: 'Interests', icon: Sparkles },
            { label: 'Updates', icon: BookOpen },
          ].map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="px-4 py-2 text-sm font-body-story italic text-muted-foreground border-b border-primary/30 flex items-center gap-2"
            >
              <Icon className="w-3 h-3" />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            onClick={onArchiveClick}
            className="ember-glow bg-primary text-primary-foreground hover:bg-primary/90 font-display-story clickable"
          >
            <Scroll className="w-4 h-4 mr-2" />
            The Chronicles, Ongoing
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StoryHero;
