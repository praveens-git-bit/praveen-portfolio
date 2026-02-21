import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Question } from './SearchPortfolio';

interface QuestionCardProps {
  question: Question;
  index: number;
  onClick: () => void;
}

const QuestionCard = ({ question, index, onClick }: QuestionCardProps) => {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        layout: { duration: 0.3 }
      }}
      onClick={onClick}
      className="group relative w-full text-left"
    >
      <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] border border-primary/10 hover:border-primary/30 overflow-hidden">
        {/* Gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${question.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
        
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <motion.div
            className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${question.color} opacity-20 rotate-45`}
            whileHover={{ scale: 1.5 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${question.color} text-white shadow-lg`}
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              {question.icon}
            </motion.div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r ${question.color} text-white mb-2 inline-block`}>
                {question.category}
              </span>
              <h3 className="text-foreground font-medium leading-tight group-hover:text-primary transition-colors">
                {question.question}
              </h3>
            </div>

            {/* Arrow */}
            <motion.div
              className="text-muted-foreground group-hover:text-primary transition-colors"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)'
          }}
        />
      </div>
    </motion.button>
  );
};

export default QuestionCard;
