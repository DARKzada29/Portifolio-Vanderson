'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Star, Users, Code, Zap, Target, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  results: string[];
  technologies: {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
  }[];
  features: string[];
  challenges: string[];
  learnings: string[];
  images: {
    main: string;
    gallery: string[];
  };
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  stats: {
    duration: string;
    team: string;
    status: 'completed' | 'in-progress' | 'maintenance';
  };
  category: 'frontend' | 'backend' | 'fullstack' | 'design';
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Mock data - em produção viria do banco de dados baseado no ID
const getProjectById = (id: string): ProjectDetail => {
  const projects: Record<string, ProjectDetail> = {
    '1': {
      id: '1',
      title: 'Portfólio de Fotógrafo',
      subtitle: 'Showcase profissional para fotógrafos',
      description: 'Portfólio online para fotógrafos, com galeria de imagens e informações de contato.',
      longDescription: 'Um portfólio online desenvolvido especificamente para fotógrafos profissionais, permitindo a exibição organizada de seus trabalhos através de uma galeria interativa e responsiva. O projeto foi criado com foco na experiência do usuário e na apresentação visual impactante das fotografias.',
      problem: 'Fotógrafos precisam de uma plataforma digital profissional para exibir seus trabalhos de forma organizada e atrativa, facilitando o contato com potenciais clientes e a divulgação de seus serviços.',
      solution: 'Desenvolvimento de um portfólio responsivo com galeria interativa, seções bem organizadas para diferentes tipos de trabalho, formulário de contato integrado e design otimizado para destacar as fotografias.',
      results: [
        'Interface responsiva que funciona perfeitamente em todos os dispositivos',
        'Galeria interativa com navegação fluida entre as imagens',
        'Formulário de contato funcional para facilitar leads',
        'Design clean que destaca o trabalho fotográfico',
        'Carregamento otimizado das imagens para melhor performance'
      ],
      technologies: [
        { name: 'React', icon: '⚛️', category: 'frontend' },
        { name: 'Next.js', icon: '▲', category: 'frontend' },
        { name: 'CSS3', icon: '🎨', category: 'frontend' },
        { name: 'JavaScript', icon: '📜', category: 'frontend' },
        { name: 'Responsive Design', icon: '📱', category: 'design' }
      ],
      features: [
        'Galeria de imagens responsiva e interativa',
        'Seções organizadas por categoria de trabalho',
        'Formulário de contato integrado',
        'Design otimizado para mobile',
        'Carregamento lazy das imagens',
        'Navegação intuitiva e fluida'
      ],
      challenges: [
        'Otimização do carregamento de múltiplas imagens em alta resolução',
        'Criação de uma galeria interativa e responsiva',
        'Balanceamento entre design visual e performance',
        'Implementação de navegação fluida entre diferentes seções'
      ],
      learnings: [
        'Técnicas avançadas de otimização de imagens para web',
        'Implementação de galerias responsivas com CSS Grid e Flexbox',
        'Melhores práticas para performance em sites com muitas imagens',
        'Design thinking aplicado a portfólios criativos'
      ],
      images: {
        main: '/images/projects/portfolio-fotografo-main.jpg',
        gallery: [
          '/images/projects/portfolio-fotografo-1.jpg',
          '/images/projects/portfolio-fotografo-2.jpg',
          '/images/projects/portfolio-fotografo-3.jpg'
        ]
      },
      links: {
        github: 'https://github.com/DARKzada29/demo-portifolio-fotografo',
        live: 'https://demo-portifolio-fotografo.onrender.com'
      },
      stats: {
        duration: '2 semanas',
        team: 'Individual',
        status: 'completed'
      },
      category: 'frontend',
      featured: true,
      createdAt: new Date('2023-05-01'),
      updatedAt: new Date('2023-05-01'),
    },
    '2': {
      id: '2',
      title: 'Portfólio de Designer Gráfico',
      subtitle: 'Showcase criativo para designers',
      description: 'Portfólio online para designers gráficos, exibindo projetos e serviços.',
      longDescription: 'Um portfólio online criado especificamente para designers gráficos, com seções dedicadas à exibição de projetos criativos, descrição detalhada de serviços oferecidos e informações de contato profissional. O design prioriza a apresentação visual dos trabalhos.',
      problem: 'Designers gráficos necessitam de uma presença digital profissional que reflita sua criatividade e organize seus trabalhos de forma atrativa para potenciais clientes.',
      solution: 'Criação de um portfólio com design moderno e clean, focado na apresentação visual dos projetos, com seções bem estruturadas e navegação intuitiva.',
      results: [
        'Portfólio profissional com design atrativo e moderno',
        'Organização clara dos projetos por categoria',
        'Interface responsiva para todos os dispositivos',
        'Seção de serviços bem estruturada',
        'Formulário de contato funcional'
      ],
      technologies: [
        { name: 'HTML5', icon: '🌐', category: 'frontend' },
        { name: 'CSS3', icon: '🎨', category: 'frontend' },
        { name: 'JavaScript', icon: '📜', category: 'frontend' },
        { name: 'Responsive Design', icon: '📱', category: 'design' }
      ],
      features: [
        'Showcase de projetos organizados por categoria',
        'Seção detalhada de serviços oferecidos',
        'Design responsivo e moderno',
        'Formulário de contato integrado',
        'Navegação fluida entre seções',
        'Otimização para SEO'
      ],
      challenges: [
        'Criação de um design que reflita criatividade sem comprometer usabilidade',
        'Organização eficiente de múltiplos projetos',
        'Balanceamento entre elementos visuais e performance',
        'Implementação de responsividade em layouts complexos'
      ],
      learnings: [
        'Princípios de design aplicados ao desenvolvimento web',
        'Técnicas de CSS para layouts criativos',
        'Organização de conteúdo para portfólios criativos',
        'Otimização de performance em sites com muitos elementos visuais'
      ],
      images: {
        main: '/images/projects/portfolio-designer-main.jpg',
        gallery: [
          '/images/projects/portfolio-designer-1.jpg',
          '/images/projects/portfolio-designer-2.jpg',
          '/images/projects/portfolio-designer-3.jpg'
        ]
      },
      links: {
        github: 'https://github.com/DARKzada29/portifolio-designgrafico-demo',
        live: 'https://portifolio-designgrafico-demo.onrender.com'
      },
      stats: {
        duration: '3 semanas',
        team: 'Individual',
        status: 'completed'
      },
      category: 'frontend',
      featured: false,
      createdAt: new Date('2023-06-15'),
      updatedAt: new Date('2023-06-15'),
    },
    '3': {
      id: '3',
      title: 'Projeto Brasil de Ouro',
      subtitle: 'Portal informativo sobre o Brasil',
      description: 'Projeto web com informações sobre o Brasil e seus recursos.',
      longDescription: 'Um projeto web informativo e educacional que aborda diversos aspectos do Brasil, incluindo sua rica cultura, geografia diversificada e abundantes recursos naturais. O site foi desenvolvido com foco na experiência educativa e apresentação interativa do conteúdo.',
      problem: 'Necessidade de criar uma plataforma educativa e informativa que apresente de forma atrativa e organizada informações sobre o Brasil, seus recursos e características culturais.',
      solution: 'Desenvolvimento de um site interativo com design responsivo, navegação intuitiva e conteúdo bem estruturado, utilizando elementos visuais para tornar a experiência mais envolvente.',
      results: [
        'Portal informativo completo sobre o Brasil',
        'Interface interativa e educativa',
        'Conteúdo bem organizado e acessível',
        'Design responsivo para todos os dispositivos',
        'Navegação intuitiva entre diferentes seções'
      ],
      technologies: [
        { name: 'HTML5', icon: '🌐', category: 'frontend' },
        { name: 'CSS3', icon: '🎨', category: 'frontend' },
        { name: 'JavaScript', icon: '📜', category: 'frontend' }
      ],
      features: [
        'Seções informativas sobre cultura brasileira',
        'Apresentação da geografia e recursos naturais',
        'Design interativo e educativo',
        'Navegação fluida entre conteúdos',
        'Responsividade para dispositivos móveis',
        'Elementos visuais atrativos'
      ],
      challenges: [
        'Organização de grande quantidade de informações de forma acessível',
        'Criação de uma experiência educativa envolvente',
        'Implementação de elementos interativos sem comprometer performance',
        'Design que reflita a diversidade cultural brasileira'
      ],
      learnings: [
        'Técnicas de organização de conteúdo educativo',
        'Implementação de elementos interativos com JavaScript',
        'Design responsivo para conteúdo extenso',
        'Princípios de UX para sites informativos'
      ],
      images: {
        main: '/images/projects/brasil-ouro-main.jpg',
        gallery: [
          '/images/projects/brasil-ouro-1.jpg',
          '/images/projects/brasil-ouro-2.jpg',
          '/images/projects/brasil-ouro-3.jpg'
        ]
      },
      links: {
        github: 'https://github.com/DARKzada29/brasildeouro-project',
        live: 'https://brasildeouro-project.onrender.com'
      },
      stats: {
        duration: '4 semanas',
        team: 'Individual',
        status: 'completed'
      },
      category: 'frontend',
      featured: false,
      createdAt: new Date('2023-07-20'),
      updatedAt: new Date('2023-07-20'),
    },
    '4': {
      id: '4',
      title: 'Login Seguro (Demo)',
      subtitle: 'Sistema de autenticação robusto',
      description: 'Demonstração de um sistema de login seguro com autenticação de usuário.',
      longDescription: 'Uma aplicação de demonstração que implementa um sistema de login seguro e robusto, com funcionalidades completas de registro de usuário, autenticação, gerenciamento de sessões e recuperação de senha, utilizando as melhores práticas de segurança.',
      problem: 'Necessidade de demonstrar competências em desenvolvimento de sistemas de autenticação seguros, implementando boas práticas de segurança e gerenciamento de usuários.',
      solution: 'Desenvolvimento de uma aplicação completa com backend robusto, implementando autenticação JWT, hash de senhas, validação de dados e gerenciamento seguro de sessões.',
      results: [
        'Sistema de autenticação completo e seguro',
        'Implementação de boas práticas de segurança',
        'Interface de usuário intuitiva e responsiva',
        'Gerenciamento eficiente de sessões',
        'Validação robusta de dados de entrada'
      ],
      technologies: [
        { name: 'Node.js', icon: '🟢', category: 'backend' },
        { name: 'Express', icon: '🚀', category: 'backend' },
        { name: 'MongoDB', icon: '🍃', category: 'database' },
        { name: 'JWT', icon: '🔐', category: 'backend' },
        { name: 'bcrypt', icon: '🛡️', category: 'backend' }
      ],
      features: [
        'Registro de usuários com validação',
        'Login seguro com JWT',
        'Hash de senhas com bcrypt',
        'Gerenciamento de sessões',
        'Recuperação de senha',
        'Validação de dados robusta',
        'Interface responsiva'
      ],
      challenges: [
        'Implementação de segurança robusta contra ataques comuns',
        'Gerenciamento eficiente de tokens JWT',
        'Validação e sanitização de dados de entrada',
        'Criação de uma experiência de usuário fluida para autenticação'
      ],
      learnings: [
        'Implementação de autenticação JWT',
        'Boas práticas de segurança em aplicações web',
        'Gerenciamento de banco de dados com MongoDB',
        'Desenvolvimento de APIs RESTful seguras'
      ],
      images: {
        main: '/images/projects/login-seguro-main.jpg',
        gallery: [
          '/images/projects/login-seguro-1.jpg',
          '/images/projects/login-seguro-2.jpg',
          '/images/projects/login-seguro-3.jpg'
        ]
      },
      links: {
        github: 'https://github.com/DARKzada29/project-login-securit-demo',
        live: 'https://project-login-securit-demo.onrender.com'
      },
      stats: {
        duration: '3 semanas',
        team: 'Individual',
        status: 'completed'
      },
      category: 'backend',
      featured: true,
      createdAt: new Date('2023-08-10'),
      updatedAt: new Date('2023-08-10'),
    }
  };

  return projects[id] || projects['1'];
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-neon-green bg-neon-green/10 border-neon-green/20';
      case 'in-progress':
        return 'text-neon-blue bg-neon-blue/10 border-neon-blue/20';
      case 'maintenance':
        return 'text-neon-purple bg-neon-purple/10 border-neon-purple/20';
      default:
        return 'text-muted-foreground bg-secondary/50 border-border/50';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'in-progress':
        return 'Em Desenvolvimento';
      case 'maintenance':
        return 'Em Manutenção';
      default:
        return status;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'text-neon-blue';
      case 'backend':
        return 'text-neon-green';
      case 'fullstack':
        return 'text-neon-purple';
      case 'design':
        return 'text-neon-blue';
      default:
        return 'text-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/projetos"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-neon-blue transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar aos Projetos</span>
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            {/* Status and Category */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.stats.status)}`}>
                <CheckCircle size={14} className="mr-1" />
                {getStatusLabel(project.stats.status)}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium bg-secondary/50 ${getCategoryColor(project.category)}`}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
              {project.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                  <Star size={14} className="mr-1" />
                  Destaque
                </span>
              )}
            </div>

            {/* Title and Subtitle */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-neon-blue mb-6 font-medium">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl">
              {project.longDescription}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-neon-blue" />
                <div>
                  <p className="text-sm text-muted-foreground">Duração</p>
                  <p className="font-semibold">{project.stats.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users size={20} className="text-neon-green" />
                <div>
                  <p className="text-sm text-muted-foreground">Equipe</p>
                  <p className="font-semibold">{project.stats.team}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={20} className="text-neon-purple" />
                <div>
                  <p className="text-sm text-muted-foreground">Criado em</p>
                  <p className="font-semibold">{formatDate(project.createdAt)}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-neon-blue text-black font-semibold rounded-lg hover:bg-neon-blue/90 transition-all duration-300 neon-glow-blue"
                >
                  <ExternalLink size={18} />
                  <span>Ver Projeto</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green/10 transition-all duration-300"
                >
                  <Github size={18} />
                  <span>Código Fonte</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 border border-neon-purple text-neon-purple rounded-lg hover:bg-neon-purple/10 transition-all duration-300"
                >
                  <Zap size={18} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </motion.header>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="h-64 md:h-96 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-muted-foreground">Imagem principal do projeto</p>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem & Solution */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Target size={24} className="text-neon-blue" />
                      <h2 className="text-2xl font-bold">Problema</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Zap size={24} className="text-neon-green" />
                      <h2 className="text-2xl font-bold">Solução</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Features */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Funcionalidades Principais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50"
                    >
                      <CheckCircle size={20} className="text-neon-green mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Results */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Resultados Alcançados</h2>
                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle size={20} className="text-neon-purple mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Challenges & Learnings */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Desafios</h2>
                    <div className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Aprendizados</h2>
                    <div className="space-y-3">
                      {project.learnings.map((learning, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-6"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <Code size={24} className="text-neon-purple" />
                  <h3 className="text-xl font-bold">Tecnologias</h3>
                </div>
                <div className="space-y-4">
                  {['frontend', 'backend', 'database', 'tools', 'design'].map((category) => {
                    const techs = project.technologies.filter(tech => tech.category === category);
                    if (techs.length === 0) return null;
                    
                    return (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center space-x-1 px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-full"
                            >
                              <span>{tech.icon}</span>
                              <span>{tech.name}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.section>

              {/* Project Info */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-6"
              >
                <h3 className="text-xl font-bold mb-6">Informações do Projeto</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-semibold">{getStatusLabel(project.stats.status)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Categoria</p>
                    <p className="font-semibold capitalize">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duração</p>
                    <p className="font-semibold">{project.stats.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Equipe</p>
                    <p className="font-semibold">{project.stats.team}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Criado em</p>
                    <p className="font-semibold">{formatDate(project.createdAt)}</p>
                  </div>
                </div>
              </motion.section>

              {/* Gallery Preview */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-6"
              >
                <h3 className="text-xl font-bold mb-6">Galeria</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-2xl">🖼️</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

