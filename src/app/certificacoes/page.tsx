'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink, Search, Filter, CheckCircle, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'design' | 'other';
  status: 'completed' | 'in-progress' | 'expired';
  image?: string;
}

// Mock data - em produção viria do banco de dados
const mockCertifications: Certification[] = [
  {
    id: '1',
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    issuer: 'UNICESUMAR',
    description: 'Curso superior focado em desenvolvimento de software, análise de sistemas e gestão de projetos tecnológicos.',
    issueDate: new Date('2023-03-01'),
    expiryDate: new Date('2025-07-01'),
    skills: ['Programação', 'Análise de Sistemas', 'Banco de Dados', 'Gestão de Projetos'],
    category: 'fullstack',
    status: 'in-progress',
  },
  {
    id: '2',
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    description: 'Curso completo sobre React.js, incluindo hooks, context API, Redux e melhores práticas.',
    issueDate: new Date('2023-08-15'),
    credentialId: 'UC-12345678',
    credentialUrl: 'https://udemy.com/certificate/UC-12345678',
    skills: ['React.js', 'JavaScript', 'Hooks', 'Redux'],
    category: 'frontend',
    status: 'completed',
  },
  {
    id: '3',
    title: 'TypeScript for Beginners',
    issuer: 'Codecademy',
    description: 'Fundamentos do TypeScript, tipagem estática e integração com projetos JavaScript.',
    issueDate: new Date('2023-09-20'),
    credentialId: 'CERT-TS-2023',
    skills: ['TypeScript', 'JavaScript', 'Tipagem Estática'],
    category: 'frontend',
    status: 'completed',
  },
  {
    id: '4',
    title: 'Adobe Photoshop CC - Essentials',
    issuer: 'Adobe',
    description: 'Curso oficial da Adobe sobre os fundamentos do Photoshop para design gráfico.',
    issueDate: new Date('2022-05-10'),
    expiryDate: new Date('2024-05-10'),
    credentialId: 'ADOBE-PS-2022',
    skills: ['Photoshop', 'Design Gráfico', 'Edição de Imagens'],
    category: 'design',
    status: 'expired',
  },
  {
    id: '5',
    title: 'Git & GitHub Masterclass',
    issuer: 'Coursera',
    description: 'Controle de versão com Git, colaboração em equipe e melhores práticas no GitHub.',
    issueDate: new Date('2023-07-05'),
    credentialId: 'COURSERA-GIT-2023',
    credentialUrl: 'https://coursera.org/verify/COURSERA-GIT-2023',
    skills: ['Git', 'GitHub', 'Controle de Versão', 'Colaboração'],
    category: 'other',
    status: 'completed',
  },
  {
    id: '6',
    title: 'Next.js & React - The Complete Guide',
    issuer: 'Udemy',
    description: 'Desenvolvimento de aplicações full-stack com Next.js, incluindo SSR, SSG e API Routes.',
    issueDate: new Date('2023-10-12'),
    credentialId: 'UC-NEXTJS-2023',
    skills: ['Next.js', 'React', 'SSR', 'SSG', 'API Routes'],
    category: 'fullstack',
    status: 'completed',
  },
];

const categories = [
  { value: 'all', label: 'Todos', color: 'text-foreground' },
  { value: 'frontend', label: 'Frontend', color: 'text-neon-blue' },
  { value: 'backend', label: 'Backend', color: 'text-neon-green' },
  { value: 'fullstack', label: 'Full Stack', color: 'text-neon-purple' },
  { value: 'design', label: 'Design', color: 'text-neon-blue' },
  { value: 'other', label: 'Outros', color: 'text-neon-green' },
];

const statusOptions = [
  { value: 'all', label: 'Todos', color: 'text-foreground' },
  { value: 'completed', label: 'Concluídos', color: 'text-neon-green' },
  { value: 'in-progress', label: 'Em Andamento', color: 'text-neon-blue' },
  { value: 'expired', label: 'Expirados', color: 'text-red-400' },
];

export default function Certificacoes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredCertifications = mockCertifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || cert.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-neon-green" />;
      case 'in-progress':
        return <Clock size={16} className="text-neon-blue" />;
      case 'expired':
        return <Clock size={16} className="text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'in-progress':
        return 'Em Andamento';
      case 'expired':
        return 'Expirado';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-neon-green bg-neon-green/10 border-neon-green/20';
      case 'in-progress':
        return 'text-neon-blue bg-neon-blue/10 border-neon-blue/20';
      case 'expired':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-muted-foreground bg-secondary/50 border-border/50';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-neon-green/10 text-neon-green rounded-full text-sm font-medium border border-neon-green/20">
              🎓 Certificações & Cursos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Aprendizado <span className="neon-text-blue">Contínuo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Minha jornada de aprendizado através de cursos, certificações e formações 
            que me mantêm atualizado com as melhores práticas e tecnologias do mercado.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar certificações..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input/50 border-border/50 focus:border-neon-blue/50"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Categoria:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.value
                          ? `${category.color} bg-current/10 border border-current/20`
                          : 'text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Status:</span>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status.value}
                      onClick={() => setSelectedStatus(status.value)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedStatus === status.value
                          ? `${status.color} bg-current/10 border border-current/20`
                          : 'text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary'
                      }`}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground">
              Mostrando {filteredCertifications.length} certificação{filteredCertifications.length !== 1 ? 'ões' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredCertifications.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredCertifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-green/30 transition-all duration-300 overflow-hidden">
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-lg flex items-center justify-center">
                            <Award size={24} className="text-neon-green" />
                          </div>
                          <div>
                            <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert.status)}`}>
                              {getStatusIcon(cert.status)}
                              <span>{getStatusLabel(cert.status)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-neon-green transition-colors line-clamp-2">
                        {cert.title}
                      </h3>

                      <p className="text-neon-blue font-semibold mb-3">{cert.issuer}</p>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {cert.description}
                      </p>

                      {/* Date Info */}
                      <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>Emitido em {formatDate(cert.issueDate)}</span>
                        </div>
                        {cert.expiryDate && (
                          <div className="flex items-center space-x-2">
                            <Clock size={14} />
                            <span>
                              {cert.status === 'expired' ? 'Expirou em' : 'Expira em'} {formatDate(cert.expiryDate)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        {cert.credentialId && (
                          <span className="text-xs text-muted-foreground font-mono">
                            ID: {cert.credentialId}
                          </span>
                        )}
                        
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-neon-green hover:text-neon-blue transition-colors text-sm font-medium"
                          >
                            <span>Ver Certificado</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">Nenhuma certificação encontrada</h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar os filtros ou termo de busca
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedStatus('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-neon-blue text-black font-medium rounded-lg hover:bg-neon-blue/90 transition-all duration-300"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estatísticas de <span className="neon-text-green">Aprendizado</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Números que refletem meu compromisso com o aprendizado contínuo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-4xl font-bold neon-text-blue mb-2">
                {mockCertifications.filter(c => c.status === 'completed').length}
              </div>
              <p className="text-muted-foreground">Certificações Concluídas</p>
            </div>
            
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-4xl font-bold neon-text-green mb-2">
                {mockCertifications.filter(c => c.status === 'in-progress').length}
              </div>
              <p className="text-muted-foreground">Cursos em Andamento</p>
            </div>
            
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-4xl font-bold neon-text-purple mb-2">
                {Array.from(new Set(mockCertifications.flatMap(c => c.skills))).length}
              </div>
              <p className="text-muted-foreground">Habilidades Desenvolvidas</p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

