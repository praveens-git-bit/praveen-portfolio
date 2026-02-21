import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Cloud, Shield, Database, Cpu, Network, DollarSign, Github, Linkedin, Mail, Send } from 'lucide-react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Button } from '@/components/ui/button';
import AbilityConstellation from './AbilityConstellation';

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Abilities', target: 'abilities' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

const FloatingNav = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    navItems.forEach(({ target }) => {
      const el = document.getElementById(target);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {!expanded ? (
          <motion.button
            key="dot"
            className="w-10 h-10 rounded-full glass-card-cloud border border-primary/30 flex items-center justify-center clickable hover:border-primary/60 transition-colors"
            onClick={() => setExpanded(true)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          </motion.button>
        ) : (
          <motion.nav
            key="nav"
            className="flex items-center gap-1 px-2 py-1.5 rounded-full glass-card-cloud border border-primary/20"
            initial={{ opacity: 0, scale: 0.8, originX: 1, originY: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => {
                  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                  setExpanded(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-display-cloud transition-all duration-300 clickable whitespace-nowrap ${active === target
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setExpanded(false)}
              className="ml-1 w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors clickable"
            >
              ×
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactRevealButton = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button
            key="initiate"
            className="group relative clickable"
            onClick={() => setRevealed(true)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500" />
            <div className="relative flex items-center gap-4 px-10 py-6 rounded-2xl glass-card-cloud border border-primary/30 group-hover:border-primary/60 transition-all duration-300">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                animate={{ boxShadow: ['0 0 0px hsl(187 100% 50% / 0)', '0 0 20px hsl(187 100% 50% / 0.3)', '0 0 0px hsl(187 100% 50% / 0)'] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Mail className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <div className="text-left">
                <p className="text-base font-display-cloud text-foreground">Start a Conversation</p>
                <p className="text-xs text-muted-foreground">Tap to reach out</p>
              </div>
            </div>
          </motion.button>
        ) : (
          <motion.a
            key="revealed"
            href="mailto:praveenyc291@gmail.com"
            className="group relative inline-flex items-center gap-3 clickable"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 rounded-xl bg-primary/10 blur-lg group-hover:bg-primary/20 transition-all duration-500" />
            <div className="relative flex items-center gap-3 px-6 py-4 rounded-xl glass-card-cloud border border-border/40 group-hover:border-primary/40 transition-all duration-300">
              <Send className="w-4 h-4 text-primary/70" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors font-display-cloud tracking-wide">
                praveenyc291@gmail.com
              </span>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};

const CloudPortfolio = () => {
  const { setMode } = usePortfolio();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    { name: 'Microsoft Azure', level: 95, icon: Cloud },
    { name: 'Kubernetes (AKS)', level: 90, icon: Cpu },
    { name: 'Network Architecture', level: 88, icon: Network },
    { name: 'Security & Compliance', level: 92, icon: Shield },
    { name: 'Cost Optimization', level: 85, icon: DollarSign },
    { name: 'Infrastructure as Code', level: 88, icon: Database },
  ];

  const experience = [
    {
      year: '2024 - Present',
      title: 'Cloud Consultant I',
      company: 'Spektra Systems LLC',
      description: 'Architecting production-grade Azure environments with focus on governance, security, cost optimization, and operational reliability. Leading customer demos, designing scalable lab infrastructures, implementing AKS-based workloads, and enforcing best practices using ARM templates and automation scripts.',
    },
    {
      year: '2023 - 2024',
      title: 'Cloud Consultant',
      company: 'Spektra Systems LLC',
      description: 'Designed and deployed Azure-based solutions including networking, storage, and compute resources. Built CI/CD pipelines, automated infrastructure provisioning using ARM and PowerShell, managed cloud labs, and supported customer onboarding with secure, well-architected cloud setups.',
    },
  ];

  const projects = [
    {
      title: 'AI-Powered Knowledge Assistant (Azure OpenAI + Semantic Kernel)',
      description: 'Developed an AI assistant that interacts with enterprise knowledge and documentation using Azure OpenAI and Semantic Kernel. The system integrates plugins and function calls to perform operations and retrieve contextual responses instead of generic chatbot answers.',
      tags: ['Azure Functions', 'Microsoft Foundry', 'Azure SQL', 'Semantic Kernel', 'Python'],
    },
    {
      title: 'Azure Platform Administration & Governance Management',
      description: 'Managed and operated Azure environments used by multiple teams by implementing structured access control, security governance, and resource lifecycle management. Handled user group administration, policy enforcement, and subscription organization to ensure secure and efficient usage of cloud resources. Focused on maintaining operational stability while preventing unnecessary resource consumption through continuous monitoring and cleanup practices.',
      tags: ['Azure Portal', 'Microsoft Entra ID', 'RBAC and custom Role Management', 'Policies'],
    },
    {
      title: 'Microsoft Fabric Data Platform Implementation & Capacity Administration',
      description: 'Worked with Microsoft Fabric to build and operate analytics environments by creating data ingestion pipelines, managing data artifacts, and monitoring capacity performance. Configured workspaces and access controls while ensuring stable performance through capacity metric analysis and usage optimization. Supported users working on analytics and AI scenarios by maintaining reliable data availability and resolving workspace and performance issues.',
      tags: ['Microsoft Fabric', 'Data Pipelines', 'Dataflows', 'Lakehouse', 'Capacity Metrics'],
    },

    {
      title: 'Cloud-Native Portfolio Architecture & Azure DevOps CI/CD Deployment',
      description: 'Designed and developed an interactive cloud-native portfolio to showcase technical ecosystem architecture. Implemented Azure DevOps CI/CD pipelines to automate build and deployment workflows, ensuring consistent releases to Azure. Integrated Infrastructure as Code principles and monitoring practices to demonstrate real-world production deployment standards.',
      tags: ['Azure DevOps', 'CI/CD Pipelines', 'Azure Deployment', 'Infrastructure as Code', 'Cloud Architecture'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,40%,8%)] via-background to-[hsl(200,30%,10%)]" />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '10%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ bottom: '10%', right: '-5%' }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(187 100% 50%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(187 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Back button */}
      <motion.button
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 glass-card-cloud text-foreground/70 hover:text-primary transition-colors clickable"
        onClick={() => setMode('landing')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-display-cloud">Exit World</span>
      </motion.button>

      <FloatingNav />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card-cloud text-xs uppercase tracking-widest text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Architecting Calm in the Cloud
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold font-display-cloud mb-6"
            >
              <span className="text-foreground">Cloud</span>
              <br />
              <span className="text-gradient-cloud neon-text-cloud">Consultant</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Building reliable, scalable, and secure cloud infrastructure for enterprises worldwide.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                className="neon-glow-cloud bg-primary text-primary-foreground hover:bg-primary/90 clickable"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 clickable"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display-cloud text-gradient-cloud mb-6">
                  About Me
                </h2>
                <p className="text-muted-foreground mb-6">
                  I'm Praveen, I work as a cloud consultant focused on designing systems that are stable by default and intelligent where it matters. Most well designed cloud architectures should operate quietly, with predictable behavior, controlled costs, and clear boundaries even as usage grows.
                </p>
                <p className="text-muted-foreground mb-6">
                  AI in modern architectures is not an add-on or a trend but a system that must be governed, observed, and constrained. Whether it involves model inference, data pipelines, or decision automation, AI demands the same architectural discipline as any large-scale platform. My work focuses on designing cloud environments where governance, security, observability, and cost controls extend naturally to AI workloads, making intelligent systems reliable, explainable, and sustainable. Good cloud and AI architecture is ultimately about restraint knowing where automation adds value, where human judgment must remain, and where simplicity prevents future risk. When systems scale calmly and AI behaves predictably under load, the design has done its job.
                </p>
                <div className="flex gap-4">
                  {[
                    { Icon: Github, href: "https://github.com/praveens-git-bit" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/praveen-y-c-658b671b8" },
                    { Icon: Mail, href: "praveenyc291@gmail.com", external: false },
                  ].map(({ Icon, href }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card-cloud text-foreground/60 hover:text-primary transition-colors clickable"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 20px hsl(187 100% 50% / 0.3)",
                      }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                className="glass-card-cloud p-8 relative overflow-hidden"
                whileHover={{ boxShadow: '0 0 60px hsl(187 100% 50% / 0.15)' }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display-cloud">PRAVEEN CHAKKADI</h3>
                    <p className="text-sm text-muted-foreground">Cloud Consultant</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certifications</span>
                    <span className="text-primary">Azure Network Engineer Associate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="text-primary">2+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="text-primary">3+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Abilities Constellation */}
        <AbilityConstellation />

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display-cloud text-gradient-cloud mb-12 text-center">
              Experience Timeline
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {/* Dot */}
                  <motion.div
                    className={`absolute top-0 w-4 h-4 rounded-full bg-primary neon-glow-cloud ${i % 2 === 0 ? 'md:-right-2' : 'md:-left-2'} -left-[7px] md:left-auto`}
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="glass-card-cloud p-6 ml-6 md:ml-0">
                    <span className="text-xs text-primary font-display-cloud">{exp.year}</span>
                    <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-muted/20">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display-cloud text-gradient-cloud mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  className="glass-card-cloud p-6 group cursor-pointer clickable"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 60px hsl(187 100% 50% / 0.2)'
                  }}
                >
                  <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary mb-4 rounded-full" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 relative">
          {/* Decorative grid pulse */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-cloud text-xs uppercase tracking-widest text-primary mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to opportunities
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold font-display-cloud mb-6">
              <span className="text-foreground">Let's Build</span>
              <br />
              <span className="text-gradient-cloud neon-text-cloud">Together</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Have an idea that needs robust cloud architecture? Let's make it real.
            </p>

            {/* Innovative CTA: Reveal email on click */}
            <ContactRevealButton />
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border/30">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 Praveen. Cloud Consultant.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CloudPortfolio;
