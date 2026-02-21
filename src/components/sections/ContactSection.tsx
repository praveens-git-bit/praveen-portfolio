import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub', labelJp: 'ギットハブ', color: 'hover:bg-gray-800 hover:text-white' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', labelJp: 'リンクトイン', color: 'hover:bg-blue-600 hover:text-white' },
  { icon: Mail, href: 'mailto:hello@praveen.dev', label: 'Email', labelJp: 'メール', color: 'hover:bg-primary hover:text-primary-foreground' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "メッセージ送信完了! ✨",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 speed-lines opacity-5" />
      
      <div className="max-w-4xl mx-auto relative z-10">
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
            <Send size={16} />
            <span className="font-jp">通信チャンネル</span>
            <span>CONNECT</span>
            <Send size={16} />
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animated">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            <span className="font-jp">一緒に何か素晴らしいものを作りましょう</span>
            <br />
            <span className="text-sm">Let's create something amazing together</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="anime-card rounded-2xl p-8 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Scan lines */}
            <div className="absolute inset-0 scan-lines opacity-20 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold">Send Message</h3>
                <span className="text-xs text-primary/60 font-jp">メッセージを送る</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-xs text-primary/60 font-jp">名前</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-background/50 border-primary/30 focus:border-primary transition-all focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-xs text-primary/60 font-jp">メール</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-background/50 border-primary/30 focus:border-primary transition-all focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-xs text-primary/60 font-jp">メッセージ</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-primary/30 focus:border-primary transition-all resize-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden neon-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all"
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span className="font-jp text-sm mr-2">送信</span>
                        Send Message
                      </>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </Button>
                </motion.div>
              </form>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/30" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/30" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/30" />
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Info cards */}
            <motion.div 
              className="anime-card rounded-xl p-6 group"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-3 rounded-lg bg-gradient-to-br from-primary to-cyan-400"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                >
                  <Mail size={24} className="text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Email</h4>
                  <p className="text-muted-foreground text-sm">hello@praveen.dev</p>
                  <span className="text-xs text-primary/60 font-jp">電子メール</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="anime-card rounded-xl p-6 group"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-3 rounded-lg bg-gradient-to-br from-secondary to-pink-400"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                >
                  <MapPin size={24} className="text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">Location</h4>
                  <p className="text-muted-foreground text-sm">Available Worldwide</p>
                  <span className="text-xs text-secondary/60 font-jp">世界中どこでも</span>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="anime-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                Connect
                <span className="text-xs text-primary/60 font-jp">ソーシャル</span>
              </h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    className={`p-3 rounded-lg glass-card border border-primary/20 text-foreground/70 transition-all duration-300 ${color}`}
                    aria-label={label}
                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability status */}
            <motion.div 
              className="anime-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: ['0 0 10px #22c55e', '0 0 20px #22c55e', '0 0 10px #22c55e']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-foreground font-medium">Available for new projects</span>
              </div>
              <p className="text-xs text-primary/60 font-jp mt-2">新規プロジェクト受付中</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
