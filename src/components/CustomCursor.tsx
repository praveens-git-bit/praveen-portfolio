import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { mode } = usePortfolio();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          background: mode === 'story' 
            ? 'hsl(0 70% 50%)' 
            : mode === 'cloud' 
              ? 'hsl(187 100% 50%)' 
              : 'hsl(0 0% 100%)',
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          borderColor: mode === 'story'
            ? 'hsl(0 70% 50% / 0.5)'
            : mode === 'cloud'
              ? 'hsl(187 100% 50% / 0.5)'
              : 'hsl(0 0% 100% / 0.3)',
        }}
      />
    </>
  );
};

export default CustomCursor;
