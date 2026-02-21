import { Sparkles, Cloud, Brain, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const traits = [
    { icon: Cloud, label: '雲', sublabel: 'Cloud', color: 'from-cyan-400 to-blue-500', stat: 'S' },
    { icon: Brain, label: '知能', sublabel: 'AI', color: 'from-purple-400 to-pink-500', stat: 'S' },
    { icon: Palette, label: '創造', sublabel: 'Create', color: 'from-orange-400 to-red-500', stat: 'A' },
    { icon: Zap, label: '速度', sublabel: 'Speed', color: 'from-yellow-400 to-orange-500', stat: 'A' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section id="about" ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Section decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-3 text-primary text-sm font-medium mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} />
            <span className="font-jp">キャラクタープロフィール</span>
            <span>CHARACTER PROFILE</span>
            <Sparkles size={16} />
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animated">
            About Me
          </h2>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-5 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Character Card - Anime ID Style */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-2"
          >
            <div className="anime-card rounded-2xl p-6 relative overflow-hidden">
              {/* Scan lines overlay */}
              <div className="absolute inset-0 scan-lines opacity-30" />
              
              {/* Top decoration */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-primary font-jp">ID: PRV-001</span>
                <span className="text-xs text-primary/60">RANK: S</span>
              </div>

              {/* Avatar */}
              <motion.div 
                className="w-36 h-36 mx-auto mb-6 relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-spin-slow opacity-50" style={{ animation: 'spin 8s linear infinite' }} />
                <div className="absolute inset-1 rounded-full bg-background" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-5xl font-bold text-gradient">P</span>
                </div>
                {/* Status indicator */}
                <motion.div 
                  className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-background flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-[10px] font-bold text-white">ON</span>
                </motion.div>
              </motion.div>

              {/* Name plate */}
              <div className="text-center mb-6 relative">
                <motion.div
                  className="absolute -left-4 top-1/2 -translate-y-1/2 text-primary/30 text-2xl font-jp"
                >「</motion.div>
                <h3 className="text-2xl font-bold text-foreground">PRAVEEN</h3>
                <p className="text-sm text-primary font-jp">プラヴィーン</p>
                <motion.div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 text-primary/30 text-2xl font-jp"
                >」</motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {traits.map(({ icon: Icon, label, sublabel, color, stat }, i) => (
                  <motion.div
                    key={label}
                    className="text-center group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${color} mb-1 mx-auto w-fit group-hover:shadow-lg transition-shadow`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <p className="text-[10px] text-muted-foreground font-jp">{label}</p>
                    <p className="text-xs font-bold text-primary">{stat}</p>
                  </motion.div>
                ))}
              </div>

              {/* Class/Title */}
              <div className="text-center py-3 border-t border-primary/20">
                <p className="text-xs text-muted-foreground mb-1">CLASS</p>
                <p className="text-sm font-bold text-gradient">Cloud Architect · AI Builder</p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50" />
            </div>
          </motion.div>

          {/* Story Cards */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            variants={containerVariants}
          >
            {[
              {
                icon: '🌟',
                title: 'Origin Story',
                titleJp: '起源',
                content: 'In the vast digital realm, I emerged as a builder of cloud kingdoms and architect of intelligent systems. My journey began with curiosity and evolved into mastery over the forces of technology.',
                gradient: 'from-primary/20 to-transparent',
              },
              {
                icon: '⚡',
                title: 'Special Abilities',
                titleJp: '能力',
                content: 'Wielding the power of cloud infrastructure and artificial intelligence, I transform complex challenges into elegant solutions. My arsenal includes scalable architectures, intelligent automation, and creative innovation.',
                gradient: 'from-secondary/20 to-transparent',
              },
              {
                icon: '🎯',
                title: 'Current Quest',
                titleJp: '任務',
                content: 'Currently on a mission to build AI-powered applications that reshape industries. Seeking allies for epic collaborations and legendary projects that push the boundaries of possibility.',
                gradient: 'from-accent/20 to-transparent',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="anime-card rounded-xl p-6 relative group"
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs text-primary/60 font-jp">{item.titleJp}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.content}
                  </p>
                </div>

                {/* Hover indicator */}
                <motion.div 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-primary opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
