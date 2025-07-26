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
    title: 'Portfólio de Fotógrafo',
    description: 'Portfólio online para fotógrafos, com galeria de imagens e informações de contato.',
    longDescription: 'Um portfólio online desenvolvido para fotógrafos, permitindo a exibição de seus trabalhos em uma galeria organizada e a disponibilização de informações de contato para potenciais clientes.',
    image: '/images/projects/portfolio-fotografo.jpg',
    technologies: ['React', 'Next.js', 'CSS', 'Responsividade'],
    category: 'frontend',
    githubUrl: 'https://github.com/DARKzada29/demo-portifolio-fotografo',
    liveUrl: 'https://demo-portifolio-fotografo.onrender.com',
    featured: true,
    createdAt: new Date('2023-05-01'),
    updatedAt: new Date('2023-05-01'),
  },
  {
    id: '2',
    title: 'Portfólio de Designer Gráfico',
    description: 'Portfólio online para designers gráficos, exibindo projetos e serviços.',
    longDescription: 'Um portfólio online criado para designers gráficos, com seções dedicadas à exibição de projetos, descrição de serviços e informações de contato.',
    image: '/images/projects/portfolio-designer.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsividade'],
    category: 'frontend',
    githubUrl: 'https://github.com/DARKzada29/portifolio-designgrafico-demo',
    liveUrl: 'https://portifolio-designgrafico-demo.onrender.com',
    featured: false,
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2023-06-15'),
  },
  {
    id: '3',
    title: 'Projeto Brasil de Ouro',
    description: 'Projeto web com informações sobre o Brasil e seus recursos.',
    longDescription: 'Um projeto web informativo que aborda diversos aspectos do Brasil, incluindo sua cultura, geografia e recursos naturais, apresentado de forma interativa e visualmente atraente.',
    image: '/images/projects/brasil-de-ouro.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/DARKzada29/brasildeouro-project',
    liveUrl: 'https://brasildeouro-project.onrender.com',
    featured: false,
    createdAt: new Date('2023-07-20'),
    updatedAt: new Date('2023-07-20'),
  },
  {
    id: '4',
    title: 'Login Seguro (Demo)',
    description: 'Demonstração de um sistema de login seguro com autenticação de usuário.',
    longDescription: 'Uma aplicação de demonstração que implementa um sistema de login seguro, com funcionalidades de registro de usuário, autenticação e gerenciamento de sessões, utilizando boas práticas de segurança.',
    image: '/images/projects/login-seguro.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Autenticação'],
    category: 'backend',
    githubUrl: 'https://github.com/DARKzada29/project-login-securit-demo',
    liveUrl: 'https://project-login-securit-demo.onrender.com',
    featured: true,
    createdAt: new Date('2023-08-10'),
    updatedAt: new Date('2023-08-10'),
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

