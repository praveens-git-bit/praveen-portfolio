import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Senior Cloud Architect',
    titleJp: 'シニアクラウドアーキテクト',
    company: 'TechCorp Industries',
    period: '2022 - Present',
    description: 'Leading cloud transformation initiatives and designing scalable multi-cloud architectures for enterprise clients.',
    achievements: ['Reduced costs 40%', 'Led team of 8', '15+ systems'],
    current: true,
    icon: '⚡',
  },
  {
    title: 'AI/ML Engineer',
    titleJp: 'AI/MLエンジニア',
    company: 'DataVision Labs',
    period: '2020 - 2022',
    description: 'Developed machine learning models for computer vision and NLP applications. Built end-to-end ML pipelines.',
    achievements: ['25% accuracy boost', '10+ ML models', 'Patent pending'],
    current: false,
    icon: '🧠',
  },
  {
    title: 'Cloud Solutions Developer',
    titleJp: 'クラウドソリューション開発者',
    company: 'CloudFirst Solutions',
    period: '2018 - 2020',
    description: 'Designed and implemented cloud-native applications using microservices architecture.',
    achievements: ['20+ microservices', '99.9% uptime', 'Mentored team'],
    current: false,
    icon: '☁️',
  },
  {
    title: 'Software Engineer',
    titleJp: 'ソフトウェアエンジニア',
    company: 'StartupHub Inc.',
    period: '2016 - 2018',
    description: 'Full-stack development for early-stage startups. Built MVPs and scaled applications.',
    achievements: ['5 products shipped', 'First hire', '10x growth'],
    current: false,
    icon: '🚀',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
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
            <Briefcase size={16} />
            <span className="font-jp">冒険の記録</span>
            <span>JOURNEY LOG</span>
            <Briefcase size={16} />
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animated">
            Experience Arc
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
            style={{ 
              background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))',
              transformOrigin: 'top',
              boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
            }}
          />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline node */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                      exp.current 
                        ? 'bg-gradient-to-br from-primary to-secondary' 
                        : 'bg-gradient-to-br from-muted to-muted-foreground/20'
                    }`}
                    animate={exp.current ? {
                      boxShadow: [
                        '0 0 20px hsl(var(--primary) / 0.5)',
                        '0 0 40px hsl(var(--primary) / 0.8)',
                        '0 0 20px hsl(var(--primary) / 0.5)',
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {exp.icon}
                  </motion.div>
                </motion.div>

                {/* Content card */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div 
                    className="anime-card rounded-xl p-6 relative group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Scan lines */}
                    <div className="absolute inset-0 scan-lines opacity-20 rounded-xl" />
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)'
                      }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <motion.h3 
                            className="text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                          >
                            {exp.title}
                          </motion.h3>
                          <span className="text-xs text-primary/60 font-jp">{exp.titleJp}</span>
                        </div>
                        {exp.current && (
                          <motion.span 
                            className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold flex items-center gap-1"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            NOW
                          </motion.span>
                        )}
                      </div>

                      {/* Company & Period */}
                      <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 text-secondary">
                          <MapPin size={14} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.span
                            key={i}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                          >
                            <Award size={10} />
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/30" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/30" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary/30" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary/30" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
