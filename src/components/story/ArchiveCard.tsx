import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowUpRight, Flame, BookOpen, Sparkles, PenTool } from 'lucide-react';
import type { ArchiveEntry } from './StoryPortfolio';

const moodConfig: Record<ArchiveEntry['mood'], { color: string; glow: string; icon: typeof Flame }> = {
  reflective: { color: 'hsl(220 60% 50%)', glow: 'hsl(220 60% 50% / 0.3)', icon: BookOpen },
  passionate: { color: 'hsl(0 70% 50%)', glow: 'hsl(0 70% 50% / 0.3)', icon: Flame },
  curious: { color: 'hsl(40 80% 50%)', glow: 'hsl(40 80% 50% / 0.3)', icon: Sparkles },
  raw: { color: 'hsl(25 80% 50%)', glow: 'hsl(25 80% 50% / 0.3)', icon: PenTool },
};

interface ArchiveCardProps {
  entry: ArchiveEntry;
  index: number;
  onClick: () => void;
}

const ArchiveCard = ({ entry, index, onClick }: ArchiveCardProps) => {
  const config = moodConfig[entry.mood];
  const MoodIcon = config.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="group cursor-pointer clickable relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
    >
      <div className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-stretch gap-0 overflow-hidden rounded-2xl`}>
        {/* Mood accent strip */}
        <motion.div
          className="w-1.5 md:w-2 shrink-0 relative overflow-hidden"
          style={{ background: config.color }}
          whileHover={{ width: 12 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 opacity-50"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              background: `linear-gradient(to bottom, transparent, white, transparent)`,
            }}
          />
        </motion.div>

        {/* Main content */}
        <div className="flex-1 glass-card-story rounded-none p-6 md:p-8 relative overflow-hidden border-0">
          {/* Background chapter watermark */}
          <div
            className="absolute -right-4 -bottom-6 text-[8rem] font-display-story leading-none select-none pointer-events-none"
            style={{ color: `${config.color}`, opacity: 0.04 }}
          >
            {entry.chapter}
          </div>

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${isEven ? '0% 50%' : '100% 50%'}, ${config.glow}, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            {/* Top row: chapter + category + date */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <motion.div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-display-story tracking-widest uppercase"
                style={{ 
                  background: `${config.color}15`,
                  color: config.color,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <MoodIcon className="w-3 h-3" />
                {entry.category}
              </motion.div>
              <span className="text-xs text-muted-foreground/50">—</span>
              <span className="text-xs text-muted-foreground font-body-story flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {entry.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold font-display-story mb-3 transition-colors duration-300 group-hover:text-foreground text-foreground/80">
              {entry.title}
            </h3>

            {/* Summary with quote style */}
            <div className="relative pl-4 mb-5">
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
                style={{ background: `linear-gradient(to bottom, ${config.color}, transparent)` }}
              />
              <p className="text-muted-foreground font-body-story italic text-sm leading-relaxed">
                {entry.summary}
              </p>
            </div>

            {/* Bottom: tags + read CTA */}
            <div className="flex items-center justify-between gap-4">
              {entry.tags && entry.tags.length > 0 && (
  <div className="flex items-center gap-1.5 flex-wrap">
    {entry.tags.slice(0, 3).map((tag) => (
      <span
        key={tag}
        className="text-[10px] px-2 py-0.5 rounded-full border border-border/30 text-muted-foreground/60 flex items-center gap-1"
      >
        <Tag className="w-2 h-2" />
        {tag}
      </span>
    ))}
  </div>
)}


              <motion.div
                className="flex items-center gap-1 text-xs font-display-story shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: config.color }}
                whileHover={{ x: 3 }}
              >
                Read
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Connection line between cards */}
      {index < 4 && (
        <div className="flex justify-center py-2">
          <motion.div
            className="w-[1px] h-6 bg-gradient-to-b from-primary/20 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default ArchiveCard;
