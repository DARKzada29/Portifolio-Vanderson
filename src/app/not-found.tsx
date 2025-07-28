'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Search, Mail, RefreshCw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated 404 */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8"
          >
            <div className="relative">
              <motion.h1
                variants={itemVariants}
                className="text-9xl md:text-[12rem] font-bold font-mono leading-none"
              >
                <span className="neon-text-blue">4</span>
                <span className="neon-text-purple">0</span>
                <span className="neon-text-green">4</span>
              </motion.h1>
              
              {/* Glitch effect overlay */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute inset-0 text-9xl md:text-[12rem] font-bold font-mono leading-none text-red-500 mix-blend-multiply"
              >
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Página <span className="neon-text-blue">Não Encontrada</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ops! Parece que você se perdeu no espaço digital. 
              A página que você está procurando não existe ou foi movida para outra dimensão.
            </p>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            variants={itemVariants}
            className="relative mb-12"
          >
            <div className="flex justify-center items-center space-x-8 mb-8">
              {/* Floating icons */}
              {[
                { icon: '🚀', delay: 0 },
                { icon: '⭐', delay: 0.5 },
                { icon: '🌙', delay: 1 },
                { icon: '🛸', delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                  className="text-4xl"
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-neon-blue text-black font-semibold rounded-lg hover:bg-neon-blue/90 transition-all duration-300 neon-glow-blue"
              >
                <Home size={20} />
                <span>Voltar ao Início</span>
              </motion.button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 px-8 py-4 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green/10 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              <span>Página Anterior</span>
            </button>

            <button
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2 px-8 py-4 border border-neon-purple text-neon-purple rounded-lg hover:bg-neon-purple/10 transition-all duration-300"
            >
              <RefreshCw size={20} />
              <span>Recarregar</span>
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                title: 'Projetos',
                description: 'Veja meus trabalhos mais recentes',
                href: '/projetos',
                icon: '💼',
                color: 'neon-blue'
              },
              {
                title: 'Blog',
                description: 'Artigos sobre desenvolvimento',
                href: '/blog',
                icon: '📝',
                color: 'neon-green'
              },
              {
                title: 'Contato',
                description: 'Entre em contato comigo',
                href: '/contato',
                icon: '📧',
                color: 'neon-purple'
              }
            ].map((link, index) => (
              <Link key={index} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-blue/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl mb-3">{link.icon}</div>
                  <h3 className={`text-lg font-semibold mb-2 group-hover:text-${link.color} transition-colors`}>
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {link.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10 rounded-xl border border-border/50"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Search size={24} className="text-neon-blue" />
              <h3 className="text-xl font-semibold">Não encontrou o que procurava?</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Talvez eu possa ajudar! Entre em contato e me conte o que você estava procurando.
            </p>
            <Link href="/contato">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-neon-purple text-white font-medium rounded-lg hover:bg-neon-purple/90 transition-all duration-300 mx-auto"
              >
                <Mail size={18} />
                <span>Entrar em Contato</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground text-sm">
              💡 <strong>Curiosidade:</strong> O erro 404 foi criado em 1992 no CERN. 
              O número 404 se refere ao quarto andar, sala 4, onde ficavam os servidores web originais!
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

