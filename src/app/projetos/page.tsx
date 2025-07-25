'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import type { Project, ProjectFilter } from '@/types';

// Mock data - em produção viria do banco de dados
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.',
    longDescription: 'Uma plataforma de e-commerce completa desenvolvida com Next.js e Node.js, incluindo sistema de autenticação, carrinho de compras, processamento de pagamentos via Stripe, painel administrativo para gestão de produtos e pedidos.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/vandersoncangaty/ecommerce',
    liveUrl: 'https://ecommerce-demo.vandersoncangaty.dev',
    featured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Material-UI'],
    category: 'fullstack',
    githubUrl: 'https://github.com/vandersoncangaty/taskapp',
    liveUrl: 'https://taskapp.vandersoncangaty.dev',
    featured: true,
    createdAt: new Date('2023-11-20'),
    updatedAt: new Date('2023-11-20'),
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Site de portfólio responsivo com animações suaves e design moderno.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/vandersoncangaty/portfolio',
    liveUrl: 'https://vandersoncangaty.dev',
    featured: false,
    createdAt: new Date('2023-09-10'),
    updatedAt: new Date('2023-09-10'),
  },
];

const categories = [
  { value: 'all', label: 'Todos', color: 'text-foreground' },
  { value: 'frontend', label: 'Frontend', color: 'text-neon-blue' },
  { value: 'backend', label: 'Backend', color: 'text-neon-green' },
  { value: 'fullstack', label: 'Full Stack', color: 'text-neon-purple' },
];

export default function Projetos() {
  const [filter, setFilter] = useState<ProjectFilter>({ category: 'all' });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory = filter.category === 'all' || project.category === filter.category;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-neon-green/10 text-neon-green rounded-full text-sm font-medium border border-neon-green/20">
              🚀 Meus Projetos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Projetos que <span className="neon-text-blue">Criei</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Uma coleção dos meus trabalhos mais recentes, desde aplicações web completas 
            até APIs robustas e interfaces elegantes.
          </motion.p>
        </div>
      </section>

      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input/50 border-border/50 focus:border-neon-blue/50"
              />
            </div>

            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter({ ...filter, category: category.value as any })}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter.category === category.value
                      ? `${category.color} bg-current/10 border border-current/20`
                      : 'text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground">
              Mostrando {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                <span className="neon-text-purple">Projetos em Destaque</span>
              </h2>
              <p className="text-muted-foreground">Meus trabalhos mais importantes e recentes</p>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {regularProjects.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                <span className="neon-text-green">Outros Projetos</span>
              </h2>
              <p className="text-muted-foreground">Mais trabalhos do meu portfólio</p>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {regularProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredProjects.length === 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">Nenhum projeto encontrado</h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar os filtros ou termo de busca
              </p>
              <button
                onClick={() => {
                  setFilter({ category: 'all' });
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-neon-blue text-black font-medium rounded-lg hover:bg-neon-blue/90 transition-all duration-300"
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

