'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Code, Coffee, Gamepad2, Music } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const experiences = [
  {
    id: 1,
    title: 'Desenvolvedor Full Stack Sênior',
    company: 'TechCorp Solutions',
    location: 'São Paulo, SP',
    startDate: '2022',
    endDate: 'Presente',
    current: true,
    description: 'Liderança técnica em projetos de grande escala usando React, Next.js, Node.js e PostgreSQL. Responsável por arquitetura de sistemas e mentoria de desenvolvedores júnior.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 2,
    title: 'Desenvolvedor Frontend',
    company: 'Digital Innovations',
    location: 'São Paulo, SP',
    startDate: '2021',
    endDate: '2022',
    current: false,
    description: 'Desenvolvimento de interfaces modernas e responsivas para aplicações web. Foco em performance e experiência do usuário.',
    technologies: ['React', 'Vue.js', 'JavaScript', 'Sass', 'Webpack'],
  },
  {
    id: 3,
    title: 'Desenvolvedor Junior',
    company: 'StartupTech',
    location: 'São Paulo, SP',
    startDate: '2020',
    endDate: '2021',
    current: false,
    description: 'Início da carreira desenvolvendo aplicações web com foco em aprendizado e crescimento técnico.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

const interests = [
  { name: 'Programação', icon: Code, description: 'Sempre explorando novas tecnologias' },
  { name: 'Café', icon: Coffee, description: 'Combustível para longas sessões de código' },
  { name: 'Games', icon: Gamepad2, description: 'Relaxamento e inspiração criativa' },
  { name: 'Música', icon: Music, description: 'Trilha sonora para o desenvolvimento' },
];

export default function Sobre() {
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

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-2 bg-neon-purple/10 text-neon-purple rounded-full text-sm font-medium border border-neon-purple/20">
                  👨‍💻 Sobre mim
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Olá, eu sou <span className="neon-text-blue">Vanderson</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Desenvolvedor Full Stack apaixonado por criar soluções digitais que fazem a diferença. 
                  Com mais de 3 anos de experiência, transformo ideias complexas em aplicações elegantes e funcionais.
                </p>
                
                <p>
                  Especializado em <span className="text-neon-blue font-semibold">React</span>, 
                  <span className="text-neon-green font-semibold"> Next.js</span> e 
                  <span className="text-neon-purple font-semibold"> Node.js</span>, sempre busco as melhores 
                  práticas e tecnologias mais recentes para entregar resultados excepcionais.
                </p>

                <p>
                  Quando não estou codando, você me encontrará explorando novas tecnologias, 
                  jogando ou planejando meu próximo projeto pessoal.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin size={18} className="text-neon-blue" />
                  <span>São Paulo, Brasil</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar size={18} className="text-neon-green" />
                  <span>Disponível para projetos</span>
                </div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green rounded-full p-1 animate-spin-slow">
                  <div className="w-full h-full bg-background rounded-full" />
                </div>
                
                {/* Profile image placeholder */}
                <div className="absolute inset-2 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <Code size={24} className="text-neon-blue" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <Coffee size={24} className="text-neon-green" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Timeline */}
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
              <span className="neon-text-green">Experiência</span> Profissional
            </h2>
            <p className="text-muted-foreground text-lg">
              Minha jornada no desenvolvimento de software
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={timelineVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className={`w-4 h-4 rounded-full ${
                      exp.current ? 'bg-neon-blue' : 'bg-neon-purple'
                    } border-4 border-background`} />
                    {exp.current && (
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-neon-blue animate-ping" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-neon-blue/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-neon-blue font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.startDate} - {exp.endDate}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="neon-text-purple">Interesses</span> & <span className="neon-text-blue">Hobbies</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              O que me inspira além do código
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-purple/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-purple/10 rounded-full mb-4">
                    <Icon size={32} className="text-neon-purple" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{interest.name}</h3>
                  <p className="text-muted-foreground text-sm">{interest.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

