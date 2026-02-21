import { motion } from 'framer-motion';
import { X, Calendar, Tag, Flame } from 'lucide-react';
import type { ArchiveEntry } from './StoryPortfolio';

interface ArchiveDetailProps {
  entry: ArchiveEntry;
  onClose: () => void;
}

const moodAccents: Record<ArchiveEntry['mood'], string> = {
  reflective: 'from-blue-500/20 via-transparent',
  passionate: 'from-red-500/20 via-transparent',
  curious: 'from-amber-500/20 via-transparent',
  raw: 'from-orange-500/20 via-transparent',
};

const ArchiveDetail = ({ entry, onClose }: ArchiveDetailProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Content panel */}
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card-story rounded-xl"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Top accent gradient */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${moodAccents[entry.mood]} to-transparent`} />

        {/* Close button */}
        <motion.button
          className="absolute top-4 right-4 p-2 glass-card-story rounded-full text-foreground/60 hover:text-primary transition-colors z-10 clickable"
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <X size={18} />
        </motion.button>

        <div className="p-8 md:p-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs uppercase tracking-widest text-primary font-display-story flex items-center gap-1">
                <Flame className="w-3 h-3" />
                Chapter {entry.chapter}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {entry.date}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                {entry.category}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-display-story text-gradient-story mb-2">
              {entry.title}
            </h2>

            <p className="text-muted-foreground font-body-story italic mb-8 text-lg">
              "{entry.summary}"
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Body */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="space-y-5"
          >
          {entry.content.split('\n\n').map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-foreground/85 font-body-story leading-relaxed text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Entry link */}
          {entry.link && (
            <motion.a
              href={entry.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary/80 hover:text-primary transition text-sm font-body-story underline underline-offset-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + entry.content.split('\n\n').length * 0.08 }}
            >
              {entry.link.label} →
            </motion.a>
          )}
      </motion.div>


          {/* Tags */}
          <motion.div
            className="flex items-center gap-2 mt-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
           {entry.tags && entry.tags.length > 0 && (
            <>
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/70 flex items-center gap-1 font-body-story"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </>
          )}

          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArchiveDetail;
