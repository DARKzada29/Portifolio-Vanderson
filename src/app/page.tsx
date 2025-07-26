'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Zap, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const skills = [
  { name: 'React.js', level: 90, color: 'neon-blue' },
  { name: 'TypeScript', level: 85, color: 'neon-green' },
  { name: 'JavaScript', level: 85, color: 'neon-purple' },
  { name: 'HTML5', level: 95, color: 'neon-blue' },
  { name: 'CSS3', level: 95, color: 'neon-green' },
  { name: 'Tailwind CSS', level: 90, color: 'neon-purple' },
  { name: 'Sass', level: 80, color: 'neon-blue' },
  { name: 'Next.js', level: 88, color: 'neon-green' },
  { name: 'React Hooks', level: 85, color: 'neon-purple' },
  { name: 'Context API', level: 80, color: 'neon-blue' },
  { name: 'RESTful APIs', level: 85, color: 'neon-green' },
  { name: 'Git', level: 90, color: 'neon-purple' },
  { name: 'GitHub', level: 88, color: 'neon-blue' },
  { name: 'Figma', level: 75, color: 'neon-green' },
  { name: 'Photoshop', level: 70, color: 'neon-purple' },
  { name: 'Illustrator', level: 70, color: 'neon-blue' },
];

const stats = [
  { number: '50+', label: 'Projetos Concluídos', icon: Code },
  { number: '3+', label: 'Anos de Experiência', icon: Zap },
  { number: '100%', label: 'Dedicação', icon: Rocket },
];

export default function Home() {
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-neon-blue/10 text-neon-blue rounded-full text-sm font-medium border border-neon-blue/20">
              👋 Olá, eu sou
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 font-mono"
          >
            <span className="neon-text-blue">Vanderson</span>
            <br />
            <span className="text-foreground">"</span>
            <span className="neon-text-green">Cangaty</span>
            <span className="text-foreground">"</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="neon-text-purple font-semibold">Desenvolvedor Full Stack</span> criando 
            soluções reais com <span className="text-neon-blue">tecnologia de ponta</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/projetos">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-neon-blue text-black font-semibold rounded-lg hover:bg-neon-blue/90 transition-all duration-300 neon-glow-blue"
              >
                <span>Ver Projetos</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <Link href="/contato">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green/10 transition-all duration-300"
              >
                <Mail size={20} />
                <span>Entrar em Contato</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/vandersoncangaty', color: 'hover:text-neon-blue' },
              { icon: Linkedin, href: 'https://linkedin.com/in/vandersoncangaty', color: 'hover:text-neon-green' },
              { icon: Mail, href: 'mailto:contato@vandersoncangaty.dev', color: 'hover:text-neon-purple' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 text-muted-foreground ${social.color} transition-all duration-300`}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-neon-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-8 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-blue/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-blue/10 rounded-full mb-4">
                    <Icon size={32} className="text-neon-blue" />
                  </div>
                  <h3 className="text-4xl font-bold neon-text-blue mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="neon-text-purple">Tecnologias</span> & <span className="neon-text-green">Habilidades</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ferramentas e tecnologias que domino para criar soluções incríveis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className={`text-sm font-medium text-${skill.color}`}>{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary/50 rounded-full h-2">
                  <motion.div
                    className={`h-2 bg-${skill.color} rounded-full`}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={skill.level}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-12 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10 rounded-2xl border border-border/50 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para criar algo <span className="neon-text-blue">incrível</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Vamos transformar sua ideia em realidade. Entre em contato e vamos conversar sobre seu próximo projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 bg-neon-purple text-white font-semibold rounded-lg hover:bg-neon-purple/90 transition-all duration-300 neon-glow-purple"
                >
                  <Mail size={20} />
                  <span>Vamos Conversar</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green/10 transition-all duration-300"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

