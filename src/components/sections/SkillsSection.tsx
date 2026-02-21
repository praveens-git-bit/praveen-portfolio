import { Cloud, Brain, Code, Palette, Zap, Shield, Cpu, Database } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skills = [
  {
    category: 'Cloud Architecture',
    categoryJp: 'クラウド',
    icon: Cloud,
    color: 'cyan',
    gradient: 'from-cyan-400 to-blue-500',
    abilities: [
      { name: 'AWS', level: 95, rank: 'S' },
      { name: 'Azure', level: 90, rank: 'S' },
      { name: 'GCP', level: 85, rank: 'A' },
      { name: 'Kubernetes', level: 88, rank: 'S' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    categoryJp: '人工知能',
    icon: Brain,
    color: 'purple',
    gradient: 'from-purple-400 to-pink-500',
    abilities: [
      { name: 'TensorFlow', level: 85, rank: 'A' },
      { name: 'PyTorch', level: 82, rank: 'A' },
      { name: 'LLMs & GenAI', level: 92, rank: 'S' },
      { name: 'MLOps', level: 88, rank: 'S' },
    ],
  },
  {
    category: 'Development',
    icon: Code,
    color: 'green',
    gradient: 'from-green-400 to-cyan-500',
    abilities: [
      { name: 'Python', level: 92, rank: 'S' },
      { name: 'TypeScript', level: 88, rank: 'S' },
      { name: 'React', level: 85, rank: 'A' },
      { name: 'Node.js', level: 86, rank: 'A' },
    ],
  },
  {
    category: 'Creative & Design',
    icon: Palette,
    color: 'orange',
    gradient: 'from-orange-400 to-red-500',
    abilities: [
      { name: 'UI/UX Design', level: 80, rank: 'A' },
      { name: 'Figma', level: 85, rank: 'A' },
      { name: 'Motion Design', level: 78, rank: 'B' },
      { name: 'Branding', level: 75, rank: 'B' },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'S': return 'text-yellow-400 bg-yellow-400/20';
      case 'A': return 'text-purple-400 bg-purple-400/20';
      case 'B': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id="skills" ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 speed-lines opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
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
            <Zap size={16} />
            <span className="font-jp">能力ステータス</span>
            <span>ABILITY STATS</span>
            <Zap size={16} />
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animated">
            Skills & Powers
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="anime-card rounded-2xl p-6 relative group"
              onMouseEnter={() => setHoveredSkill(skill.category)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} opacity-0 blur-xl transition-opacity duration-500`}
                animate={{ opacity: hoveredSkill === skill.category ? 0.2 : 0 }}
              />

              {/* Scan lines */}
              <div className="absolute inset-0 scan-lines opacity-20 rounded-2xl" />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{skill.category}</h3>
                      <span className="text-xs text-primary/60 font-jp">{skill.categoryJp}</span>
                    </div>
                  </div>
                  
                  {/* Power level */}
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">POWER</span>
                    <motion.p 
                      className="text-2xl font-bold text-gradient"
                      animate={{ 
                        textShadow: hoveredSkill === skill.category 
                          ? '0 0 20px hsl(var(--primary))' 
                          : '0 0 0px transparent'
                      }}
                    >
                      {Math.round(skill.abilities.reduce((a, b) => a + b.level, 0) / skill.abilities.length)}
                    </motion.p>
                  </div>
                </div>

                {/* Abilities */}
                <div className="space-y-4">
                  {skill.abilities.map((ability, i) => (
                    <motion.div 
                      key={ability.name} 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
                    >
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-foreground/80 flex items-center gap-2">
                          {ability.name}
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${getRankColor(ability.rank)}`}>
                            {ability.rank}
                          </span>
                        </span>
                        <span className="text-primary font-medium font-jp">{ability.level}%</span>
                      </div>
                      <div className="h-2 bg-background/50 rounded-full overflow-hidden relative">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${ability.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: index * 0.15 + i * 0.1 + 0.5, ease: "easeOut" }}
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/30" />
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          {[
            { icon: Database, delay: 0 },
            { icon: Shield, delay: 0.5 },
            { icon: Cpu, delay: 1 },
            { icon: Cloud, delay: 1.5 },
            { icon: Brain, delay: 2 },
            { icon: Code, delay: 2.5 },
          ].map(({ icon: Icon, delay }, i) => (
            <motion.div
              key={i}
              className="p-4 glass-card rounded-xl neon-border cursor-pointer"
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: '0 0 30px hsl(var(--primary) / 0.5)'
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, delay },
                rotate: { duration: 0.6 },
              }}
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
