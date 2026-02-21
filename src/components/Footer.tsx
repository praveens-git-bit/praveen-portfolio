import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-primary/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 speed-lines opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div 
            className="text-center md:text-left"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-orbitron text-2xl font-bold text-gradient-animated">PRAVEEN</span>
            <p className="text-sm text-muted-foreground mt-1 font-jp">クラウドアーキテクト · AI ビルダー</p>
          </motion.div>
          
          {/* Made with love */}
          <motion.div 
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-jp">心を込めて</span>
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>and lots of ☕</span>
          </motion.div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-xs text-primary/50 font-jp">全著作権所有</p>
          </div>
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Bottom decoration */}
        <div className="mt-4 flex justify-center">
          <motion.span 
            className="text-xs text-primary/30 font-jp"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            終わり · THE END
          </motion.span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
