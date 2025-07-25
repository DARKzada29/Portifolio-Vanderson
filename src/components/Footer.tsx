'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/vandersoncangaty',
    icon: Github,
    color: 'hover:text-neon-blue',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vandersoncangaty',
    icon: Linkedin,
    color: 'hover:text-neon-blue',
  },
  {
    name: 'Email',
    href: 'mailto:contato@vandersoncangaty.dev',
    icon: Mail,
    color: 'hover:text-neon-green',
  },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Contato', href: '/contato' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border/50 mt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">VC</span>
                </div>
                <span className="text-2xl font-bold font-mono neon-text-blue">
                  Vanderson Cangaty
                </span>
              </Link>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                Desenvolvedor Full Stack criando soluções reais com tecnologia de ponta. 
                Transformando ideias em experiências digitais incríveis.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg bg-secondary/50 text-muted-foreground transition-all duration-300 ${social.color} hover:bg-secondary`}
                    >
                      <Icon size={20} />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 neon-text-green">
                Navegação
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 neon-text-purple">
                Contato
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>contato@vandersoncangaty.dev</p>
                <p>São Paulo, Brasil</p>
                <p>Disponível para projetos</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Vanderson Cangaty. Feito com</span>
            <Heart size={16} className="text-neon-purple animate-pulse" />
            <span>e muito código.</span>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-neon-blue/10 text-neon-blue rounded-lg border border-neon-blue/20 hover:bg-neon-blue/20 transition-all duration-300"
          >
            <ArrowUp size={16} />
            <span className="text-sm font-medium">Voltar ao topo</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Animated border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
    </footer>
  );
}

