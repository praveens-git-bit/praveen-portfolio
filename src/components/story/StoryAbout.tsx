import { motion } from 'framer-motion';
import { Feather, Mail, MapPin, Instagram } from 'lucide-react';

const StoryAbout = () => {
  return (
    <section id="story-about" className="py-28 px-6 relative">
      {/* Decorative vertical line */}
      <motion.div
        className="absolute left-1/2 top-0 w-[1px] h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          {/* Left: Identity card */}
          <motion.div
            className="glass-card-story p-6 relative overflow-hidden text-center md:text-left"
            whileHover={{ boxShadow: '0 0 50px hsl(0 70% 40% / 0.12)' }}
          >
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-primary/30" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-primary/30" />

            {/* Avatar placeholder */}
            <motion.div
              className="w-24 h-24 mx-auto md:mx-0 mb-5 rounded-full relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                <span className="text-3xl font-display-story text-primary">P</span>
              </div>
              <motion.div
                className="absolute -inset-1 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            <h3 className="text-xl font-bold font-display-story text-foreground mb-1">Praveen</h3>
            <p className="text-sm text-primary/70 font-body-story italic mb-3 flex items-center gap-1 justify-center md:justify-start">
              <MapPin className="w-3 h-3" /> India
            </p>

            <div className="w-12 h-[1px] bg-primary/30 mx-auto md:mx-0 mb-3" />

            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display-story mb-4">
              Cloud by day · Creator by night
            </p>

            {/* Social links */}
            <div className="flex gap-3 justify-center md:justify-start">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_pravee__n/' },
                { icon: Mail, label: 'Gmail', href: 'mailto:praveenyc291@gmail.com' },
              ].map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  
                  aria-label={label}
                  className="p-2.5 glass-card-story text-foreground/50 hover:text-primary transition-colors clickable rounded-lg"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 15px hsl(0 70% 50% / 0.25)' }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio text */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Feather className="w-5 h-5 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold font-display-story text-gradient-story">
                  When the Screen Goes Dark
                </h2>
              </div>

              <p className="text-base font-body-story text-muted-foreground leading-relaxed mb-4">
               When the screen goes dark, I’m Praveen the version only a few people really know. Not the one in meetings or message threads, and not the one measured by output, titles, or timelines. This is where my thoughts slow down, where they stop performing and start wandering.
              </p>

              <p className="text-base font-body-story text-muted-foreground leading-relaxed mb-4">
                I think about my own realm how I would build a world if I were its god, what I would protect, what I would let break, and why certain stories survive every generation. Anime and cinema pull me in for the same reason. Fictional worlds often understand people better than reality does, especially in the quiet moments where characters change without anyone watching.

              </p>

              <p className="text-base font-body-story text-muted-foreground leading-relaxed mb-4">
                There’s a critical voice here too. It keeps asking whether I’ll ever truly succeed, whether the path I’m on will lead anywhere meaningful, and whether my choices are quietly holding me back. It points out the discipline I lack, the habits I should question, and the comfort I sometimes choose. But beneath that voice is another one steadier and more persistent that keeps rebuilding. It pushes me to train, to step onto the badminton court when my body resists, and to move into unfamiliar waters just to feel the pressure and learn how to stay calm within it. <br></br>
               
               </p>

              <p className="text-base font-body-story text-muted-foreground leading-relaxed">
                I’m drawn more to conversations than to crowds. To exchanges that explore ideas rather than fill time. I value the kind of connection where thinking out loud matters more than making noise.
                This space is for thoughts that don’t belong on résumés or timelines. Ideas that need room and silence. If something here makes you pause for a moment, that’s enough. That pause is usually where real conversations begin.
              </p>
            </motion.div>

         {/* Interest tags */}
         {/*   <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {['Mythology', 'Anime', 'Cinema', 'Writing', 'World-Building', 'Philosophy', 'Visual Storytelling'].map((interest) => (
                <motion.span
                  key={interest}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/20 text-primary/70 font-body-story hover:bg-primary/10 transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>  */}
          </div> 
        </div>
      </motion.div>
    </section>
  );
};

export default StoryAbout;
