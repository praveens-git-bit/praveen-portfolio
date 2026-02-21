import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, Cloud, Brain, Code, Briefcase, Mail, User, Zap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import QuestionCard from './QuestionCard';
import AnswerPanel from './AnswerPanel';

export interface Question {
  id: string;
  question: string;
  icon: React.ReactNode;
  category: string;
  color: string;
}

const questions: Question[] = [
  {
    id: 'about',
    question: 'Who is Praveen?',
    icon: <User className="w-5 h-5" />,
    category: 'About',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'skills',
    question: 'What are his superpowers?',
    icon: <Zap className="w-5 h-5" />,
    category: 'Skills',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud',
    question: 'How does he architect the cloud?',
    icon: <Cloud className="w-5 h-5" />,
    category: 'Cloud',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ai',
    question: 'What AI magic does he create?',
    icon: <Brain className="w-5 h-5" />,
    category: 'AI',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 'projects',
    question: 'Show me his legendary projects',
    icon: <Code className="w-5 h-5" />,
    category: 'Projects',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'experience',
    question: 'What is his adventure timeline?',
    icon: <Briefcase className="w-5 h-5" />,
    category: 'Experience',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'contact',
    question: 'How can I reach him?',
    icon: <Mail className="w-5 h-5" />,
    category: 'Contact',
    color: 'from-red-500 to-pink-500'
  },
];

const SearchPortfolio = () => {
  const { isDay } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 px-4 relative z-10">
      {/* Logo/Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-4"
          animate={{ 
            textShadow: isDay 
              ? '0 0 20px rgba(59, 130, 246, 0.5)' 
              : '0 0 30px hsl(var(--primary)), 0 0 60px hsl(var(--primary))'
          }}
        >
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          <span className="text-sm font-jp text-primary/70">検索</span>
        </motion.div>
        
        <motion.h1 
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={`${isDay ? 'text-slate-700' : 'text-foreground'}`}>Pra</span>
          <span className="text-gradient-animated">veen</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground font-jp"
        >
          クラウドアーキテクト · AI ビルダー
        </motion.p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`w-full max-w-2xl mb-12 transition-all duration-300 ${
          isSearchFocused ? 'scale-105' : ''
        }`}
      >
        <div className={`relative glass-card rounded-full overflow-hidden transition-all duration-300 ${
          isSearchFocused ? 'neon-border shadow-2xl' : 'border border-primary/20'
        }`}>
          <Search className={`absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
            isSearchFocused ? 'text-primary' : 'text-muted-foreground'
          }`} />
          <input
            type="text"
            placeholder="Ask me anything about Praveen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full bg-transparent py-5 pl-14 pr-14 text-lg outline-none placeholder:text-muted-foreground/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          
          {/* Animated border glow */}
          {isSearchFocused && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                boxShadow: [
                  '0 0 20px hsl(var(--primary) / 0.3)',
                  '0 0 40px hsl(var(--primary) / 0.5)',
                  '0 0 20px hsl(var(--primary) / 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
      </motion.div>

      {/* Question Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-4xl"
      >
        <motion.p 
          className="text-center text-muted-foreground mb-6 font-jp"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-primary">「</span>
          Click a question to discover more
          <span className="text-primary">」</span>
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredQuestions.map((question, index) => (
              <QuestionCard
                key={question.id}
                question={question}
                index={index}
                onClick={() => setSelectedQuestion(question)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredQuestions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No questions match your search...</p>
            <p className="text-sm text-muted-foreground/60 mt-2 font-jp">検索結果なし</p>
          </motion.div>
        )}
      </motion.div>

      {/* Answer Panel Modal */}
      <AnimatePresence>
        {selectedQuestion && (
          <AnswerPanel
            question={selectedQuestion}
            onClose={() => setSelectedQuestion(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchPortfolio;
