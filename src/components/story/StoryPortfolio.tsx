import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Flame, BookOpen, Scroll, Feather, PenTool, Sparkles, X, Calendar, Tag } from 'lucide-react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import StoryHero from './StoryHero';
import StoryAbout from './StoryAbout';
import ArchiveCard from './ArchiveCard';
import ArchiveDetail from './ArchiveDetail';

const storyNavItems = [
  { label: 'Home', target: 'story-hero' },
  { label: 'About', target: 'story-about' },
  { label: 'Chronicles', target: 'story-chronicles' },
];

const StoryFloatingNav = () => {
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
    storyNavItems.forEach(({ target }) => {
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
            className="w-10 h-10 rounded-full glass-card-story border border-primary/30 flex items-center justify-center clickable hover:border-primary/60 transition-colors"
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
            className="flex items-center gap-1 px-2 py-1.5 rounded-full glass-card-story border border-primary/20"
            initial={{ opacity: 0, scale: 0.8, originX: 1, originY: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            {storyNavItems.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => {
                  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                  setExpanded(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-display-story transition-all duration-300 clickable whitespace-nowrap ${
                  active === target
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

export interface ArchiveEntry {
  id: string;
  chapter: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  tags?: string[];
  link?: {
    label: string;
    href: string;
  };
  mood: 'reflective' | 'passionate' | 'curious' | 'raw';
}

const entries: ArchiveEntry[] = [
  {
    id: '1',
    chapter: 'I',
    title: 'Day Zero & Saga of the Rolling Dice',
    category: 'Interests',
    date: 'Dec 2024',
    summary: 'Rolling the dice mattered more than preparation.',
    content: `When I first had the idea of making a short film, it came with an instinctive goal to submit it to a competition. That urgency shaped everything. I wrote the first version of the script in a single night and shared it with my friends the next day. They did not really like it. It felt rushed, uneven, and incomplete, and they were not wrong.

              Things began to change when we found the person we needed for one of the key characters. He was an old man, far more raw than what we had imagined. We discussed the story with him. He did not like it much either, but he still agreed to join us. That decision mattered more than approval.

              As we continued working on the story, one of my friends who wanted to become a director stepped in with a stronger vision. He reworked the script, adding a thriller element and a rawness that the original version lacked. That version connected better and felt more honest. It was something people could actually watch.

              For a while, everyone came together to make it happen. But a ten minute film stretched into three or four months of effort. Slowly, reality set in. People drifted back to their personal lives, responsibilities, and work. At one point, it was just three of us left. Me, the aspiring director, and the old man stood on roadsides and shot scenes with whatever time and energy we had.

              Somehow, we finished the film.

              We did not submit it to the competition we originally prepared for. Instead, we sent it elsewhere. We did not win anything. But we made the film with full commitment, and that mattered more than any result.

              There were conflicts along the way. I fought with my friend because the film was not turning out the way I had imagined. It was not what I expected. But it was not less either. It was different, and it taught us something important.

              We learned that finishing matters more than perfect outcomes. We learned that sometimes rolling the dice and moving forward is more important than waiting to feel ready. Preparation has limits, but momentum does not.

              We still carry the hunger to make another film. Circumstances have not allowed it yet. But one day we will do it again. And when we do, the world will see what we can create, stroke by stroke, frame by frame, screen to screen.

              The saga has not ended. It is only waiting for its next sound.`,

    link: {
      label: 'Watch the Film on YouTube',
      href: 'https://www.youtube.com/watch?v=SVBjeoeaC6I&t=12s',
    },
    mood: 'passionate',
  },
  {
    id: '2',
    chapter: 'II',
    title: 'Between Drafts, Between Strokes',
    category: 'Updates',
    date: 'Nov 2024',
    summary: 'The Spark That Appeared to Be a Writer.',
    content: `It started quietly in 2019, around my final English exam and the stillness that followed. When the world shut down during COVID, I began writing not because I knew how, but because I could not stop imagining. I wrote a love story, nearly fifty pages of rough draft, and later abandoned it when it no longer felt honest.

              So I turned to short stories. For months, I wrote constantly, discarded most of it, and kept going. Nothing about it felt magical. It was repetition, failure, and persistence. When I joined college, I realized how limited my relationship with English had been. It was learned through translation, not expression. That gap stayed with me, but it also pushed me to try harder.

              During the second wave of COVID, I returned to writing. This time, a few people noticed. Their encouragement mattered more than they probably knew. To understand the process, I published a small forty page book. It did not change everything, but it taught me something important. Finishing matters.

              I still struggle with long novels. I tend to revise too early and chase improvement before completion. Only recently did I understand that a first draft does not need to be right. It only needs to exist. Publishing Tales of Alley was not about success. It was about learning to stay with an idea long enough to let it become real.

              If you are curious about that journey, you can find Tales of Alley here:`,
    link: {
      label: 'Read Tales of Alley',
      href: 'https://notionpress.com/in/read/tales-of-alley',
    },
    mood: 'raw',
  },
  {
    id: '3',
    chapter: 'III',
    title: 'The Dancing Square',
    category: 'Thoughts',
    date: 'Oct 2024',
    summary: 'On what we build when everything already works.',
    content: `A generation ago, people built systems before they built comfort. They didn’t inherit technology as convenience; they shaped it as necessity. Early IT wasn’t about making life easier it was about making life possible. Problems were large, unclear, and deeply human: communication, scale, access, survival. People took ownership of these problems because there was no one else to solve them.

              In just two decades, everything shifted. Technology accelerated, systems matured, and many of the foundational problems were solved well enough to disappear into the background. But with that comfort came something else distraction. We now spend an extraordinary amount of time watching short loops of other people’s lives, or creating our own loops hoping they’ll be watched. The square keeps dancing. We keep scrolling.

              And somewhere in that rhythm, a question keeps surfacing: where are the next-generation entrepreneurs? The builders who change how the world works, not just how fast something arrives at the door. We’ve become excellent at optimizing convenience faster delivery, shorter attention spans, smoother interfaces but are these the problems that truly need solving?

              Our older generations didn’t ask how to make life easier. They asked how to make it work. Maybe the biggest problems weren’t solved maybe they were just hidden beneath layers of comfort. And maybe the challenge of this generation isn’t lack of talent or tools, but the courage to look away from the dancing square long enough to notice what still remains broken.`,
              
    mood: 'curious',
  },
  {
    id: '4',
    chapter: 'IV',
    title: 'Between Frames, Silence, and Motion',
    category: 'Interests',
    date: 'Sep 2024',
    summary: 'Why I want to tell stories that matter to me.',
    content: `Why do I want to tell stories that matter to me?
              They may not be easy. They may not be comfortable. And they may not be meant for everyone. So why should anyone else spend their time, energy, or money stepping into something I imagined?

              These questions follow me constantly. Creating anything meaningful comes with fear of doubt, of comparison, of being misunderstood. I wonder how my work will stand out, how it will move past indifference and actually reach someone. How it will live in their mind, not just pass in front of their eyes. How something created from my heart can be felt by another.

              Still, I want to tell stories. I want to entertain people not all of them, but a few who truly connect with what I create. Because the most personal, unmistakably mine thing I have to offer isn’t a technique or a trend. It’s the way I imagine, the way I see a moment, and the way I choose to tell it.

              No two people imagine the same story, even when they stand in the same place. This is what cinema is built on. Frames can be copied, scenes can be referenced, but meaning cannot be duplicated. Every choice a pause, a movement, a silence carries a different emotion in different hands. That difference is not a flaw. It’s the point.

              I tell stories because they are the most unique thing I own. They are how I make sense of the world, and how I try to connect with it. Through them, I offer a part of how I think, feel, and question.

              But the doubt remains: is this enough? Is it reason enough for someone to watch, to care, to invest a part of their life in what I create?

              I’ve come to realize that this doubt itself reveals a flaw in the system. The moment I try to find a reason for everyone to watch, I lose the reason I wanted to create in the first place. The stories that matter to me will never be made for everyone but when they are honest, they will matter deeply to someone.

              And when a few people choose to step into the world I create, grow with it, and feel something real inside it, that is when the stories begin to matter not just to me or those who admire them, but to others as well.`,   
    mood: 'reflective',
  },
];


const StoryPortfolio = () => {
  const { setMode } = usePortfolio();
  const [selectedEntry, setSelectedEntry] = useState<ArchiveEntry | null>(null);
  const archiveRef = useRef<HTMLDivElement>(null);

  const scrollToArchive = () => {
    archiveRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,25%,5%)] via-background to-[hsl(0,15%,8%)]" />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: '5%', right: '10%',
            background: 'radial-gradient(circle, hsl(0 70% 30% / 0.15), transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            bottom: '20%', left: '5%',
            background: 'radial-gradient(circle, hsl(25 80% 40% / 0.2), transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Floating embers */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 rounded-full pointer-events-none"
          style={{
            left: `${10 + Math.random() * 80}%`,
            background: `hsl(${Math.random() * 30} 80% ${50 + Math.random() * 20}%)`,
            boxShadow: `0 0 ${5 + Math.random() * 10}px hsl(25 80% 50% / 0.5)`,
          }}
          animate={{
            y: [window.innerHeight + 50, -50],
            x: [0, Math.sin(i) * 100],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}

      <StoryFloatingNav />

      {/* Back button */}
      <motion.button
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 glass-card-story text-foreground/70 hover:text-primary transition-colors clickable"
        onClick={() => setMode('landing')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-display-story">Exit World</span>
      </motion.button>

      <div className="relative z-10">
        <StoryHero onArchiveClick={scrollToArchive} />
        <StoryAbout />

        {/* Archive Section */}
        <section id="story-chronicles" ref={archiveRef} className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl" />
          </div>

          <motion.div
            className="max-w-4xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display-story text-gradient-story mb-4">
                The Chronicles
              </h2>
              <p className="text-muted-foreground font-body-story italic">Thoughts, interests, and things worth sharing</p>
            </div>

            <div className="space-y-6">
              {entries.map((entry, i) => (
                <ArchiveCard
                  key={entry.id}
                  entry={entry}
                  index={i}
                  onClick={() => setSelectedEntry(entry)}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border/30">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <p className="text-sm text-muted-foreground font-body-story italic">
              © 2025 Praveen. Beyond Work.
            </p>
            <p className="text-xs text-primary/50 font-jp">思考の記録</p>
          </div>
        </footer>
      </div>

      {/* Detail overlay */}
      <AnimatePresence>
        {selectedEntry && (
          <ArchiveDetail entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default StoryPortfolio;
