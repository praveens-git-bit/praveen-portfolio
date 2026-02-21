import { ExternalLink, Github, Play, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    episode: '01',
    title: 'CloudScale Infrastructure',
    titleJp: 'クラウドスケール',
    description: 'Enterprise-grade cloud infrastructure automation platform with multi-region deployment capabilities and intelligent resource optimization.',
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Python'],
    gradient: 'from-cyan-500 to-blue-600',
    featured: true,
    status: 'COMPLETE',
  },
  {
    episode: '02',
    title: 'AI Vision Analytics',
    titleJp: 'AI ビジョン',
    description: 'Real-time computer vision system for intelligent monitoring and automated insights generation using cutting-edge ML models.',
    tags: ['TensorFlow', 'OpenCV', 'FastAPI', 'React'],
    gradient: 'from-purple-500 to-pink-600',
    featured: true,
    status: 'ACTIVE',
  },
  {
    episode: '03',
    title: 'Neural Chat Assistant',
    titleJp: 'ニューラルチャット',
    description: 'Conversational AI assistant powered by large language models with context-aware responses and multi-turn dialogue.',
    tags: ['LLMs', 'LangChain', 'Next.js', 'PostgreSQL'],
    gradient: 'from-green-500 to-cyan-600',
    featured: false,
    status: 'COMPLETE',
  },
  {
    episode: '04',
    title: 'DataFlow Pipeline',
    titleJp: 'データフロー',
    description: 'Scalable data processing pipeline for real-time analytics with automated ETL workflows and intelligent monitoring.',
    tags: ['Apache Spark', 'Airflow', 'Snowflake', 'dbt'],
    gradient: 'from-orange-500 to-red-600',
    featured: false,
    status: 'COMPLETE',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-32 px-4 overflow-hidden">
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
            <Play size={16} />
            <span className="font-jp">プロジェクトエピソード</span>
            <span>PROJECT EPISODES</span>
            <Play size={16} />
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animated">
            Featured Works
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.episode}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="anime-card rounded-2xl overflow-hidden group relative"
              onMouseEnter={() => setHoveredProject(project.episode)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Episode Banner */}
              <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {/* Scan lines */}
                <div className="absolute inset-0 scan-lines opacity-30" />
                
                {/* Large episode number */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    scale: hoveredProject === project.episode ? 1.1 : 1,
                    opacity: hoveredProject === project.episode ? 0.15 : 0.1
                  }}
                >
                  <span className="text-[10rem] font-bold text-white font-orbitron leading-none">
                    {project.episode}
                  </span>
                </motion.div>

                {/* Episode badge */}
                <div className="absolute top-4 left-4">
                  <motion.div
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold text-white font-jp">第{project.episode}話</span>
                  </motion.div>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    className={`${
                      project.status === 'ACTIVE' 
                        ? 'bg-green-500/80' 
                        : 'bg-primary/80'
                    } text-white backdrop-blur-sm`}
                  >
                    {project.status === 'ACTIVE' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse mr-1" />}
                    {project.status}
                  </Badge>
                </div>

                {/* Featured star */}
                {project.featured && (
                  <motion.div 
                    className="absolute bottom-4 right-4"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                )}

                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.episode ? 1 : 0 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 relative">
                {/* Title */}
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                    animate={{ x: hoveredProject === project.episode ? 5 : 0 }}
                  >
                    {project.title}
                  </motion.h3>
                  <span className="text-xs text-primary/60 font-jp">{project.titleJp}</span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + i * 0.05 + 0.5 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary/80 hover:bg-primary/10 hover:scale-105 transition-all cursor-default"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full neon-border hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      <span className="font-jp text-xs mr-1">コード</span>
                      Code
                    </Button>
                  </motion.div>
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      size="sm" 
                      className={`w-full bg-gradient-to-r ${project.gradient} text-white hover:opacity-90`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="font-jp text-xs mr-1">デモ</span>
                      Demo
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/20" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
