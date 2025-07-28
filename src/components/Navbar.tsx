'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, FolderOpen, Mail, Download, Bot, BookOpen, Award } from 'lucide-react';

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Sobre', href: '/sobre', icon: User },
    { name: 'Projetos', href: '/projetos', icon: FolderOpen },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Certificações', href: '/certificacoes', icon: Award },
    { name: 'Contato', href: '/contato', icon: Mail },
    { name: 'IA DARK', href: '/ia-dark', icon: Bot },
  ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl font-bold font-mono"
              >
                <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">VC</span>
                </div>
                <span className="neon-text-blue">Cangaty</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-neon-blue bg-neon-blue/10 neon-glow-blue'
                          : 'text-foreground hover:text-neon-blue hover:bg-neon-blue/5'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Download CV Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="flex items-center space-x-2 px-4 py-2 bg-neon-purple text-white rounded-lg font-medium transition-all duration-300 hover:bg-neon-purple/80 neon-glow-purple">
                  <Download size={18} />
                  <span>CV</span>
                </button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="p-2 rounded-lg text-foreground hover:text-neon-blue hover:bg-neon-blue/10 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'text-neon-blue bg-neon-blue/10 neon-glow-blue'
                            : 'text-foreground hover:text-neon-blue hover:bg-neon-blue/5'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile Download CV Button */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pt-2"
                >
                  <button className="flex items-center space-x-3 w-full px-4 py-3 bg-neon-purple text-white rounded-lg font-medium transition-all duration-300 hover:bg-neon-purple/80 neon-glow-purple">
                    <Download size={20} />
                    <span>Download CV</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
}

