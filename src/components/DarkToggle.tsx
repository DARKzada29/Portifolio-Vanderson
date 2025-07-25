'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a preference stored
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored) {
      setIsDark(stored === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-6 h-6 text-yellow-500" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-6 h-6 text-neon-blue" />
        </motion.div>
      </div>

      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {isDark ? 'Modo claro' : 'Modo escuro'}
      </div>
    </motion.button>
  );
}

