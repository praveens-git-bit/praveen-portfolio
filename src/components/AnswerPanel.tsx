import { motion } from 'framer-motion';
import { X, Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Award, Star } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import type { Question } from './SearchPortfolio';

interface AnswerPanelProps {
  question: Question;
  onClose: () => void;
}

const AnswerPanel = ({ question, onClose }: AnswerPanelProps) => {
  const { isDay } = useTheme();

  const renderContent = () => {
    switch (question.id) {
      case 'about':
        return <AboutContent />;
      case 'skills':
        return <SkillsContent />;
      case 'cloud':
        return <CloudContent />;
      case 'ai':
        return <AIContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'experience':
        return <ExperienceContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
      >
        <div className={`relative w-full h-full rounded-3xl overflow-hidden ${
          isDay 
            ? 'bg-white/95 border border-slate-200' 
            : 'bg-slate-900/95 border border-primary/20'
        } shadow-2xl`}>
          
          {/* Header gradient */}
          <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${question.color} opacity-20`} />
          
          {/* Scan lines effect */}
          <div className="absolute inset-0 scan-lines opacity-5 pointer-events-none" />

          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Content */}
          <div className="relative h-full overflow-y-auto p-6 md:p-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${question.color} text-white shadow-xl`}
                  animate={{ 
                    boxShadow: [
                      '0 10px 40px -10px rgba(0,0,0,0.3)',
                      '0 20px 60px -10px rgba(0,0,0,0.4)',
                      '0 10px 40px -10px rgba(0,0,0,0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {question.icon}
                </motion.div>
                <div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${question.color} text-white`}>
                    {question.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2">{question.question}</h2>
                </div>
              </div>
            </motion.div>

            {/* Dynamic content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 text-2xl text-primary/30 font-jp">「</div>
          <div className="absolute bottom-4 right-4 text-2xl text-primary/30 font-jp">」</div>
        </div>
      </motion.div>
    </>
  );
};

// About Content Component
const AboutContent = () => (
  <div className="space-y-6">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card rounded-2xl p-6 border border-primary/20"
    >
      <div className="flex items-start gap-6">
        <motion.div
          className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-white shadow-xl"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          P
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Praveen</h3>
          <p className="text-muted-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Cloud Architect & AI Builder
          </p>
          <div className="flex gap-2 mt-3">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">Level 99</span>
            <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm">S-Rank</span>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-lg leading-relaxed"
    >
      A passionate <span className="text-primary font-semibold">Cloud Architect</span> and{' '}
      <span className="text-secondary font-semibold">AI Builder</span> on a quest to transform ideas 
      into reality. With expertise in cloud infrastructure, machine learning, and creative development, 
      Praveen crafts solutions that push the boundaries of what's possible.
    </motion.p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: 'Years Experience', value: '5+', icon: Calendar },
        { label: 'Projects Completed', value: '50+', icon: Award },
        { label: 'Technologies', value: '20+', icon: Star },
        { label: 'Certifications', value: '8', icon: Award },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="glass-card rounded-xl p-4 text-center border border-primary/10"
        >
          <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold text-primary">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

// Skills Content Component
const SkillsContent = () => {
  const skills = [
    { name: 'Cloud Architecture', level: 95, color: 'from-cyan-500 to-blue-500' },
    { name: 'AI & Machine Learning', level: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'Python', level: 92, color: 'from-green-500 to-emerald-500' },
    { name: 'TypeScript', level: 88, color: 'from-blue-500 to-indigo-500' },
    { name: 'React', level: 85, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Kubernetes', level: 87, color: 'from-blue-600 to-blue-800' },
    { name: 'Terraform', level: 85, color: 'from-purple-600 to-indigo-600' },
    { name: 'Docker', level: 90, color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <div className="space-y-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card rounded-xl p-4 border border-primary/10"
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium">{skill.name}</span>
            <span className="text-primary font-bold">{skill.level}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Cloud Content Component
const CloudContent = () => {
  const cloudSkills = [
    { name: 'AWS', description: 'EC2, Lambda, S3, RDS, EKS', certified: true },
    { name: 'Google Cloud', description: 'GKE, Cloud Run, BigQuery', certified: true },
    { name: 'Azure', description: 'AKS, Functions, Cosmos DB', certified: true },
    { name: 'Kubernetes', description: 'Cluster management, Helm, Operators', certified: false },
    { name: 'Terraform', description: 'Infrastructure as Code, Modules', certified: false },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cloudSkills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold">{skill.name}</h4>
            {skill.certified && (
              <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                Certified
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm">{skill.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// AI Content Component
const AIContent = () => {
  const aiProjects = [
    { name: 'LLM Fine-tuning', description: 'Custom language models for specific domains' },
    { name: 'Computer Vision', description: 'Object detection and image classification' },
    { name: 'NLP Pipelines', description: 'Text processing and sentiment analysis' },
    { name: 'MLOps', description: 'End-to-end ML pipeline automation' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-lg">
        Specializing in practical AI applications that solve real-world problems.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {aiProjects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-5 border border-secondary/20 hover:border-secondary/40 transition-colors"
          >
            <h4 className="text-lg font-bold text-secondary mb-2">{project.name}</h4>
            <p className="text-muted-foreground text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Projects Content Component
const ProjectsContent = () => {
  const projects = [
    { 
      name: 'CloudFlow AI', 
      description: 'AI-powered cloud resource optimization platform',
      tags: ['AWS', 'Python', 'ML'],
      status: 'Completed'
    },
    { 
      name: 'DataNexus', 
      description: 'Real-time data pipeline orchestration system',
      tags: ['Kafka', 'Spark', 'K8s'],
      status: 'Completed'
    },
    { 
      name: 'VisionGuard', 
      description: 'Computer vision security monitoring solution',
      tags: ['TensorFlow', 'OpenCV', 'GCP'],
      status: 'In Progress'
    },
  ];

  return (
    <div className="space-y-4">
      {projects.map((project, i) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 }}
          className="glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all group"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground mb-3">{project.description}</p>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Experience Content Component
const ExperienceContent = () => {
  const experiences = [
    { 
      role: 'Senior Cloud Architect', 
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading cloud infrastructure and AI initiatives'
    },
    { 
      role: 'Cloud Engineer', 
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built scalable microservices architecture'
    },
    { 
      role: 'Software Developer', 
      company: 'DevAgency',
      period: '2018 - 2020',
      description: 'Full-stack development and DevOps'
    },
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
      
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-4 w-5 h-5 rounded-full bg-primary border-4 border-background"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
            
            <div className="glass-card rounded-xl p-5 border border-primary/10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
              <h4 className="text-lg font-bold">{exp.role}</h4>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-muted-foreground mt-2 text-sm">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Contact Content Component
const ContactContent = () => {
  const contacts = [
    { icon: Mail, label: 'Email', value: 'praveen@example.com', href: 'mailto:praveen@example.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/praveen', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/praveen', href: '#' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-lg">
        Let's connect and build something amazing together!
      </p>
      
      <div className="grid gap-4 md:grid-cols-3">
        {contacts.map((contact, i) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all text-center group"
          >
            <contact.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <h4 className="font-bold mb-1">{contact.label}</h4>
            <p className="text-sm text-muted-foreground">{contact.value}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="glass-card rounded-xl p-6 border border-primary/20"
      >
        <h4 className="font-bold mb-4">Send a Message</h4>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-background/50 rounded-lg px-4 py-3 border border-primary/10 focus:border-primary/30 outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-background/50 rounded-lg px-4 py-3 border border-primary/10 focus:border-primary/30 outline-none transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-background/50 rounded-lg px-4 py-3 border border-primary/10 focus:border-primary/30 outline-none transition-colors resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium"
          >
            Send Message
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default AnswerPanel;
