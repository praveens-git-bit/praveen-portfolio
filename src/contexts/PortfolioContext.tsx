import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PortfolioMode = 'landing' | 'cloud' | 'story';

interface PortfolioContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<PortfolioMode>('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setMode = (newMode: PortfolioMode) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setModeState(newMode);
      setTimeout(() => setIsTransitioning(false), 800);
    }, 600);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('theme-cloud', 'theme-story');
    if (mode === 'cloud') {
      root.classList.add('theme-cloud');
    } else if (mode === 'story') {
      root.classList.add('theme-story');
    }
  }, [mode]);

  return (
    <PortfolioContext.Provider value={{ mode, setMode, isTransitioning, setIsTransitioning }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
